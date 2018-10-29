---
path: "/2008/01/22/2008122how-to-get-ie-to-stop-going-home-on-first-install-html/" 
date: "2008-01-22T10:01:00+00:00" 
title: How to get IE to stop going home on first install
tags:
  - gadgets

---

  <p>
    This is a note for me so that I don&#8217;t have to search too hard next time. When I build VMs I usually like to be completely disconnected and never connect to the internet. But then things like IE7 force me to connect at least once so that it can go to <a title="http://go.microsoft.com/fwlink/?LinkId=74005" href="http://go.microsoft.com/fwlink/?LinkId=74005">http://go.microsoft.com/fwlink/?LinkId=74005</a> at least one time. I hate that. To solve the problem add two DWORD values to the registry under HKLMSoftwareMicrosoftInternet ExplorerMain: RunOnceHasShown and RunOnceComplete. The values should be set to 1. Ahhh
  </p>
</div>