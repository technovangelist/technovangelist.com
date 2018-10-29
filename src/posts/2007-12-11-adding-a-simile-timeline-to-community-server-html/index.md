---
path: "/2007/12/11/adding-a-simile-timeline-to-community-server-html/" 
date: "2007-12-11T21:17:00+00:00" 
title: Adding a Simile Timeline to Community Server
tags:
  - blogging
  - 'c#'
  - code
  - communityserver
  - simile-timeline

---

  <p>
    <a href="http://s3.media.squarespace.com/production/456881/5143454/photos/storage/AddingaSimileTimelinetoCommunityServer_1228C/image_thumb.png"><img src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e99720e4b01058545b4978/1257627912003/timeline.png/1000w" alt="" /></a>
  </p>
  
  <p>
    In case you have visited this site recently, you may have noticed the cool timeline in the <a href="/blogs/" class="broken_link">Blog Archives</a> page. This is an amazing bit of Javascript that displays a any content you like on a long virtual sheet. Its kind of like those great &#8220;entire history of the world&#8221; posters that you grew up with. I found this after looking at <a href="http://www.hanselman.com/blog/TimeLine.aspx" target="_blank">Scott Hanselman&#8217;s web</a> site a few days ago. I figured that I had plenty of time, so I did the same thing. It wasn&#8217;t very hard, but it wasn&#8217;t exactly brain dead easy either.
  </p>
  
  <p>
    To start off, I went up to the <a href="http://simile.mit.edu/timeline/" target="_blank" class="broken_link">source page for the project at MIT</a>. The examples on there are great. The documentation is a bit basic, but most of your needs are covered. After searching around a bit, I found a few other articles that were helpful, including a couple from <a href="http://blog.lifecycle-solutions.com/Using+Simile+Timeline+From+ASPNET.aspx" target="_blank" class="broken_link">LifeCycle Solutions</a> and <a href="http://blog.localkinegrinds.com/2007/11/06/installing-mit-similes-timeline-locally-w-rails-integration/" target="_blank" class="broken_link">Ryan Kanno</a>. Then it was just a matter of trying it out.
  </p>
  
  <p>
    First, I added the javascript tag on my Blog Archives page: <br /><script type=<span class="str">&#8220;text/javascript&#8221;</span> src=<span class="str">&#8220;http://simile.mit.edu/timeline/api/timeline-api.js&#8221;</span>></script>
  </p>
  
  <p>
    Further down I added a div where the timeline was actually going to go: <br /><div id=<span class="str">&#8220;my-timeline&#8221;</span> style=<span class="str">&#8220;height: 450px; border: 1px solid #aaa; margin-right:20px;&#8221;</span> />
  </p>
  
  <p>
    Next I created a new .js file to hold my javascript. I think I will use this file for lots of other stuff, so I made a new namespace just for the timeline code. Here is the entire file:
  </p>
  
  <pre class="alt"><span class="lnum">   1:  </span><span class="kwrd">var</span> TECHNOVANGELIST = {};<br /><span class="lnum">   2:  </span>TECHNOVANGELIST.TimeLine = <span class="kwrd">function</span>() {<br /><span class="lnum">   3:  </span>    <span class="kwrd">var</span> tl;<br /><span class="lnum">   4:  </span>    <span class="kwrd">var</span> resizeTimerID = <span class="kwrd">null</span>;<br /><span class="lnum">   5:  </span>    <br /><span class="lnum">   6:  </span>    <span class="kwrd">return</span> {<br /><span class="lnum">   7:  </span>&nbsp;<br /><span class="lnum">   8:  </span>        createTimeLine: <span class="kwrd">function</span> () {<br /><span class="lnum">   9:  </span>            <span class="kwrd">var</span> eventSource = <span class="kwrd">new</span> Timeline.DefaultEventSource();<br /><span class="lnum">  10:  </span>            <span class="kwrd">var</span> theme = Timeline.ClassicTheme.create();<br /><span class="lnum">  11:  </span>            theme.<span class="kwrd">event</span>.bubble.width=520;<br /><span class="lnum">  12:  </span>            theme.<span class="kwrd">event</span>.bubble.height=120;<br /><span class="lnum">  13:  </span>            <span class="kwrd">var</span> curdate = <span class="kwrd">new</span> Date()<br /><span class="lnum">  14:  </span>            <span class="kwrd">var</span> bandInfos = [<br /><span class="lnum">  15:  </span>                Timeline.createBandInfo({<br /><span class="lnum">  16:  </span>                    eventSource:    eventSource,<br /><span class="lnum">  17:  </span>                    date:           curdate.toGMTString(),<br /><span class="lnum">  18:  </span>                    width:          <span class="str">"80%"</span>, <br /><span class="lnum">  19:  </span>                    intervalUnit:   Timeline.DateTime.WEEK, <br /><span class="lnum">  20:  </span>                    intervalPixels: 50<br /><span class="lnum">  21:  </span>                }),<br /><span class="lnum">  22:  </span>                Timeline.createBandInfo({<br /><span class="lnum">  23:  </span>                    showEventText:  <span class="kwrd">false</span>,<br /><span class="lnum">  24:  </span>                    trackHeight:    0.5,<br /><span class="lnum">  25:  </span>                    trackGap:       0.2,<br /><span class="lnum">  26:  </span>                    eventSource:    eventSource,<br /><span class="lnum">  27:  </span>                    date:           curdate.toGMTString(),<br /><span class="lnum">  28:  </span>                    width:          <span class="str">"20%"</span>, <br /><span class="lnum">  29:  </span>                    intervalUnit:   Timeline.DateTime.MONTH, <br /><span class="lnum">  30:  </span>                    intervalPixels: 100<br /><span class="lnum">  31:  </span>                })<br /><span class="lnum">  32:  </span>            ];<br /><span class="lnum">  33:  </span>            bandInfos[1].syncWith = 0;<br /><span class="lnum">  34:  </span>            bandInfos[1].highlight = <span class="kwrd">true</span>;<br /><span class="lnum">  35:  </span>            bandInfos[1].eventPainter.setLayout(bandInfos[0].eventPainter.getLayout());<br /><span class="lnum">  36:  </span>            tl = Timeline.create(document.getElementById(<span class="str">"my-timeline"</span>), bandInfos);<br /><span class="lnum">  37:  </span>            Timeline.loadXML(<span class="str"><a href="/BlogTimelineSource.ashx" class="broken_link">http://technovangelist.com/BlogTimelineSource.ashx</a></span>, <br /><span class="kwrd">             function</span>(xml, url) { eventSource.loadXML(xml, url); });<br /><span class="lnum">  38:  </span>        },<br /><span class="lnum">  39:  </span>        <br /><span class="lnum">  40:  </span>        onResize:   <span class="kwrd">function</span>() {<br /><span class="lnum">  41:  </span>            <span class="kwrd">if</span> (resizeTimerID == <span class="kwrd">null</span>) {<br /><span class="lnum">  42:  </span>               resizeTimerID = window.setTimeout(<span class="kwrd">function</span>() {<br /><span class="lnum">  43:  </span>                    resizeTimerID = <span class="kwrd">null</span>;<br /><span class="lnum">  44:  </span>                    tl.layout();<br /><span class="lnum">  45:  </span>                }, 500);<br /><span class="lnum">  46:  </span>            }<br /><span class="lnum">  47:  </span>        }<br /><span class="lnum">  48:  </span>    };<br /><span class="lnum">  49:  </span>} ();</pre>
  
  <p>
    Back in the Blog Archives page, I added the pointer to that js file:
  </p>
  
  <pre>&lt;CSControl:Script src="../Common/TVLIB.js" runat="server" /&gt;
&lt;script type="text/javascript"&gt;
   window.onload=TECHNOVANGELIST.TimeLine.createTimeLine;
   window.onresize=TECHNOVANGELIST.TimeLine.onResize;
&lt;/script&gt;</pre>
  
  <p>
    You can try that out to see if it works so far, but your eventsource isn&#8217;t working yet. I have that pointing to a BlogTimelineSource.ashx which we haven&#8217;t created&#8230;yet. So here is the full file for BlogTimelineSource.ashx:
  </p>
  
  <pre>   1:  &lt;%@ WebHandler Language="C#" Class="BlogTimeLineSource" Debug="true" %&gt;<br />   2:&nbsp; <br />   3:  using System;<br />   4:  using System.Web;<br />   5:  using CommunityServer.Blogs.Controls;<br />   6:  using CommunityServer.Blogs.Components;<br />   7:  using System.Collections.Generic;<br />   8:  using CommunityServer.Components;<br />   9:&nbsp; <br />  10:  public class BlogTimeLineSource : IHttpHandler {<br />  11:      <br />  12:      public void ProcessRequest (HttpContext context) {<br />  13:          context.Response.ContentType = "text/xml";<br />  14:          context.Response.Write("&lt;data&gt;");<br />  15:          BlogThreadQuery query;<br />  16:          query = BlogThreadQuery.CreateNewAggregateQuery();<br />  17:          <br />  18:          query.PostConfig = BlogPostConfig.IsAggregated;<br />  19:          query.PageIndex = 0;<br />  20:          query.PageSize = 5000;<br />  21:          query.IncludeCategories = true;<br />  22:          query.BlogPostType = BlogPostType.Post | BlogPostType.Article;<br />  23:&nbsp; <br />  24:          ThreadSet ts = WeblogPosts.GetBlogThreads(query);<br />  25:&nbsp; <br />  26:          foreach (WeblogPost p in ts.Threads)<br />  27:          {<br />  28:              context.Response.Write("&lt;event start="" + p.PostDate + "" link="" <br />               + p.ViewPostURL + "" title="" + p.Subject + ""&gt;");<br />  29:              context.Response.Write(context.Server.HtmlEncode(p.ForceExcerpt) + "&lt;/event&gt;");  <br />  30:          }<br />  31:          context.Response.Write("&lt;/data&gt;");<br />  32:      }<br />  33:   <br />  34:      public bool IsReusable {<br />  35:          get {<br />  36:              return false;<br />  37:          }<br />  38:      }<br />  39:&nbsp; <br />  40:  }<br />At this point you run into a problem. The ashx file probably can't be found still. Its there, but Community Server doesn't know about it yet, so you may have to modify you SiteUrls_Override.config. I just added the following in an &lt;override&gt; block:</pre>
  
  <pre>    &lt;location name="BlogTimeLineSource" themeDir="common"  path="/" &gt;
      &lt;url name = "BlogTimelineSource"  path="/BlogTimelineSource.ashx" 
              pattern="/BlogTimelineSource.ashx" physicalPath="##themeDir##" 
              vanity="{2}" page="BlogTimelineSource.ashx"/&gt;
    &lt;/location&gt;</pre>
  
  <p>
    That&#8217;s it!! The toughest parts for me were trying to figure out how to reference the javascript file on a CS site, figuring out Javascript namespaces, and then doing the query in the ashx file. Then I spent a while tweaking the look&#8230;changing the height (though its referenced as width) of the bands and changing the size of the popup. Let me know if this is useful for you&#8230;
  </p>
</div>