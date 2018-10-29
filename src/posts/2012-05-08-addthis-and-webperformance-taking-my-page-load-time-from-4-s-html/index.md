---
path: "/2012/05/08/addthis-and-webperformance-taking-my-page-load-time-from-4-s-html/" 
date: "2012-05-08T17:44:41+00:00" 
title: 'AddThis and WebPerformance: taking my page load time from 4 seconds to 1.5 seconds'
tags:
  - addthis
  - Google
  - squarespace
  - web performance
  - wpo

---

  <p>
    Recently I have been getting more and more into web performance. I have been looking for ways to make my faxdocs.tv site faster and more responsive. On the side, I have been looking at doing the same with my personal sites. These include <a href="/">technovangelist.com</a>, <a href="http://envl.pe/">envl.pe</a>, and <a href="http://chromagenic.com/">chromagenic.com</a>. I have also recently setup a test Drupal site using <a href="https://phpfog.com/" class="broken_link">PhpFog</a> (a great way to get a free copy of <a href="http://drupal.org/">Drupal</a> and <a href="http://thinkupapp.com/">ThinkUp</a> going). 
  </p>
  
  <p>
    So how does one get into web performance and what are the resources out there. Well, ask anyone who is in the business and they will mention one name. They might list a few others, but at the very least they will mention the name of Steve Souders. He has two books out there on the topic and even though the older one is 4+ years old, its still the go-to reference on the topic.
  </p>
  
  <p>
    <a href="http://www.amazon.com/gp/product/0596529309/ref=as_li_ss_tl?ie=UTF8&tag=technovangeli-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0596529309">High Performance Web Sites</a> describes 14 specific rules of what should be done to speed up web sites. Some of the steps are easy to achieve, others require a bit more work. Most of them seemed kinda obvious, but almost none of them had been implemented by me. Its available on Kindle where I have my copy today. His newer <a href="http://www.amazon.com/gp/product/0596522304/ref=as_li_ss_tl?ie=UTF8&tag=technovangeli-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0596522304">Even Faster Web Sites</a> goes into even more detail about three specific categories of areas to improve on. At first I thought the second book was an update of the first, but after reading them, I can see that both are worth having. Unfortunately the newer version is not available on Kindle from Amazon, but I ended up buying the PDF and MOBI versions from <a href="http://shop.oreilly.com/product/9780596529307.do">O&#8217;Reilly</a> so I could load it up on my Kindle.
  </p>
  
  <p>
    Both of these books are very interesting, especially if you are just getting started, but do you need them? Well, no. It turns out I already had access to a lot of the information and to a great toolset on my laptop, but the books made for interesting reading on the 60+ hours of flights I have been on in the last 4 weeks.
  </p>
  
  <p>
    <img style="margin: 5px 0px 5px 20px" title="Screen Shot 2012-05-08 at 7.38.06 PM.png" src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e99720e4b01058545b497e/1336499080367/Screen%20Shot%202012-05-08%20at%207.38.06%20PM.png/1000w" alt="Screen Shot 2012 05 08 at 7 38 06 PM" width="300" height="154" align="right" border="0" />
  </p>
  
  <p>
    You may have the right tools too. They are built in to Google&#8217;s Chrome browser. Just bring up the developer tools and take a look at the Network tab. There you will see a chart often called a Waterfall chart describing how long each component takes to load up. I didn&#8217;t have to know a lot of details to see that there are just a few resources taking most of the time on my sites.
  </p>
  
  <p>
    For this article, I am just going to take a look at this page on <a href="/">technovangelist.com</a>. I loaded it up and opened the dev tools to the Network tab. At the bottom of the page I could see that it took nearly 4 seconds to load. I repeated this 5 times and saw that the average was about <strong>3.9 seconds</strong>. Scrolling up and down in that list I noticed that a lot of social media icons were getting loaded. Scrolling down on the page I saw that under each post I had added a widget from AddThis which offered the ability to quickly +1 with Google, and a few other things. On the lower right of the page, I had links to all my accounts on G+, Flickr, LastFM, and more. And each of those had an image next to them.
  </p>
  
  <p>
    So my first step was to change the SquareSpace Social Widget to display text only instead of text and an icon for each destination. I then logged out and refreshed the page 5 times to see that the average had dropped down to 3.8 seconds. A tenth of a second was good, but I was actually hoping for more. 
  </p>
  
  <p>
    I noticed that the Google Plus One widget for AddThis was loading up some javascript 10 times, once for each post that was shown on the <a href="/">Technovangelist</a> home page. So I went into the Blog configuration on SquareSpace to modify the AddThis widget. I simply removed the Google part of the widget, logged off, refreshed the page 5 times to get an average load time. This was the kind of improvement I was hoping for. It dropped to <strong>2.15 seconds</strong> (with a fastest time of 1.9 seconds).
  </p>
  
  <p>
    That was a big improvement! So what happens if I get rid of AddThis altogether? How much faster can things get? I logged in, removed any mention of AddThis, logged out, refreshed 5 times. Now I was down to <strong>1.5 seconds</strong> (with a fastest time of about 1.4 seconds). Wow! 
  </p>
  
  <p>
    So I guess the question I should be asking myself is whether a Google Plus One button is worth it. Do I want my users to have to wait 2.5 times as long, just so they can click a button to rank me higher on G+? I don&#8217;t think it is worth it.
  </p>
  
  <p>
    So in summary, I was able to look at my SquareSpace hosted site for just a few minutes and shave a huge percentage off of the page load time for the few visitors I get. I&#8217;ll do the same thing for some of my other sites and share my findings here. Although there is quite a lot I won&#8217;t be able to do since SquareSpace is a bit of a black box, I can clean up what I add myself. Hopefully you found this interesting and if you have any comments, please leave them below.
  </p>
</div>