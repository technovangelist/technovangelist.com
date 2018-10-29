---
path: "/2005/10/06/2005106re-installing-sql-reporting-services-html/" 
date: "2005-10-06T14:30:00+00:00" 
title: "Re-Installing SQL Reporting Services"
tags:
  - captaris
  - captaris workflow
  - sharepoint

---
At Captaris we recently released <a href="http://www.captaris.com/workflow">Captaris Workflow 5.2</a>. This is a point release adding some new functionality here and there, and one of the cool additions is support out of the box for <a href="http://www.microsoft.com/sql/reporting/">SQL Reporting Services</a>. I am building a series of automated demos for use on kiosks in our Vianen office at a event coming up soon. So I wanted to be able to show the latest in these demos, and that means showing the latest features too. Being able to report on workflows and key performance indicators from Reporting Services is pretty cool, so getting that going is pretty important. But for some reason RS was giving me no love this morning. I ended up having to reinstall RS. But this is on a demo VPC that has everything, including Sharepoint Portal. I believe this is not a supported scenario from Microsoft. Luckily there is a MSDN article on how to set this up. But even better is a <a href="http://blogs.officezealot.com/mauro/archive/2005/07/08/6729.aspx" class="broken_link">blog posting from Mauro Cardarelli</a> which lists the steps from that MSDN article, PLUS info on installing the Sharepoint webparts for RS, AND where to get the RS rdl files to report on Sharepoint stats. As soon as my VPC finishes rebooting and merging hard disks I look forward to playing with this a bit more.
