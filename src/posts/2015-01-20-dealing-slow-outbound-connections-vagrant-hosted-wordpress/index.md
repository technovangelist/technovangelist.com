---
path: "/2015/01/20/dealing-slow-outbound-connections-vagrant-hosted-wordpress/" 
date: "2015-01-20T08:46:17+00:00" 
title: Dealing with slow outbound connections in Vagrant hosted WordPress
---
When I started working with WordPress on Vagrant yesterday I noticed that it was very slow. Turns out it was due to how Vagrant and VirtualBox were dealing with DNS. It also turned out to be an easy fix. I just needed the following in my Vagrantfile:

<pre class="lang:ruby decode:true ">config.vm.provider "virtualbox" do |v| 
    v.customize ['modifyvm', :id, '--natdnshostresolver1', 'on'] 
    v.customize ['modifyvm', :id, '--natdnsproxy1', 'on'] 
end</pre>

&nbsp;