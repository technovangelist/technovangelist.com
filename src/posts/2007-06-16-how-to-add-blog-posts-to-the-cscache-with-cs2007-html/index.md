---
path: "/2007/06/16/how-to-add-blog-posts-to-the-cscache-with-cs2007-html/" 
date: "2007-06-16T14:21:00+00:00" 
title: 'How To: Add Blog Posts to the CSCache with CS2007'
tags:
  - 'c#'
  - code
  - communityserver
  - site-update

---

After adding my new CS2007 theme, I wanted to take advantage of caching for my home page. There was some sample code in the default theme, but it wasn&#8217;t exactly what I needed:

<pre><span style="color:blue">protected</span> <span style="color:blue">override</span> <span style="color:blue">void</span> OnInit(EventArgs e)<br />{<br />    List recentPosts = CSCache.Get(<span style="color:maroon">"HomePageSearch-"</span> <br />      + CurrentCSContext.User.RoleKey) <span style="color:blue">as</span> List;<br />    <span style="color:blue">if</span> (recentPosts == <span style="color:blue">null</span>)<br />    {<br />        SearchQuery query = <span style="color:blue">new</span> SearchQuery();<br />        query.StartDate = DateTime.Now.AddDays(-<span style="color:maroon">10</span>);<br />        query.EndDate = DateTime.Now.AddDays(<span style="color:maroon">1</span>);<br />        query.PageSize = <span style="color:maroon">5</span>;<br /><br />        recentPosts = CSSearch.Search(query).Posts;<br />        CSCache.Insert(<span style="color:maroon">"HomePageSearch-"</span> <br />     + CurrentCSContext.User.RoleKey, recentPosts, CSCache.MinuteFactor * <span style="color:maroon">5</span>);<br />    }<br />    RecentPostList.DataSource = recentPosts;<br /><br />    <span style="color:blue">base</span>.OnInit(e);<br />}</pre>

This does a query for all additions to the site in the last 10 days, including images, comments, etc. But I wanted just blog entries. Looking around on the web, I found a <a href="http://communityserver.org/forums/t/488203.aspx" class="broken_link">discussion on this in the CS Forums</a>. Using this as guide, I got exactly what I needed:

<pre><span style="color:blue">protected</span> <span style="color:blue">override</span> <span style="color:blue">void</span> OnInit(EventArgs e)<br />{<br />    <span style="color:blue">int</span> NumberOfBlogPosts = <span style="color:maroon">3</span>;<br />    List recentPosts = CSCache.Get(<span style="color:maroon">"HomePageBlog-"</span> <br />        + CurrentCSContext.User.RoleKey) <span style="color:blue">as</span> List;<br />    <br />    <span style="color:blue">if</span> (recentPosts == <span style="color:blue">null</span>)<br />    {<br />        List FilteredPosts = <span style="color:blue">new</span> List();    <br />        SearchQuery query = <span style="color:blue">new</span> SearchQuery();<br />        query.PageSize = <span style="color:maroon">20</span>;<br />        query.ApplicationTypes = <span style="color:blue">new</span> ApplicationType[] { ApplicationType.Weblog };<br />        recentPosts = CSSearch.Search(query).Posts;<br /><br />        <span style="color:blue">int</span> PostNumber = <span style="color:maroon"></span>;<br />        <span style="color:blue">foreach</span> (IndexPost post <span style="color:blue">in</span> recentPosts)<br />            <span style="color:blue">if</span> (PostNumber &lt; NumberOfBlogPosts)<br />                <span style="color:blue">if</span> (!post.Title.StartsWith(<span style="color:maroon">"re:"</span>, <span style="color:maroon">true</span>, <span style="color:blue">null</span>))<br />                {<br />                    FilteredPosts.Add(post);<br />                    PostNumber++;<br />                }<br /><br /><br />        CSCache.Insert(<span style="color:maroon">"HomePageBlog-"</span> <br />      + CurrentCSContext.User.RoleKey, FilteredPosts, <span style="color:maroon">300</span>);<br />        recentPosts = FilteredPosts;<br />    }<br />    RecentPostList.DataSource = recentPosts;<br />    <span style="color:blue">base</span>.OnInit(e);<br />}</pre>

This finds 20 weblog posts, filters out everything that starts with &#8220;Re:&#8221;, adds it to the cache, and uses it as a datasource for the blogpost list.
