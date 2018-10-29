---
path: "/2011/02/15/how-google-app-engine-fixed-my-main-problem-with-squarespace-html/" 
date: "2011-02-15T18:18:56+00:00" 
title: How Google App Engine Fixed My Main Problem With SquareSpace
tags:
  - Google App Engine
  - Python
  - squarespace

---

  <p>
    As you are probably aware, <a href="/">technovangelist.com</a> is hosted at <a href="http://www.squarespace.com/">SquareSpace.com</a>. It hasn&#8217;t always been that way. I switched to SS about a year and a half ago when I got tired of self hosting using Community Server and Graffiti and various other home brew solutions. SS has the advantage of making it very easy to come up with a uniform style across your pages, with some customization in every area. It&#8217;s really a well designed solution and after this much time with them, I have no plans to leave. That said, I do have one beef with them: They don&#8217;t offer any server-side page generation techniques beyond the sidebars.
  </p>
  
  <p>
    Take a look at the home page at <a href="/">technovangelist.com</a>. I have the sidebar, plus 5 other areas of content, each pulling from a different RSS feed. There are 2 feeds from my blogs here at technovangelist and at <a href="http://faxsolutionsblog.opentext.com/">faxsolutionsblog.opentext.com</a>. There are 2 other feeds from my videos at <a href="http://vimeo.com/technovangelist">vimeo</a> and <a href="http://www.youtube.com/opentextfddg" class="broken_link">youtube</a>. Finally there is a feed from my photoblog site, <a href="http://chromagenic.com/">chromagenic.com</a>. The home page at technovangelist really is the clearing house for the brand of &#8216;me&#8217;.
  </p>
  
  <p>
    The only way to create this kind of page at SquareSpace is with a HTML page, meaning I have to create the HTML from scratch. Thats not a problem for me. What is a problem is that the HTML I create has to be completely client-based: HTML and javascript. Nothing can run on the server. So if I am grabbing 5 different feeds and then generating a page from that all at the server, there is going to be a delay of at least a second or two every single time someone looks at this page. Even though the content doesn&#8217;t update more than once every 1-2 weeks or more.
  </p>
  
  <p>
    But I did it anyway for the first version of this page. I used the magical <a href="http://code.google.com/apis/feed/">Google Feed API</a> which did exactly what I wanted. Every time it ran, though, 1-2 seconds were required for drawing the page. There had to be a better way. The first thought was to design a client-side app for me to run every time one of my content sources updates. So I started going down that route, working on some test projects before starting the final Mac app that I wanted. That was last Saturday.
  </p>
  
  <p>
    Then during one of my little research missions, trying to find something I needed for the app, I re-stumbled on <a href="https://appengine.google.com">Google App Engine</a>. Here was a hosted location that could run my own custom server-side code. The original thought was to build the page at GAE, then do some sort of server-side include of the content. But then I thought I hit a bit of a wall: the app had to be written in Java or Python.
  </p>
  
  <p>
    I hadn&#8217;t touched Java in 10 years. I last used it when I did some outsourced marketing projects with Sun Microsystems, building test apps that were used in instructional materials. But then I went .Net all the way working for Microsoft and then Captaris/Open Text. I felt re-learning Java was going to be a big hurdle to GAE. Python on the other hand was a bit more digestible. I didn&#8217;t know the language, but I have a few friends who spend all of their working days with the language. One of my <a href="http://devhawk.net/2008/03/11/Joining+The+Dynamic+Languages+Team.aspx" class="broken_link">best friends from my Microsoft days</a> was a PM with IronPython. I felt Python was more accessible.
  </p>
  
  <p>
    So I started looking in to it. I installed Aptana Studio 3 which comes with PyDev which allowed me to create and build Python scripts in as easy a way as possible. And I followed the fantastic series of videos that are part of <a href="http://code.google.com/edu/languages/google-python-class/">Google&#8217;s Python Class</a>. Go ahead and watch them. It will take you five hours and you&#8217;ll come away with a pretty good understanding of the language. So I started looking into Python on Saturday evening around 8PM, and by 5PM on Sunday I was beginning to build my GAE app to generate my home page. The only reason it took so long was that I had a Dim Sum lunch with friends for a few hours in the middle of it all.
  </p>
  
  <p>
    The end result is a page that is generated in less than a second. And it&#8217;s a whole lot easier to manage too. But it&#8217;s not perfect yet. For now it involves a manual step. I&#8217;ll go to the GAE page and copy the page. Then go to edit my site, and paste the code in. The result is that for you, the home page is displayed as quickly as possible. And I have to run a single manual, 1-minute step every couple of weeks. In the near future (perhaps next weekend), I&#8217;d like to see about having it auto-update my SquareSpace site, or at least cache the content locally and figure a way to do some sort of server-side include.
  </p>
  
  <p>
    It was a fun project and I was very happy to see a working solution by the end of the evening Sunday night. And learning Python has already proven to be a good investment. I am already leveraging it in some of the scripts I have written to automate the stuff I do at work. Maybe I&#8217;ll write up some of the details of those scripts, as well as more about what I actually created on GAE&#8230;.another night&#8230;
  </p>
</div>