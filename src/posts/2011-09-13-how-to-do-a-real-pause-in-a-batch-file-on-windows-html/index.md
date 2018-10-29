---
path: "/2011/09/13/how-to-do-a-real-pause-in-a-batch-file-on-windows-html/" 
date: "2011-09-13T14:49:19+00:00" 
title: How To Do a Real Pause in a Batch File On Windows
tags:
  - Batch Files
  - DOS
  - gadgets
  - Windows

---

  <p>
    Ever wonder how to put a 20 second pause into a batch file on Windows? I had that problem today. I was setting up some virtual machines on a virtual machine hosting provider and needed a way to launch 2 virtual machines from a batch file. I knew that the Windows Server 2008 domain controller took 75 seconds to boot, and I didn&#8217;t want the member server to start until after the DC was completely up and running.
  </p>
  
  <p>
    The command, PAUSE has been available to batch files forever, but it waits for an enduser to press a button before it continues. I want to just wait for a certain time interval. Well, it turns out there is another command available in Windows that does exactly what I needed. The command is TIMEOUT and I think it first showed up in Windows Vista. Add timeout /t 75 and your batch file will wait 75 seconds before it continues to the next step.
  </p>
  
  <p>
    Perfect!
  </p>
</div>