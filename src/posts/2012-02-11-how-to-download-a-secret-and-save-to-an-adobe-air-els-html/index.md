---
path: "/2012/02/11/how-to-download-a-secret-and-save-to-an-adobe-air-els-html/" 
date: "2012-02-11T08:19:46+00:00" 
title: How To Download A Secret and Save To An Adobe Air ELS
tags:
  - Adobe Air
  - code
  - CoffeeScript
  - squarespace
---
One of the problems I had to solve with my recent management app was about how to store secret information. My app needed to have access to an API key, and a special username and password. All three of those things were items I would rather keep out of my user&#8217;s hands so storing it in the Javascript that is part of the Adobe Air app was not a solution. But I found another way.

Let me explain the plaintext part of the problem. With any Adobe Air app, you can very easily look inside and see all source Javascript in plaintext. Since all the logic in my app is in the Javascript, thats a problem. So I decided to store that secret info on a secured page on a Squarespace site. If you type in the right login, you can see the page (assuming you know where to look).

The information stored on the page is in a JSON string, which is then encoded with Base64. So I set up my app to login, download the information, decode it, parse the JSON, and finally store the info locally using the <a href="http://help.adobe.com/en_US/AIR/1.5/devappsflex/WS5b3ccc516d4fbf351e63e3d118666ade46-7e31.html">Adobe encrypted local store</a>. Almost all of that is done in that one ajax call.

Take a look at the source code below. It&#8217;s actually written in CoffeeScript, since thats just how I roll. If you are unfamiliar with <a href="http://coffeescript.org/">CoffeeScript, take the few minutes to learn it</a>.

Even if you aren&#8217;t using Adobe Air, this is a valuable little snippet. Change the last three lines to do something else with your newly found secret info. Not using Squarespace? Well, that will take a bit more work to get the URL and parameters just right.

The benefit of this is that I don&#8217;t have to do much to manage who has rights to the app, I just have to manage who has rights to the page on Squarespace. Also, I stored a hash of the users password in the local store, so on the app&#8217;s startup, I just compare the hash of the password the user enters to the stored hash to verify the user is valid and has access to the info.

I am sure there is a hole in here somewhere, but I think it is good enough for my purposes.
  </p>
</div>