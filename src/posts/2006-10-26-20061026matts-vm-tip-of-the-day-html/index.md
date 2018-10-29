---
path: "/2006/10/26/20061026matts-vm-tip-of-the-day-html/" 
date: "2006-10-26T07:49:00+00:00" 
title: Matts VM Tip of the Day
---
Everyone now uses some sort of virtual machine technology in their daily work. I happen to use VMWare, but I used to use VirtualPC&#8230;.though I started with VMWare when it was still a research project at Stanford. When working with VMWare, tweaking the last drop of performance out of the machine is a never ending task. One of the easy, though time consuming steps is defragging the drive. You want to defrag both the host machine and the guest machine, but the most important files you might want to defrag on the host are the VM files themselves. So you could start up the Windows Defrag or I use Diskeeper from Executive Software. But when all I really care about is the VM, I use contig. Contig is a file defragmenter and&nbsp;is one of the amazing free utilities from Sysinternals. Whats special about contig is that I can focus in on one file or a directory of files. So I will go into the directories that hold my VMs, and run contig -v -s *.* and it will defrag all the files in that directory and subdirectories. When I have some files in 700 fragments that go down to 1, I see a huge performance gain in the VM later on.

<span class="full-image-block ssNonEditable"><span><a href="/photos/MattsVMTipoftheDay_570D/image02.png" class="broken_link"><img src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e99720e4b01058545b4998/1257631825567/vmtip.png/1000w" alt="" /></a></span></span>
