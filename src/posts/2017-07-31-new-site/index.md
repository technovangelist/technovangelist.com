---
title: "Moved Technovangelist to a New Site"
date: 2017-07-31T09:49:40-04:00
draft: false
description: "This weekend I built a new site. Why? Not sure. I have lots of reasons, but none are so strong that they are the **main** reason to do it. I moved from Wordpress on Digital Ocean to Hugo on surge.sh."
tags:
    - website
    - hugo
    - surge
    - gatsby
---

This weekend I built a new site. Why? Not sure. I have lots of reasons, but none are so strong that they are the **main** reason to do it. I moved from Wordpress on [Digital Ocean](http://www.digitalocean.com) to [Hugo](http://www.gohugo.io) on [surge.sh](http://surge.sh).

### Why get off Wordpress?

Wordpress is a great service if you have the time to maintain (or have someone doing it for you). And its great to host a lot of different sites on a single server. And its a great dynamic site engine. I hear a lot of folks say it limited and has a lot of issues, but they tend to be folks that don't invest the time in doing Wordpress right. 

Wordpress has one of the same big weaknesses of Windows: it's too easy to use. Folks see that ease and think its easy all the way through. Below the surface, it's hard...and it's surprisingly easy to really screw things up. One misplaced semicolon, even in a plugin, and the site is down.

The reason I went to Wordpress is that after leaving [Placester](http://www.placester.com) I decided to do my own thing. I had been helping Placester partners build on the Placester Wordpress plugin, so decided it would be easy to start building Wordpress themes. And so I needed to host a Wordpress site to show that I knew what I was doing.

But Wordpress, if you are doing it all on your own, means hosting a server and maintaining it. I am now in a phase where I don't really want to maintain a little server to host Wordpress. And every few days the server was falling down. 

### Why get off Digital Ocean?

Digital Ocean is also a great service. I used them a lot at Placester (I think the founders might have been in the same Techstars class or something like that). Then there was the deal where if you subscribed to the Changelog podcast, you got 50 bucks credit at DO. So that paid for a lot of months at $5 per month. 

Droplets on DO are amazing. I set one up 6 years ago and its still going strong. But even $5 is a bit to pay if you aren't really doing anything with it. And the thing I was doing kept falling down.

### Why use Hugo?

My site is nothing special. I do nothing dynamic. I sell nothing. I have no need for Wordpress or Drupal or anything else with a database behind the scenes. A static site would serve all my needs quite well. There are plenty of choices for [static site generators](https://www.staticgen.com). Datadog's marketing site and now our docs are built with Hugo, so it makes a lot of sense to use.

But I am investing a bit of time getting better at Javascript and Typescript. I want to focus that into a static site as well. So I first picked [Gatsby](https://www.gatsbyjs.org). I spent almost a full weekend getting it up and running. But after adding my 300 or so posts, it got so slow and often ran out of memory. My site isn't all that big, but it will slowly grow. And if it's having trouble where I start, it's only going to get worse. In 30 minutes with Hugo though, I had a fully up and running site.

### Why use surge.sh? 

A colleague uses surge for his site and hadn't nothing but good things to say about it. It's a cli only service and it fits in with the Hugo workflow. I can run `hugo;surge public` and a few seconds later the site is up and out there. It's pretty amazing, and for the level of service I need, it's free.

We shall see how well it performs, but I am pretty happy with it so far. And that is where things are.