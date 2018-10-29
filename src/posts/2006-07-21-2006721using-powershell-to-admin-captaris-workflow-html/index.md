---
path: "/2006/07/21/2006721using-powershell-to-admin-captaris-workflow-html/"
date: "2006-07-21T11:35:00+00:00"
title: Using PowerShell to Admin Captaris Workflow
tags:
  - captaris
  - captaris workflow
  - powershell

---
<div>
  <p>
    The other day I started looking into using <a href="http://del.icio.us/PowerShell" class="broken_link">PowerShell</a> to help manage <a href="http://www.captaris.com/">Captaris Workflow</a>. The toughest part about coming up with any administration tool is imagining all the different tasks people might want to accomplish. One of the wonderful things about Powershell is that you don&rsquo;t have to really know the details of how users want to manipulate the information. All you need to do is give the basic building blocks that can then be piped together to make something amazing. That was always the cool thing about piping commands in Unix. None of the individual utilities did much, but when piped together you could get amazing things done.
  </p>
  
  <p>
    Anyway, one of the common tasks that Captaris Workflow admins like to do is to move old processes to an archive folder. We can do that via the GUI, but it is a multiple step process. So I created two simple Powershell scripts that will move any file, folder, process, or model from one location to another based on name, id, date modified, date created, owner, original location, and more. And to make it even better the two scripts together add up to 15 lines of code. If you only count the unique lines, its down to 9 lines.
  </p>
  
  <p>
    So first off we want to get the list of records off the Workflow Server:
  </p>
  
  <blockquote>
    <p>
      param($user=$(Throw &#8220;A user is required&#8230;&#8221;),$pwd=&#8221;&#8221;)<br />[void][System.Reflection.Assembly]::LoadWithPartialName(&#8220;TeamplateBLL&#8221;) |out-null<br />$s = New-Object Teamplate.BLL.BSession<br />$s.Connect($user,$pwd)&nbsp;
    </p>
    
    <p>
      $f = New-Object Teamplate.BLL.BFileList<br />$f.SetSession($s) | out-null
    </p>
    
    <p>
      [xml]$fld = $f.GetRecords()
    </p>
    
    <p>
      return $fld.FileListDataSet.Files
    </p>
  </blockquote>
  
  <p>
    This simply is connecting a session, using that session to get the list of records, then returning that list to the user. The next script just takes the ID of a record and moves it to the ID of another location:
  </p>
  
  <blockquote>
    <p>
      param($FileID=$(Throw &#8220;A FileID is required&#8230;&#8221;),<br />&nbsp; $FolderID=$(Throw &#8220;A Destination FolderID is required&#8230;&#8221;),<br />&nbsp; $user=$(Throw &#8220;A user is required&#8230;&#8221;),<br />&nbsp; $pwd=&#8221;&#8221;)<br />[void][System.Reflection.Assembly]::LoadWithPartialName(&#8220;TeamplateBLL&#8221;) |out-null<br />$s = New-Object Teamplate.BLL.BSession<br />$s.Connect($user,$pwd)&nbsp;
    </p>
    
    <p>
      $f = New-Object Teamplate.BLL.BFileList<br />$f.SetSession($s) | out-null
    </p>
    
    <p>
      $f.MoveFile($FileID,$FolderID)
    </p>
  </blockquote>
  
  <p>
    So now with these two scripts, which I have called get-wfrecords and move-wfrecord I can do some of the following really cool things:
  </p>
  
  <ul>
    <li>
      Move all the Processes in Folder 123 to Folder 1:<br /><strong>get-wfrecords admin | where{$_.type -eq &#8220;process&#8221; -and $_.parentid -eq 123} | foreach{move-wfrecord $_.id 1 admin}</strong>
    </li>
    <li>
      Show me all the Models created before July 19, 2006:<br /><strong>get-wfrecords admin | ?{$_.datemodified -lt (Get-Date &#8220;july 19, 2006&#8221;) -and $_.type -eq &#8220;model&#8221;} | Select-Object name, datemodified</strong>
    </li>
    <li>
      Show me the models, processes, etc with Matt in the name:<br /><strong>get-wfrecords admin | ?{$_.name -like &#8220;*Matt*&#8221;}</strong>
    </li>
  </ul>
  
  <p>
    To get just one of these done in 15 lines of code in Visual Studio is pretty easy. But to get the many different variations I have in the same number is pretty freaking cool. Basically now I have to come up with methods to output all the different types of things in the system, then think about the different ways admins want to manipulate them. Do any of my readers have any ideas? Anything you want to see?
  </p>
</div>