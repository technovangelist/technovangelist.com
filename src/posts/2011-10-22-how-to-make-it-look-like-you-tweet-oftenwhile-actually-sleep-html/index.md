---
path: "/2011/10/22/how-to-make-it-look-like-you-tweet-oftenwhile-actually-sleep-html/" 
date: "2011-10-22T12:32:15+00:00" 
title: How to make it look like you tweet often….while actually sleeping
tags:
  - Alfred
  - BufferApp
  - gadgets

---

  <p>
    I go through phases. The last two weeks are not a good example, but for a while I was tweeting like a madman. Every hour I would say something&hellip;.most of it was even interesting. I got comments from others wondering how I was doing it. Was I really awake and thinking interesting things throughout the day AND at 2AM and 5AM and 11PM?
  </p>
  
  <p>
    Well, some of those days I was, but most of them was &hellip;.MAGIC! OK, maybe not Magic. My secret was an incredibly cool tool called <a href="http://bufferapp.com/r/b063a">BufferApp</a>. It acts like a buffer for the cool things you say. Say a bunch of things in the morning, and it automatically spreads them out across the day. Like MAGIC!
  </p>
  
  <p>
    I have one big peeve with them though. There is no app. There is no Mac app, no PC app, no iPhone app, nothing. Just a web app. Sometimes I want to share something but don&#8217;t want to have to go through the hassle of launching Safari or Firefox or Chrome to get it said. I just want to say it. Sometimes I do that from a little command-line app I use, sometimes I do it from <a href="http://wrenapp.com/">Wren</a>.
  </p>
  
  <p>
    When I use the command line tool, I actually launch that via <a href="http://www.alfredapp.com/">Alfred</a>. I just press CTRL-Space, type TW, space, then what I want to tweet. So easy and so useful. I have a similar command for my company&#8217;s internal social messaging tool. I really wanted a way to submit tweets to Buffer from the command line, but for some reason, the guys at <a href="http://bufferapp.com/r/b063a">BufferApp</a> don&#8217;t want to release an API.
  </p>
  
  <p>
    The workaround though is to send an email to add@to.bufferapp.com. Whatever is in the subject line is going to be the tweet. If you add a link to the body, it will also be included. Thats fine from the iPhone or iPad since most apps let you send as an email. But from the mac desktop its still pretty cheesy. So I started looking around for a solution using Alfred.
  </p>
  
  <p>
    <img style="margin-left: auto;margin-right: auto" title="Screen Shot 2011-10-22 at 2.29.14 PM.png" src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e9971fe4b01058545b4886/1319286734297/Screen%20Shot%202011-10-22%20at%202.29.14%20PM.png/1000w" border="0" alt="Screen Shot 2011 10 22 at 2 29 14 PM" width="600" height="241" />
  </p>
  
  <p>
    The perfect solution lies in the fact that Alfred supports AppleScript AND <a href="http://www.mactech.com/articles/mactech/Vol.21/21.09/ScriptingMail/index.html">this article from MacTech</a> gives the exact syntax for sending an email with AppleScript. The result is that I can just press CTRL-Space, type BUFF space, then what I want to tweet. At whatever time <a href="http://bufferapp.com/r/b063a">BufferApp</a> has decided, that tweet will automatically be posted.
  </p>
  
  <p>
    If you are using Alfred and <a href="http://bufferapp.com/r/b063a">BufferApp</a> and want to do the same thing, I exported my extension which you can use. If you try it, let me know if it worked for you.
  </p>
  
  <p>
    <a href="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e9971fe4b01058545b4887/1319286655593/BufferApp.alfredextension" class="broken_link">Alfred Extension to Post to BufferApp.com</a>
  </p>
</div>