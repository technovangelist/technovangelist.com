---
path: "/2006/07/26/using-powershell-to-manage-alchemy-add-local-users-to-a-role-html/"
date: "2006-07-26T14:13:00+00:00"
title: Using Powershell to manage Alchemy – Add local users to a Role
tags:
  - captaris
  - captaris alchemy
  - powershell

---
Today in an Captaris Alchemy class I got an interesting question. One of the students has a customer who wants to use local users instead of domain users when setting up integrated security. Integrated security is where you can authorize users to view databases, folders, and/or files based on the username they are logged in as. Normally associating the database &lsquo;roles&rsquo; with domain users makes the most sense, but occasionally there is a need to set up local users. Now the problem is that the Server Console UI doesn&rsquo;t allow for anything other than domain users. So the only way to add a local user is through the Alchemy API. Before Powershell that would have probably meant breaking out Visual Studio. But now I think it is far easier to deal with. Here is a sample script that will take two parameters: a role name you want to add a user to, and a user name in the format servernameusername.
<pre class="brush:ps">param($role=$(Throw "A role name is required..."),
    $user=$(Throw "A user name in the format SERVERNAMEUSER is required..."))
$alc = new-object -com auserver.application
$alc.connect()
$alc.addroleuser($role,$user)
</pre>
If you name this script set-roleuser.ps1, then to add the user capabob to the sales role, just run<strong>set-roleuser sales capabob</strong>. That was easy.
