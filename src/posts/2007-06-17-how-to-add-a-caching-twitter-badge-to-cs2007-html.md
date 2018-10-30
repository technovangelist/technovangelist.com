---
path: "/2007/06/17/how-to-add-a-caching-twitter-badge-to-cs2007-html/" 
date: "2007-06-17T03:55:00+00:00" 
title: 'How To: Add a Caching Twitter Badge to CS2007'
tags:
  - 'c#'
  - code
  - communityserver
  - site-update

---

  <p>
    A few months ago I started playing around with <a href="http://www.twitter.com">Twitter</a>. In case you are not familiar with it, Twitter is a blog of short messages. Think about all the times you want to say something, or tell people where you are, but you don&#8217;t think the idea warrants an entire blog post. Those are the times you use Twitter. People can subscribe to your Twitter status and get those updates where ever they are. They can get them via IM, or SMS, or some 3rd party applications. Since I live in Europe, I subscribe to a few people&#8217;s status via SMS (SMS in Europe is cheap, unlike the US where no one uses it since it is so expensive).
  </p>
  
  <p>
    When I was thinking about what I wanted on this website, I thought some sort of Twitter status update would be cool. Not an entire history, just the latest item. If you go to <a href="http://twitter.com/account/badge" class="broken_link">Twitter&#8217;s badge page</a>, you can see a number of options for grabbing your current Twitter status. I tried the Javascript one first. It seemed to work, but I was annoyed at the fact that it polled Twitter on every refresh. Chances are I am not going to update my Twitter status that often, so I want to cache the information locally. But I don&#8217;t want to cache the entire block of text, because the time since I made the update will change as time goes by. So I wanted to cache just the text and the time I made the update.
  </p>
  
  <p>
    First I check the CSCache for my Twitter information:
  </p>
  
  <pre><span style="color: blue">string</span> TwitterText = CSCache.Get(<span style="color: maroon">"TwitterText"</span>) <span style="color: blue">as</span> <span style="color: blue">string</span>;<br /><span style="color: blue">string</span> TwitterTime = CSCache.Get(<span style="color: maroon">"TwitterTime"</span>) <span style="color: blue">as</span> <span style="color: blue">string</span>;</pre>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    If TwitterTime is null, then I grab the latest one status item from Twitter:
  </p>
  
  <pre><span style="color: blue">string</span> TwitterPath = <br />    <span style="color: maroon">"http://www.twitter.com/statuses/user_timeline/2449901.xml?count=1"</span>;<br />WebClient webClient = <span style="color: blue">new</span> WebClient();<br /><span style="color: blue">string</span> TwitterXML = Encoding.ASCII.GetString(wClient.DownloadData(TwitterPath));</pre>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    Once I have the TwitterXML string, I can parse it to get my text and time and I add that to the cache. From there I just converted the Javascript relative time code from Twitter&#8217;s code to C#. Here is the full TwitterStatus.ascx:
  </p>
  
  <pre><span style="color: blue">&lt;</span><span style="color: maroon">%@</span> Import <span style="color: red">namespace</span>="<span style="color: blue">System.Xml.XPath</span>"%<span style="color: blue">&gt;</span><br /><span style="color: blue">&lt;</span><span style="color: maroon">%@</span> Import <span style="color: red">namespace</span>="<span style="color: blue">System.Net</span>"%<span style="color: blue">&gt;</span><br /><span style="color: blue">&lt;</span><span style="color: maroon">%@</span> Import <span style="color: red">namespace</span>="<span style="color: blue">CommunityServer.Components</span>"%<span style="color: blue">&gt;</span><br /><span style="color: blue">&lt;</span><span style="color: maroon">%@</span> Control <span style="color: red">Language</span>="<span style="color: blue">C#</span>" <span style="color: red">ClassName</span>="<span style="color: blue">TwitterStatus</span>" %<span style="color: blue">&gt;</span><br /><span style="color: blue">&lt;</span><span style="color: maroon">script</span> <span style="color: red">runat</span>=server <span style="color: red">language</span>="<span style="color: blue">C#</span>"<span style="color: blue">&gt;</span><br /><br />    protected int cacheTime;<br />    public int CacheTime<br />    {<br />        get<br />        {<br />            return cacheTime;<br />        }<br />        set<br />        {<br />            cacheTime = value;<br />        }<br />    }<br />    protected override void OnInit(EventArgs e)<br />    {<br />        string TwitterPath = <br />            "<span style="color: blue">http://www.twitter.com/statuses/user_timeline/2449901.xml?count=1</span>"<span style="color: blue">;<br />        string TwitterText = CSCache.Get(</span>"<span style="color: blue">TwitterText</span>"<span style="color: blue">) as string;<br />        string TwitterTime = CSCache.Get(</span>"<span style="color: blue">TwitterTime</span>"<span style="color: blue">) as string;<br />        string TwitterString = </span>"<span style="color: blue">&nbsp;</span>"<span style="color: blue">;<br />        <br />        if (string.IsNullOrEmpty(TwitterTime))<br />        {<br />            string returnXML = </span>"<span style="color: blue">&nbsp;</span>"<span style="color: blue">;<br />            WebClient wClient = new WebClient();<br />            returnXML = Encoding.ASCII.GetString(wClient.DownloadData(TwitterPath));<br /><br />            XPathDocument doc = new XPathDocument(new System.IO.StringReader(returnXML));<br />            XPathNavigator nav = doc.CreateNavigator();<br />            <br />            //Get Twitter Time<br />            XPathNodeIterator nodes = nav.Select(@</span>"<span style="color: blue">/statuses/status/created_at</span>"<span style="color: blue">);<br />            nodes.MoveNext();<br />            TwitterTime = nodes.Current.Value;<br />            //Get Twitter Text<br />            nodes = nav.Select(@</span>"<span style="color: blue">/statuses/status/text</span>"<span style="color: blue">);<br />            nodes.MoveNext();<br />            TwitterText = nodes.Current.Value;<br />            string[] TimeValues = TwitterTime.Split(' ');<br />            TwitterTime = TimeValues[1] + </span>" " + TimeValues[2] <br />                + " " + TimeValues[5] + " " + TimeValues[3] + " GMT"<span style="color: blue">;<br />           <br />            CSCache.Insert(</span>"<span style="color: blue">TwitterText</span>"<span style="color: blue">,TwitterText, cacheTime);<br />            CSCache.Insert(</span>"<span style="color: blue">TwitterTime</span>", TwitterTime, cacheTime);<br />        }<br /><br />        DateTime twDate = Convert.ToDateTime(TwitterTime);<br /><br />        int secondsago = Convert.ToInt32(DateTime.Now.Subtract(twDate).TotalSeconds);<br />        if (secondsago <span style="color: blue">&lt;</span> 60)<br />            <span style="color: red">TwitterString </span>= "<span style="color: blue">less than a minute ago</span>";<br />        else if (secondsago <span style="color: blue">&lt;</span> 120)<br />            <span style="color: red">TwitterString </span>= "<span style="color: blue">about a minute ago</span>";<br />        else if (secondsago <span style="color: blue">&lt;</span> (45 * 60))<br />            <span style="color: red">TwitterString </span>= (secondsago / 60).ToString() + " minutes ago";<br />        else if (secondsago <span style="color: blue">&lt;</span> (90 * 60))<br />            <span style="color: red">TwitterString </span>= "<span style="color: blue">about an hour ago</span>";<br />        else if (secondsago <span style="color: blue">&lt;</span> (24 * 60 * 60))<br />            <span style="color: red">TwitterString </span>= "<span style="color: blue">about </span>" + (secondsago / 3600).ToString() + " hours ago";<br />        else if (secondsago <span style="color: blue">&lt;</span> (48 * 60 * 60))<br />            <span style="color: red">TwitterString </span>= "<span style="color: blue">1 day ago</span>"<span style="color: blue">;<br />        else<br />            TwitterString = (secondsago / 86400).ToString() + </span>" days ago";<br /><br />        <span style="color: red">TwitterTextLiteral.Text </span>= TwitterText;<br />        <span style="color: red">TwitterSinceLiteral.Text </span>= TwitterString;<br />        <br />        base.OnInit(e);<br />    }<br />    <br /><span style="color: blue">&lt;</span>/<span style="color: maroon">script</span><span style="color: blue">&gt;</span><br /><br /><span style="color: blue">&lt;</span><span style="color: maroon">div</span> <span style="color: red">id</span>=TwitterStatus<span style="color: blue">&gt;</span><br />According to <span style="color: blue">&lt;</span>a <span style="color: red">href</span>="<span style="color: blue">http://twitter.com/Technovangelist</span>" <span style="color: red">target</span>=_blank<span style="color: blue">&gt;</span>Twitter<span style="color: blue">&lt;</span>/<span style="color: maroon">a</span><span style="color: blue">&gt;</span> <br />I am: <span style="color: blue">&lt;</span><span style="color: maroon">asp:Literal</span> <span style="color: red">ID</span>=TwitterTextLiteral <span style="color: red">runat</span>=server<span style="color: blue">&gt;</span><span style="color: blue">&lt;</span>/<span style="color: maroon">asp:Literal</span><span style="color: blue">&gt;</span> as of <br /><span style="color: blue">&lt;</span><span style="color: maroon">asp:Literal</span> <span style="color: red">ID</span>=TwitterSinceLiteral <span style="color: red">runat</span>=server<span style="color: blue">&gt;</span><span style="color: blue">&lt;</span>/<span style="color: maroon">asp:Literal</span><span style="color: blue">&gt;</span><br /><span style="color: blue">&lt;</span>/<span style="color: maroon">div</span><span style="color: blue">&gt;</span><br /></pre>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    To use this I add the following at the top of my aspx page:
  </p>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    And then add this where I want the TwitterStatus to go:
  </p>
  
  <pre><span style="color: blue">&lt;</span><span style="color: maroon">MW:TwitterStatus</span> <span style="color: red">runat</span>=server <span style="color: red">CacheTime</span>=300 /<span style="color: blue">&gt;</span></pre>
  
  <p>
    This seems to be working for me for now. Let me know if you end up using it on your site. Or if you have any suggestions on improving this, I would love to hear that too.
  </p>
</div>