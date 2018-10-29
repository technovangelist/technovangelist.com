---
path: "/2011/02/15/cleaning-up-html-with-simple-python-html/" 
date: "2011-02-15T22:48:14+00:00" 
title: Cleaning Up HTML With Simple Python
tags:
  - Python

---

  <p>
    When you learn something new, you must practice it every day before you really understand it. I started working with Python the other day, so I am forcing myself to practice by writing scripts for various things that come up. Today&#8217;s task was cleaning up one of the pages on this website.
  </p>
  
  <p>
    One of the pages in the menu on top of this page is for my <a href="/conferencecall-numbers/" class="broken_link">ConCall Numbers</a>. Its a listing of the Orange Business Conferencing dial in numbers for many countries around the world, along with the participant pass code. I use this for the classes I give, as well as for meetings I need to set up. But the page has been pretty ugly for a long time.
  </p>
  
  <p>
    <img style="margin: 5px 15px 5px 0px" title="ishot-110215232657-1.png" src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e9971fe4b01058545b4860/1297810090064/ishot-110215232657-1.png/1000w" border="1" alt="Ishot 110215232657 1" width="200" align="left" />
  </p>
  
  <p>
    The text had come from an email I received that listed out the numbers. I simply copied and pasted it from the email into the page HTML editor. Along with it came dozens of &nbsp; codes on every line. Fixing it just wasn&#8217;t a priority. But it turns out that fixing it was very easy with just a little bit of Python.
  </p>
  
  <p>
    The result is shown here. Its still a boring list of numbers, but as you can see, its a lot nicer to look at.
  </p>
  
  <p>
    <img style="margin: 5px 0px 5px 20px" title="ishot-110215233315-1.png" src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e9971fe4b01058545b4861/1297810093007/ishot-110215233315-1.png/1000w" border="0" alt="Ishot 110215233315 1" width="250" height="201" align="right" />
  </p>
  
  <p>
    It turns out that the script was very easy to create. I open a file, run three regex searches, and then write it to a new file. Once I had the file, I manually added a starting and ending <table> tag and I was done.
  </p>
  
  <p>
     
  </p>
  
  <p>
    For those who are curious, here is the complete script. I am sure there is a better way to write this, but this was quick and easy, and it worked.
  </p>
  
  <pre>#!/usr/bin/python -tt

import sys
import re

def ReadFile('bad.html'):
    text = open(filename,'r').read()
    text = re.sub('(&nbsp;s?)+', '&lt;/td&gt;&lt;td&gt;', text)
    text = re.sub('&lt;br /&gt;','&lt;/td&gt;&lt;/tr&gt;n&lt;tr&gt;&lt;td&gt;',text)
    text = re.sub('&lt;tr&gt;&lt;td&gt;s?&lt;/td&gt;&lt;td&gt;','&lt;tr&gt;&lt;td&gt;',text)
    f=open('good.html','w')
    f.write(text)
    f.close()
    
def main():
    ReadFile()

if __name__ == '__main__':
    main()
</pre>
</div>