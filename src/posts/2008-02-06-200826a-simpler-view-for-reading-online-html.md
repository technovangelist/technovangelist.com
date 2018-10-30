---
path: "/2008/02/06/200826a-simpler-view-for-reading-online-html/" 
date: "2008-02-06T17:56:00+00:00" 
title: A simpler view for reading online
tags:
  - gadgets

---

  <p>
    At work, I have a subscription to Books24x7 which is an online library of technical and business books. Its like that other service from OReilly, but my work uses this instead. When I am browsing through books on the site, its kind of annoying having all the buttons that normally show in Firefox or IE. Then I found out about Prism from Mozilla. Its not brain-dead easy to set up, but its also not too difficult. Just install Prism, then create a configuration file, zip it up, rename the file, and run it.
  </p>
  
  <p>
    <span class="full-image-block ssNonEditable"><span><img src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e9971fe4b01058545b48bf/1257627145707/simplevieweronline.png/1000w" alt="" /></span></span>
  </p>
  
  <p>
    So let me go through this in a bit more detail. First I installed the application. Just follow the prompts. Now create a configuration file called webapp.ini. The contents should be something like:
  </p>
  
  <blockquote>
    <p>
    </p>
    
    <p>
      [Parameters]<br />id=Books@technovangelist.com.PRISM<br />uri=<a href="http://skillport.books24x7.com/bookshelf.asp">http://skillport.books24x7.com/bookshelf.asp</a><br />status=yes<br />location=no<br />sidebar=no<br />navigation=yes
    </p>
  </blockquote>
  
  <p>
    Now&nbsp;zip up the file to something with a webapp extension. Since mine is for Books24x7, I called it books24.webapp. Now double-click on it and it opens a window that goes straight to the site, no extra buttons. Thats great, but the size of the window was wrong. So I added one file to the zip file and called it webapp.js. The contents of the file are here:
  </p>
  
  <blockquote>
    <p>
      function resize()<br />&nbsp; {<br />&nbsp;&nbsp;&nbsp; window.resizeTo(850,1000);<br />&nbsp; };<br />window.onresize=resize;<br />resize();
    </p>
  </blockquote>
  
  <p>
    This is just some simple javascript that resizes the window. Now I have exactly what I wanted. When reading a book online, this helps make it as easy as possible to read without getting distracted.
  </p>
</div>