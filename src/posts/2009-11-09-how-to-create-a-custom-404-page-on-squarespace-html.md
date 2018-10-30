---
path: "/2009/11/09/how-to-create-a-custom-404-page-on-squarespace-html/" 
date: "2009-11-09T17:47:40+00:00" 
title: How to Create a Custom 404 Page on Squarespace
tags:
  - blogging
  - javascript
  - squarespace

---

  <p>
    I just recently switched my blog from a self-hosted Graffiti installation to a completely managed solution on Squarespace. This is fantastic because it takes the job of patching and coding almost completely away. The downside is that some of the things I took for granted are unavailable. Like a custom 404 page. Why is this an issue? Well, if you are moving from one engine to another, they probably have different URLs for the same article. The last thing I want is for one of the rare visitors to my blog is some unhelpful error saying that the page could not be found. If you want an example of this happening, go to Squarespace&rsquo;s own blog and look at <a href="http://blog.squarespace.com/blog/2008/9/5/building-dantrachtenbergcom-on-squarespace.html" target="_blank">this post from September 2008</a>. Now click on the video link. Unless they have fixed it recently, you will see this:
  </p>
  
  <p>
    <a href="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e99720e4b01058545b4924/1257788857163/WindowsLiveWriter-HowtoCreateaCustom404PageonSquarespace_10842-" class="broken_link"><img style="border-bottom: 0px;border-left: 0px;border-top: 0px;border-right: 0px" title="image" src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e99720e4b01058545b4925/1257788858025/WindowsLiveWriter-HowtoCreateaCustom404PageonSquarespace_10842-" border="0" alt="image" width="541" height="123" /></a>
  </p>
  
  <p>
    The built in solution for this is called URL Shortcuts. The idea is that you plug in the old url and the new url into the configuration area, and anytime someone enters the old url, they are sent to the new one instead. Great&hellip;if you have 5 pages. But if you have been blogging for a while, then the job of entering those URLs is going to suck. Squarespace probably realizes this which is why you see that screenshot above. So what is the solution?
  </p>
  
  <p>
    If you write to support, they will say that URL Shortcuts is the solution. But there is a better way. I found <a href="http://developers.squarespace.com/design-coding/post/577691" target="_blank" class="broken_link">a post on their developer forum about customizing the Page Not Found form</a>. The solution seemed pretty simple. Create a custom 404 page on your site, the paste this in the Extra Header Code section (I am pretty sure this means you need an Advanced level package from them):
  </p>
  
  <pre class="brush: html">&lt;script type="text/javascript"&gt;
   //Redirect from error page to your new custom error page 
   var redirectURL = "http://ENTER YOUR NEW ERROR PAGE URL HERE";

   if(document.title == Squarespace.Constants.WEBSITE_TITLE + " - Page Not Found"){ 
      location = redirectURL; 
   }; 
&lt;/script&gt;
</pre>
  
  <p>
    The only thing to change in that code is the page url. Actually, mine only worked when I put /custom404 rather than http://technovangelist.com/custom404.
  </p>
  
  <p>
    On my Custom404 page, I put in some apologetic text explaining the situation, directing visitors to the search box. But I wanted to take it a bit further. I wanted to auto suggest a link for where they really intended to go. It might not work, but I figured it was good to try. On the Graffiti site, page urls were formatted as <site>/<category>/<page>. So I had some that were /technology/blah, and others that were /travel/blah. On the new site, all posts were under blog, so /blog/blah. What I needed was a way to convert all /travel/ and /technology/ to /blog/. I think this would be a good time to tell you that I don&rsquo;t know anything about javascript other than how to spell Google.com.
  </p>
  
  <p>
    A little searching on the net combined with some newbie code wrangling and I ended up with something like this:
  </p>
  
  <pre class="brush: js">prevurl = document.referrer;      
document.write("&lt;font size=-1&gt;&lt;b&gt;You came here from "+prevurl+"&lt;/b&gt;&lt;/font&gt;");
</pre>
  
  <p>
    So that told me where I came from. When I figured out how to manipulate text I got the rest:
  </p>
  
  <pre class="brush: js">if(prevurl.indexOf("technology")!=-1) {
   newurl= prevurl.replace("technology","blog");
   newurl = newurl.substr(0, newurl.length-1);
   newurl = newurl +".html";
   document.write("&lt;font size=-1&gt;&lt;b&gt;&lt;br&gt;I think you wanted &lt;a href="+ newurl +"&gt;"+ newurl +"&lt;/a&gt;&lt;/b&gt;&lt;/font&gt;"); }
</pre>
  
  <p>
    That combined with my apology was a pretty good first step. Then tonight I realized there was a problem. I looked at my <a href="http://woopra.com/" target="_blank">Woopra</a> stats and saw that /custom404 was one of my more popular pages. I couldn&rsquo;t quickly see which page caused the problem. Woopra shows the page title, which was now &ldquo;Technovangelist &ndash; Custom404&rdquo;. So I had to change that title. In order to change the title, I needed to pass the bad URL somehow. A query parameter seemed like a good choice. So I changed the line that initialized redirectURL to this.
  </p>
  
  <pre class="brush: js">var redirectURL = "/custom404?ref="+location.href;
</pre>
  
  <p>
    That got me the all the info I needed. Perhaps too much information. Now to tweak the title. I headed back to the Extra Header Code in Website Settings. After that first If clause in the script, I added another:
  </p>
  
  <pre class="brush: js">else if (document.title == "Technovangelist - Custom404"){
   document.title = "Technovangelist - 404 - "+location.href;
</pre>
  
  <p>
    This is good, but the url in Woopra is now really long. So another edit got me this:
  </p>
  
  <pre class="brush: js">else if (document.title == "Technovangelist - Custom404"){ 
   document.title = "Technovangelist - 404 - "+location.href.substring(67); };
</pre>
  
  <p>
    Why is 67 in there? Well, I am sure there is a cooler way, but there are 67 letters in the URL before the unique part of the url. I want to see <strong>Technovangelist &ndash; 404 &#8211; /technology/badsite</strong>, not the way too long <strong>Technovangelist &ndash; 404 &ndash; http://technovangelist.com/Custom404?http://technovangelist.com/technology/badsite</strong>.
  </p>
  
  <p>
    I then added a search box to the custom404 page just in case my guess didn&rsquo;t work, but I think it&rsquo;s a good first step. Want to try it? Go to <a href="/technology/time-to-move-away-from-graffiti/" target="_blank">http://technovangelist.com/technology/time-to-move-away-from-graffiti/</a> and see the custom 404 page that comes up. Now click the link that I suggested. In Woopra I will see something like this:
  </p>
  
  <p>
    <a href="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e99720e4b01058545b4926/1257788859087/WindowsLiveWriter-HowtoCreateaCustom404PageonSquarespace_10842-" class="broken_link"><img style="border-bottom: 0px;border-left: 0px;border-top: 0px;border-right: 0px" title="image" src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e99720e4b01058545b4927/1257788860257/WindowsLiveWriter-HowtoCreateaCustom404PageonSquarespace_10842-" border="0" alt="image" width="685" height="44" /></a>
  </p>
  
  <p>
    I am very happy with this solution. Would have been easier I think to be able to override a 404 page, but this will do. Any thoughts on how I can improve this approach??? Let me know in the comments.
  </p>
</div>