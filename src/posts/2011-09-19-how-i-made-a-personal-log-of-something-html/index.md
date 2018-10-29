---
path: "/2011/09/19/how-i-made-a-personal-log-of-something-html/" 
date: "2011-09-19T09:01:40+00:00" 
title: How I Made A Personal Log Of Something
tags:
  - Alfred
  - Extension
  - GeekTool
  - HowTo

---
Maybe this will be useful for someone else. It will certainly be useful for me next time around.

Ever since I installed the SSD in my MacBook Pro, I had these weird beach balls (that spinning cursor that tells you the machine is hung on something) every now and then. I had read the <a href="http://blog.macsales.com/10433-macbook-pro-2011-models-and-sata-3-0-6-0gbs-update-5272011">blog posts on OWCs website </a>about strange issues with SSDs on the 2011 MBPs, but I didn&#8217;t feel that that applied to me. There had to be another fixable reason. But it happened so rarely, it was hard to figure out if there was a pattern. Some days it would happen 2 or 3 times, other days it would be every 5-10 minutes. I wanted a way to record when it happened, so I created a little Beach Ball Log.

There are two tools that helped make this possible: GeekTool for displaying text files on the desktop, and Alfred for giving me a quick way to run a command. Quicksilver, LaunchPad, or any of the other tools for that should work just as well.

So first I created a script extension in Alfred that responded to keyboard shortcut bblog. The script was as follows:

<blockquote>
    <p>
      echo &#8220;$(date +&#8217;%m/%d/%y::%T&#8217;) &#8211; {query}&#8221; >> ~/Documents/bblog.txt
    </p>
</blockquote>
  

This creates a line in the file every time I run it that looks like:

<blockquote>
    <p>
      09/15/11::10:48:02 &#8211; was having lots. did disk repair, permissions, plus new efi update
    </p>
  </blockquote>

Then I created a GeekTool geeklet that pointed to the bblog.txt file and place it on my desktop. The result was that from anywhere in the system, I could type &#8220;<strong><em>CTRL-SPACE bb text to insert</em></strong>&#8221; and I would get a line with the current time stamp, followed by <strong><em>text to insert</em></strong> added to my desktop. Here is a sample of whats on my desktop now just before I remove it since the problem is now gone.

<img style="margin-left: auto;margin-right: auto" title="Screen Shot 2011-09-19 at 10.57.51 AM.png" src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e9971fe4b01058545b48a4/1316422898007/Screen%20Shot%202011-09-19%20at%2010.57.51%20AM.png/1000w" border="0" alt="Screen Shot 2011 09 19 at 10 57 51 AM" width="454" height="138" />

So what was the solution? Simple, I installed the EFI firmware update from Apple last week. All of a sudden the beach balls disappeared. Its like a whole new mac. ahhhh….
