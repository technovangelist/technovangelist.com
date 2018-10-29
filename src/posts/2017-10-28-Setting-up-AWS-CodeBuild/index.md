---
path: "/2017-10-28-need-to-use-codebuild"
title: "Deciding I Need To Use AWS CodeBuild"
date: 2017-10-28T13:21:18-04:00
draft: false
description: "I am getting ready for AWS re:INVENT 2017. One of the core parts of the demo is a website. This post shows you why CodeBuild is a part of it all and why you might want to use it. "
---
If you at least partially live in the Amazon Web Services (AWS) world, then you know that [re:INVENT](https://reinvent.awsevents.com/) is coming up in just a few weeks. That's the big show for the industry with 50,000+ expected attendees this year. The company I work for has an enormous presence, and for the 3rd year in a row, I have a speaking slot. Last year [I had 1800 folks in the room listening to me introduce AWS Lambda to them](https://pbs.twimg.com/media/Cy8OOakVEAALJqS.jpg:large). This time I am taking the next step to talk about orchestration with AWS Step Functions.

Last year my demo was pretty cool. But this year I want to do something even better. I am still building it out but wanted to start giving you some hints about (and self document) the components I am using. At the heart of it all is a [GatsbyJS-based](http://www.gatsbyjs.org) statically generated website. Setting up the site is easy enough. Even compiling it is super easy. But getting that compile to happen in the cloud is a little more involved. 

The primary reason for setting this up is that I need a cool demo. But recently I was in Italy for vacation. My [wife](https://www.eypae.com/people/toni-loiacano) was so proud of me for leaving the laptop home, but that meant I could not publish any of the blog posts I wrote till I returned to the laptop that had the Hugo source code on it. And then I forgot I wrote them until 20 minutes ago. Having a service in the cloud to do this for me would have solved the problem. Now there are many ways to solve this, but this is for a re:INVENT demo and I live in that world. 

OK, so what is [CodeBuild](https://aws.amazon.com/codebuild/)? Well CodeBuild is a serverless offering from AWS for running code builds. Essentially *serverless* just refers to any service where you don't need to worry about the infrastructure, but you have the power and flexibility to do almost anything you like. And perhaps most importantly, you don't pay for it when it's not doing anything for you. If you run it for an entire month, an EC2 is going to be cheaper, but this is for workloads you use for seconds every hour or day.

[CodeBuild is priced per minute of use](https://aws.amazon.com/codebuild/pricing/) and the cost starts at half a penny per minute. Thats over $200 a month if its running 24/7, but you are only using this for a few minutes a day. And the first 100 minutes per month are free. 

What can you do with a CodeBuild instance? Anything you like. There are preconfigured environments for Docker, NodeJS, PHP, Ruby, Android, Go, Java, Python and more. You point it at your code repository on GitHub, BitBucket, AWS CodeCommit. Heck, I think you could even do a KeyBase git repo. You aren't going to want to run a PHP website from here because it takes a few seconds to spin up. But if you are doing a compile, it's perfect. 

My use case is a NodeJS static website generator. My source code is hosted on [AWS CodeCommit](https://aws.amazon.com/codecommit/). When I start a compile, it spins up the environment, clone's the repo, installs any needed NPM modules, and runs the build command. When it's done it pushes the results to an S3 bucket. And for me, S3 is the storage for my demo website, via AWS CloudFront. 

There are a bunch of environments you can choose from, but to make things cooler, you can provide your own environment in the form of a Docker image. And that image can be hosted on Docker Hub, AWS ECS, or any other image repository (it's re:INVENT, can you guess where my image is).

The big benefit for me to use my own Docker image is that the prerequisite NPM modules are already installed so I don't have to wait an extra minute or two for that step. So I was able to drop a 3+ minute build down to less than one minute. 

I'll show you how I built all this out in the next post and in future posts I'll automate the build using a Lambda listening to the CodeCommit repo, and add automated testing with other Lambdas via Step Functions. 

If you want to see the full demo done in my super stylish way, then register for my session at re:INVENT. It's full now, but that happened last year too and they kept bumping me up to bigger rooms. Hopefully it will happen again this year, so sign up for the waitlist. My talk is [SRV335 - Best Practices for Orchestrating AWS Lambda Workloads](https://www.portal.reinvent.awsevents.com/connect/sessionDetail.ww?SESSION_ID=17258&tclass=popup)

