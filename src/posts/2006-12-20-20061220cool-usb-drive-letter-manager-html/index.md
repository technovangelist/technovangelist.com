---
path: "/2006/12/20/20061220cool-usb-drive-letter-manager-html/" 
date: "2006-12-20T02:08:00+00:00" 
title: Cool USB Drive Letter Manager
tags:
  - gadgets

---
During the course of my classes, I may want to distribute additional files to the students. Normally I do this with their own USB drives. The problem is that everytime I stick in a new USB stick, Windows tries to map it to G: but our IT folks have already mapped that to an internal network drive. Now it is easy enough to remap the USB drive to another location, but I have to do that for every new USB stick I get. When I want to quickly share a file and move on, having to spend an extra minute to fix windows is a pain in the ass.

I started to look into ways to solve this. At first I thought a batch file, wscript, or powershell script might work. While looking for clues on how to do this, I ended up finding a perfect solution already written by someone else. <a href="http://www.uwe-sieber.de/usbdlm_e.html">USBDLM</a> is a Windows service that will watch for new USB drive mappings, and remap them to one of a few specific letters you have configured to use for USB sticks.

This is perfect for me and I hope it works out. It has a 30 day eval license (though it doesn&#8217;t seem to have any timeout) and after that costs on 10 USD. If you are constantly having to mount foreign USB drives, this could be a great timesaver for you.
