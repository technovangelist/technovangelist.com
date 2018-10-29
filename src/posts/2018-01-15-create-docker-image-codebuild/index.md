---
title: "Creating Docker Images with AWS CodeBuild"
date: 2018-01-15T23:00:29
draft: false
---
At AWS re:INVENT 2017, I spoke about [Lambda and Step Functions](https://www.youtube.com/watch?v=Gr2TH277EdA) (No, I don't know why it got renamed at the last minute to best practices of lambda workloads either). My demo used those AWS features and many others to build a live blog of my session. One of the key steps was to build a Docker image that is used to build my static website using gatsbyjs. Today, I thought I would break down the process for building this Docker image builder.

[AWS CodeBuild](https://aws.amazon.com/codebuild/) is a service for building whatever you want. It has build in the title but it can really do anything you like. And it has a free plan that lets you run 100 minutes per month. So while [FarGate](https://aws.amazon.com/fargate/) (AWS’ serverless container offering) has no free plan this could be used instead for those short running processes that need to be in a container. 

There is web-based UI for creating a CodeBuild project, but using that you are guaranteed to forget what you did 2 months later forcing you to relearn from scratch when you need to set it up again. So I like to use Terraform to configure the project. 

If you don’t have HashiCorp’s Terraform installed, get that working and then come back here. Now create a file with a .tf extension. I called mine gbuild.tf. This used the AWS provider so you can start by adding the following content

    provider "aws" {
        region     = "us-east-1"
        access_key = “myaccesskey”
        secret_key = “mysecretkey”
    }

Since I use [AWS-Vault from 99Designs](https://github.com/99designs/aws-vault), I leave out the access and secret key. If you are using more than a single AWS account, using AWS-Vault makes it incredibly easy to swap out accounts and I don’t have to edit files before accidently sharing secret info in a GitHub repo.

Next I need to create an IAM role which CodeBuild will use to access my ECS Repository and write to the logs. Below the AWS block, add this:

    resource "aws_iam_role" "codebuild_role" {
        name = "codebuild-role"
        assume_role_policy = <<ENDPOLICY
    {
        "Version": "2012-10-17", 
        "Statement": [
            {
                "Effect": "Allow", 
                "Principal": {
                    "Service": "codebuild.amazonaws.com"
                }, 
                "Action": "sts:AssumeRole"
            }
        ]
    }
    ENDPOLICY
    }

On its own, the role cannot do anything yet. You need to add some policy statements:

    resource "aws_iam_policy" "codebuild_policy" {
        name = "codebuild-policy"
        path = "/service-role/"
        policy = <<ENDPOLICY
    {
        "Version": "2012-10-17", 
        "Statement": [
            {
                "Effect": "Allow", 
                "Resource": [
                    "*"
                ], 
                "Action": [
                    "logs:CreateLogGroup", 
                    "logs:CreateLogStream", 
                    "logs:PutLogEvents", 
                    "ecr:GetAuthorizationToken", 
                    "ecr:InitiateLayerUpload", 
                    "ecr:UploadLayerPart", 
                    "ecr:CompleteLayerUpload", 
                    "ecr:BatchCheckLayerAvailability", 
                    "ecr:PutImage"
                ]
            }
        ]
    }
    ENDPOLICY
    }

So now we have a role, and we have some policies, but the policies are not yet associated with the role. So adding the next block links everything up:

    resource "aws_iam_policy_attachment" "codebuild_policy_attachment" {
        name = "codebuild-policy-attachment"
        policy_arn ="${aws_iam_policy.codebuild_policy.arn}"
        roles = ["${aws_iam_role.codebuild_role.id}"]
    }

Notice that `roles = ["${aws_iam_role.codebuild_role.id}"]` line. This assigns the ID generated when we created the role above to the policy statement. You will see a lot of stuff like this when you work with Terraform. 

Go back a couple code blocks. Usually when I start working with AWS, I start with no access and then when I hit a problem, I try again with the specific access it was complaining about added to the role. Some folks would just add an *, giving them all rights to do anything they like. Generally thats a bad idea. A role should just have the access it needs to do its thing and no more. 

Now lets move on in the terraform file to add the actual CodeBuild project:

    resource "aws_codebuild_project" "buildtechnovangelistbuilder" {
        name = "buildtechnovangelistbuilder"
        description = "CodeBuild project to build technovangelist.com"
        build_timeout= "5"
        service_role="${aws_iam_role.codebuild_role.arn}"

        artifacts {
            type = "NO_ARTIFACTS"
        }

        environment {
            compute_type = "BUILD_GENERAL1_SMALL"
            image = "jch254/dind-terraform-aws"
            type = "LINUX_CONTAINER"
            privileged_mode = true     # don't set this and you get errors on the install
        }

        source {
            type = "GITHUB"
            location = "https://github.com/technovangelist/technovangelist-build.git"
            buildspec = "builder-buildspec.yml"
        }
    }

There is a lot here so let’s walk through it from the beginning. First I am creating a project  called buildtechnovangelistbuilder. It has a timeout of 5 minutes and will use the role created above to execute the project. Typically a CodeBuild project has some sort of output which can be processed in some way. These are called artifacts. I configured the project to know nothing about any artifacts so it will be my responsibility to deal with any output myself.

Next is the environment sub block. There are 3 compute types I can use. The free plan only works if you choose the smallest option: **BUILD_GENERAL1_SMALL**. The image being used is `jch254/dind-terraform-aws`. I found this to be a nice repo that knows about AWS CodeBuild and Docker already so it’s very easy to use for building new images on CodeBuild. 

It’s incredibly important that you set privileged_mode to true. If you don’t you WILL get errors and they WILL NOT make any sense. 

The source sub block set’s the Github repo to perform the build on. CodeBuild will start a Docker Image and will run whatever is defined in the buildspec file defined. 

And that is everything in my Terraform file. So lets move on to the buildspec file. The file is made of a series of phases, each with commands. You could have everything in a single phase, but splitting things out makes it a little easier to see where the actually problem is with a broken build. 

So here is my buildspec file:

    version: 0.2

    phases:
    install:
        commands:
        - nohup /usr/local/bin/dockerd -G dockremap --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&
        - timeout -t 15 sh -c "until docker info; do echo .; sleep 1;done"
    pre_build:
        commands:
        - echo Logging in to Amazon ECR...
        - $(aws ecr get-login --no-include-email --region us-east-1)
    build:
        commands: 
        - echo Building the Docker image...
        - docker build -t mattw-technovangelist-builder .
        - docker tag mattw-technovangelist-builder:latest 133160321634.dkr.ecr.us-east-1.amazonaws.com/mattw-technovangelist-builder:latest 
    post_build:
        commands:
        - echo Pushing the Docker image...
        - docker push 133160321634.dkr.ecr.us-east-1.amazonaws.com/mattw-technovangelist-builder:latest

The first phase is install. Now I didn’t really do anything here. I just looked at the docs for the docker image I am using (jch254/dind-terraform-aws) and did what it told me. For pre_build and build and post_build, again I didn’t really do anything from scratch, I just read the instructions in the ECS Repository. In fact, before you can run this, you need to create the ECS Repository. When you do, you will see the 4 commands you need to run to add a new image to the repository. So really, this entire file is a matter of copy and paste. No thought involved. 

The Dockerfile is where things get interesting. In the build section above, I am building a docker image based on the Dockerfile in the current directory. I want this image to be as small as possible and to already have all the pre requisites installed. If you don’t deal with the pre reqs, you need to install them on every build. And if your image isn’t as small as possible, you need to wait a little extra to load the image. And in this case, time really is money. Not a lot of money, but it could make the difference between paying nothing and paying a couple bucks per month. My Dockerfile uses something called a multi-stage build. You build an image, installing everything you need. You then build a second image, just copying the results into the new image. Doing this gives you all the features you need without any of the extra cruft that came with the install process. 
So here is my Dockerfile:

    FROM mhart/alpine-node:8

    WORKDIR /app
    COPY package.json ./
    RUN npm install --global gatsby-cli
    RUN yarn install --production
    RUN apk -Uuv add python curl && \
        curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"&& \
        unzip awscli-bundle.zip && \
        ./awscli-bundle/install -b /usr/bin/aws && \
        rm awscli-bundle.zip && rm -r awscli-bundle


    FROM mhart/alpine-node:base-8
    WORKDIR /app
    COPY --from=0 /app /backupmod
    COPY --from=0 /usr/bin/ /usr/bin/
    COPY --from=0 /usr/lib/ /usr/lib/
    COPY --from=0 /root/.local /root/.local

I first copy the package.json file and then install everything in it along with the gatsby-cli. I then add a few other things needed for the aws cli. Then copy all the resulting executables into the new image. And thats it. Some of this won’t quite make sense until you see the actual build, but I will explain that in another post. 

If you want this to run every time you make a change to the GitHub repo, you will need to do that in the UI. That’s the one thing you cannot do from the Terraform file. But that seems a small price to pay to get a lot of repeatable functionality. 









