---
path: "/2007/03/26/license-types-in-alchemy-html/" 
date: "2007-03-26T13:56:00+00:00" 
title: License Types in Alchemy
tags:
  - captaris
  - captaris alchemy

---
When you purchase Alchemy, you can purchase several different license types. Administrator gives all knowing access to everything. Index can still add content. Search just searches. Administrator costs the most, and Search the least. So a company will typically get many Search licenses, a few&nbsp; Index licenses, and minimal Administrators. But when building applications, some people aren&#8217;t aware that you can change the license type of your application. You should always pick the license type based on the type of activities your application will perform.

So to run an application with the features of Administrator, just load your app as you normally would. If you want to use an Index Station license you need to have the following line before you load any databases:

<pre class="brush: csharp">auApp.PutOptionsString("License", "Client", "IdxStation");
</pre>

So typically this would show up right before:

<pre class="brush: csharp">auApp.LoadOptionsFile("");</pre>

But the important part of that command is when it loads the databases in the options file.&nbsp;You could replace it with this line to achieve the same result:

<pre class="brush: csharp">auApp.Databases.Add(@"c:blah.ald");
</pre>

where blah.ald is the name of a database.

But I mentioned that there was a Search license you could consume instead. Achieving this it turns out is not easy&#8230;well, its easy to achieve, but learning how isn&#8217;t. I asked around internally and many people had no idea. It wasn&#8217;t until I got to the class this week and someone suggested this that I learned how to get this to work. What you need to do is to release the PutOptionsString line with this:

<pre class="brush: csharp">auApp.CanWrite = false;
</pre>

On one hand this kind of makes sense. But it is so completely different from the PutOptionsString line that its not that intuitive. By calling that line before&nbsp;either adding a database or loading the options file, you consume only a Search license and not the more expensive Administrator license.
