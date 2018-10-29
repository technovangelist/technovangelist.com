---
path: "/2006/02/08/200628download-managers-for-web-and-windows-html/" 
date: "2006-02-08T11:00:00+00:00" 
title: Download Managers for Web and Windows
tags:
  - gadgets

---

One of the things I do quite a bit of is download resources. I grab existing VPCs, training materials, and tools from internal Captaris network shares in the US. I grab documents and other resources off of public web sites. In both cases, my connection is never guaranteed. If the file is big then there is a good chance my connection will be lost before I finish. And nothing is more annoying than waiting for a 3 GB VPC download from across the Atlantic Ocean, then have the connection sever 1 minute before it is complete. With the default copy method used by Windows, the whole file is lost. AAARRRGGGHHH!!!

On the web the solution is easy. Get a download manager that will reconnect if the connection is lost. The download manager I use is the Free Download Manager from <a href="http://www.freedownloadmanager.org/">www.freedownloadmanager.org</a>. There are a lot of features in this free tool, but I don&rsquo;t really care. It just works every time and I don&rsquo;t have to think about it. Maybe someday I will investigate what other things I could get done with it.

But on Windows there is a lack of download managers. There are two problems that need to get solved. First the slow connection that may get terminated. The other is the need to copy 1000&rsquo;s of small files. Internally at Microsoft we had a tool from one of the devs in Japan called something like Threaded Copy. You specify the source and destination directories and it would copy 10 files at a time. The theory being that for small files a good percentage of the file copy time is spent on the handshake and opening and closing the files on each end. For copying lots of small files, it decreased the time required to copy a directory by a huge amount. For a few big files there wasn&rsquo;t much improvement. I still haven&rsquo;t found a tool that helps with that second scenario, but the first seems to be solved with a great tool called <a href="http://www.copyhandler.com/">CopyHandler</a>. This thing intercepts a drag and drop or a copy file and takes on the role of a download manager. If my connection dies, it resumes when the connection comes back. Its not perfect, but I haven&rsquo;t had a serious issue with it yet.
