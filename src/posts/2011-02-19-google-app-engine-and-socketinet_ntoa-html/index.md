---
path: "/2011/02/19/google-app-engine-and-socketinet_ntoa-html/" 
date: "2011-02-19T09:55:55+00:00" 
title: Google App Engine and socket.inet_ntoa
tags:
  - Google App Engine
  - Python

---

  <p>
    Yesterday I started tackling a new problem in Python: How to parse a pcap file. The idea is to host something on Google App Engine and have it do the work. I started working with the Python library dpkt to open the pcap file. But pcap files show the source and destination ip addresses as binary packed decimals. That was  a format I never heard of till now so I had no idea what to do with it. It turns out that socket.inet_ntoa will convert it to the string you are used to seeing, like 10.9.8.2.
  </p>
  
  <p>
    Unfortunately, Google App Engine doesn&#8217;t provide the socket library. So I figured there had to be a way to build this functionality on my own. Let me tell you. Considering how much (erm, how little) I know about Python, this was no easy task. First I had to figure out what that library function does.
  </p>
  
  <p>
    Well, the socket library in Python is simply a wrapper to the C socket library on the OS. Finding that source code ended up being fairly easy, but it didn&#8217;t really help me much. It wasn&#8217;t until I stumbled onto <a href="http://stackoverflow.com/questions/2241229/going-from-127-0-0-1-to-2130706433-and-back-again">this article on StackOverflow</a> that I started getting somewhere. But you may notice that that&#8217;s a Java example and I am looking for Python.
  </p>
  
  <p>
    It was pretty trivial to translate that code from Java to Python:
  </p>
  
  <pre>def inet_ntoa(number):
    addresslist=[]
    addresslist.append(str((number&gt;&gt;24)&0xff))
    addresslist.append(str((number&gt;&gt;16)&0xff))
    addresslist.append(str((number&gt;&gt;8)&0xff))
    addresslist.append(str(number&0xff))
    return '.'.join(addresslist)
</pre>
  
  <p>
    But that wasn&#8217;t getting me what I needed. When I tried to use it, I got: TypeError: unsupported operand type(s) for >>: &#8216;str&#8217; and &#8216;int&#8217;. It wasn&#8217;t making much sense to me. So I tried a bunch of things to try to understand what this number was. After a while I saw that the number I was getting from Wireshark via dpkt was &#8216;x01nx01&#8217;. Again, not making much sense.
  </p>
  
  <p>
    It wasn&#8217;t until I went back to Wireshark that I started cluing in on the problem. I looked at the packet and found the section that mentioned the source IP address. It said 10.1.10.1. Clicking on that ip address highlighted the hex representation below: 0a010a01. From the classes I teach on parsing text files using Datagrabber which is part of our Alchemy product, I know that the hex representation of a newline is 0a. That explains the 0a or n in the middle of the src address above.
  </p>
  
  <p>
    Now that I had a better understanding of what dpkt was spitting out for the ip address, I started looking for ways to convert that into a more usable format. Thats when I stumbled onto <a href="http://stackoverflow.com/questions/2197974/convert-little-endian-hex-string-to-ip-address-in-python">this StackOverflow discussion</a> on converting hex strings to IP addresses. Struct.unpack(&#8216;!I&#8217;,number) was the key.
  </p>
  
  <p>
    The resulting function to replace socket.inet_ntoa is listed here:
  </p>
  
  <pre>def inet_ntoa(orignumber):
    addresslist=[]
    number = struct.unpack('!I',orignumber)[0]
    addresslist.append(str((number&gt;&gt;24)&0xff))
    addresslist.append(str((number&gt;&gt;16)&0xff))
    addresslist.append(str((number&gt;&gt;8)&0xff))
    addresslist.append(str(number&0xff))
    return '.'.join(addresslist)</pre>
</div>