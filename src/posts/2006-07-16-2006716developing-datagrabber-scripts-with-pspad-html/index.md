---
title: Developing Datagrabber Scripts with PSPad
author: technovangelist
type: post
date: "2006-07-16T10:00:00+00:00" 
path: "/2006/07/16/2006716developing-datagrabber-scripts-with-pspad-html/" 
categories:
  - Technology
tags:
  - captaris
  - captaris alchemy
  - pspad
  - utilities

---
<div>
  <p>
    One of my colleagues in the US Sales Engineering organization at Captaris built out a great set of templates for using UltraEdit to build out DataGrabber scripts. The problem with it is that I can&rsquo;t really use it in my classes since I can&rsquo;t really use UltraEdit without having paid for it for all 12 training laptops. So I wanted to find another similar editor I could use for my classes. I had a few basic requirements:
  </p>
  
  <ul>
    <li>
      Light & quick.
    </li>
    <li>
      Use of clips or templates that were easy to customize.
    </li>
    <li>
      The ability to plug in a compiler and to view the output without have to change the&nbsp;viewing context.
    </li>
    <li>
      Built-in Hex view for determining line and record delimiters
    </li>
    <li>
      Free or minimal cost.
    </li>
  </ul>
  
  <p>
    After trying Notepad2, Notepad++, Programmers Editor, Context, and many others, I found PSPad to offer all that I needed. And figuring out how to make a clip file that could be used to create DataGrabber scripts easily took less than a single morning. So now you just create a new definition file, and press <ctrl><space> to add all of the common elements of a datagrabber script. Now I can create a script in less than 10 minutes. Pressing <ctrl><F9> to compile shows the log file at the bottom of the window. Now I can quickly tweak and re-compile until I get it just right.
  </p>
  
  <p>
    For those of you who have no idea what I am talking about, Datagrabber is a component of Alchemy, our archival and records management tool that has been available for more than 10 years. Many of our customers use Alchemy to store customer records in a searchable format, such as invoices and statements. So if they have a mainframe batch that runs every night that produces a single text file with 1000&rsquo;s of customer statements, the problem is trying to store each as a separate record in the archive. Datagrabber parses the text file into a series of records. It also identifies customer numbers, invoice numbers, names, etc based on a definition file. This definition file is what I am using PSPad to create.
  </p>
  
  <p>
    You can find my DataGrabber config for PSPad <a href="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e99720e4b01058545b4932/1257624644573/PSPAD%20Settings.zip" class="broken_link">here</a> along with instructions on how to install it.
  </p>
</div>