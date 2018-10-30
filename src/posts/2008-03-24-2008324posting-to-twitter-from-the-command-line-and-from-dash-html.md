---
path: "/2008/03/24/2008324posting-to-twitter-from-the-command-line-and-from-dash-html/" 
date: "2008-03-24T12:18:00+00:00" 
title: Posting to Twitter from the Command Line (And from Dash)
tags:
  - gadgets

---

  <p>
    Twitter is a great tool for me and I like being able to post, but sometimes I wish it were more convenient to do so. Sure there are plenty of apps and widgets, but I wanted something that would let me post from a command line. Not an interactive app, just type and go. I didn&#8217;t see anything for it, so I ventured off on my own.
  </p>
  
  <p>
    First, I saw that <a href="http://rareedge.com/twitteroo/" class="broken_link">Twitteroo</a> had a .NET library for Twitter. So I built my client with that. After a while I realized that Twitteroo does a lot more than I need, so with the aid of Reflector, I found just the lines that I needed, and copied and pasted into my own code.
  </p>
  
  <p>
    Now I can type <span style="font-family: 'Courier New'"><strong>contwit &#8220;This is a status update&#8221;</strong></span> and &#8220;This is a status update&#8221; will show up on my Twitter account. So how did it know who I am? Well, if you just type <span style="font-family: 'Courier New'"><strong>contwit</strong></span> with no parameters, it asks you for a username and password. These are stored in an encrypted string in a configuration file in the same directory as the executable.
  </p>
  
  <p>
    Now, that&#8217;s pretty cool and all, but it still didn&#8217;t make it much easier to use. Enter <a href="http://trydash.com">Dash</a>. Dash is the App Launcher I use. I just type -<-> and a little window pops up. I can then type what I want to launch and it launches it. I don&#8217;t even have to type the whole command because it autocompletes. Visit the site. It works really well.
  </p>
  
  <p>
    So with Dash, I end up typing -<->twthis is my status update and I am done. But my app is a console app and I hate having the console window pop up. Sure, I could write the app as a windowless Windows app, but I am lazy. So to cure this I use <a href="http://www.ntwind.com/software/utilities/hstart.html">HStart from NTWind</a>. This is a great tool that launches any command line app from a hidden window. The options are a bit confusing so here is my Dash command line:
  </p>
  
  <p>
    <span style="font-family: 'Courier New'"><strong>Path: hstart&nbsp;</strong></span>
  </p>
  
  <p>
    <span style="font-family: 'Courier New'"><strong>Arguments: /NOCONSOLE &#8220;&#8221;C:Program FilescontwitContwit.exe&#8221; &#8220;*ALL*&#8221;&#8221;</strong></span>
  </p>
  
  <p>
    Note the double quotes, those are important.
  </p>
</div>