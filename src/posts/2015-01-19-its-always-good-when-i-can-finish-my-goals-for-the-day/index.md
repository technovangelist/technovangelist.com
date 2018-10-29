---
path: "/2015/01/19/its-always-good-when-i-can-finish-my-goals-for-the-day/" 
date: "2015-01-19T23:23:02+00:00" 
title: It’s always good when I can finish my goals for the day
---
I had two goals for today…yes, it’s a holiday and I had goals. My wife is working today so I figured I might as well work on a few fun things. OK, now one of those things is actually work-related, but that’s what you get when you enjoy what you do. 

So here they are:

  1. Finish up the Datadoghq.com Vagrant box
  2. Migrate Technovangelist.com from Squarespace to WordPress on Digital Ocean

Let me walk you through a bit of that. The first item is the continuation of a project that I had been working on for a while. I spent Christmas with my in-laws and with my parents in Detroit and Seattle. In between far too many family visits to count, I started working on adapting a git deploy workflow for the Datadog corporate website. This meant getting everything set up for developing locally. And that meant requiring Apache, PHP, and mysql on the local machine.

I have this configured on my machine, but one of the main reasons for going through this process was to ensure it was easy for anyone to work with. After working with one dev on setting up their local machine, I was frustrated. Then on Friday one of my colleagues, <a href="http://www.miketheman.net/" target="_blank">Mike Fiedler</a>, suggested going the Vagrant/Chef route. 

Of course!!! So I started down the rabbit hole and tumbled faster and faster as I went. Every step I made inspired another turn and with every turn I experienced the joy of solving a puzzle and the grief of creating another. But finally this morning I had a single repo to clone, then run a script and within a few minutes both production and staging are ready to go; ready for your improvements. I am psyched!!

So the other goal was pretty easy: migrate off of Squarespace. Why do I want to do this? Squarespace didn’t do anything wrong, but for the functionality it provides, its just a bit too expensive. I pay $20 per month and have paid that or something similar for about 10 years. Normally that would be fine. But I have hosted another two sites on a Digital Ocean droplet for $5 per month (total, not each). When I signed up for sqsp, I wanted to stop managing my own server. Back then it was harder. Plus my server was hand built by me, then later on it was Community Server and Graffiti. Squarespace was easy. And it wasn’t that much more than what I was paying. Well, except when I was at Microsoft and at the time they were running their own hosting which was free for employees. 

So I started another site on my multisite install of WordPress which took all of a minute. Then exported my content from Squarespace…saying it took a minute would be an exaggeration. Importing it to WordPress was super easy. And I had a theme I liked that I spent a little while customizing. All that was left was a simple DNS change and now the site is live. I’ll give it a few days then will cut the cord with Squarespace.