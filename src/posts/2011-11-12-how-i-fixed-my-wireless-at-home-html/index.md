---
path: "/2011/11/12/how-i-fixed-my-wireless-at-home-html/" 
date: "2011-11-12T13:26:32+00:00" 
title: How I fixed my Wireless At Home
tags:
  - DNS
  - mac
  - MacBook Pro
  - Networking

---

  <p>
    For months I have had a bizarre problem with wireless access. Every time I described it to networking folks, it baffled them. This was the situation.
  </p>
  
  <p>
    My main pc is a 17&#8243; MacBook Pro running Lion. When I take it anywhere, wireless works perfectly. There are no issues at all. When I plug it in to a wired connection, it works perfectly. Nothing special….yet. At home I have a few Windows-based machines that are on my home network, but they are all wired connections. All of them also work without any problems. I have 2 iPads (1 and 2) and an iPhone that connect wirelessly, again, no issues.
  </p>
  
  <p>
    When I run my MacBook Pro at home on a wired connection, there is no problem. But wireless had a problem. Everything works everywhere, except the MBP has a problem with wireless. Well, actually, thats not true.
  </p>
  
  <p>
    The MBP connects without a problem to WiFi. It just cannot get out of my network. So the only problem is when on WiFi, my MBP (and only my MBP) can see my internal network but cannot get out onto the internet. Bizarre, right? It gets a little harder to troubleshoot, though. If I run a command like host www.google.com from the terminal…ready for it…. it works. But Safari, Firefox, Chrome, Entourage, Tweetdeck, etc cannot see anything outside of my network.
  </p>
  
  <p>
    Bizarre, right?
  </p>
  
  <p>
    So here is what I did to fix it. I went into the DHCP config on the access point and disabled all the DNS settings. Then on my Mac, I created a Home location and hard coded the DNS settings. Thats it. Everything on my network and beyond now works for my MBP. I absolutely do not understand why this is, but now it all works. And now that I have documented it here, I can completely forget about it and live happy!
  </p>
  
  <p>
    <span style="color: #ff1b18">EDIT:&nbsp;November 14, 2011</span> &#8211; I made a change this morning because I got tired of hard coding a DNS server for each client. I have an old ASUS EEEBox running Linux in a closet. So far it was just a DNS server. Now its also DHCP and everything is perfect. Gradually I&#8217;ll move more services onto that little Atom-powered box.
  </p>
</div>