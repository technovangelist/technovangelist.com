---
path: "/2006/10/28/20061028up-to-community-server-21-html/" 
date: "2006-10-28T20:25:00+00:00" 
title: Up to Community Server 2.1
tags:
  - communityserver
  - site-update

---
For a while I noticed there were all sorts of problems with this site. The biggest was that it was tough to get all the posts for a category. So if you came here after taking a class, you couldn&#8217;t actually find anything I was talking about. I wanted to update it, but I also wanted to update the site to the latest version of CommunityServer. So I did both just now&#8230;well, I finished just now. It actually took a long time to do mostly because it took freaking forever to ftp the content up to my site. Anyway, its done&#8230;good night.

[update] search still isnt working. Not sure why. There are a bunch of posts that talk of truncating tables, but they have not worked yet&#8230;..hoping it will just take some more time for the jobs to fire.

[update 2] Search now working. Ended up being that my global.asax file didn&#8217;t copy up to the site. Re-uploaded it and everything began to work. Sweet!! 

[update 3] So did I figure this all out on my own?!?!? No, of course not. I relied on the CSGenius known to the world as Dave Stokes. First off, if you are doing the upgrade, check out his upgrade guide. But you may end up with a problem anyway. If you do, post the question to the <a href="//communityserver.org/forums/163/ShowForum.aspx" class="broken_link">CS Forums on Setup and Installation</a>. Thats <a href="//communityserver.org/forums/thread/553889.aspx" class="broken_link">what I did</a>, and the man himself figured it out in some virtual seconds (well, it was a bit longer, but I am located 6-8 hours ahead of him).
