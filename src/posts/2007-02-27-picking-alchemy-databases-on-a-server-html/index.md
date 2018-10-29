---
path: "/2007/02/27/picking-alchemy-databases-on-a-server-html/" 
date: "2007-02-27T14:52:00+00:00" 
title: Picking Alchemy Databases on a Server
tags:
  - captaris
  - captaris alchemy

---
Earlier today I had a need to choose databases from a server to show up in Alchemy Administrator. The problem was that the server wasn&#8217;t on a domain (its my development server which is running in a VirtualPC vm). I couldn&#8217;t find the server easily, so I thought there had to be a better way. So I created a tool to make it easier. When you first launch it, you get this:

<span class="full-image-block ssNonEditable"><span><img src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e9971fe4b01058545b489e/1257623537082/ScreenShot_thumb3.jpg/1000w" alt="" /></span></span>

Enter a server&nbsp;and press Enter to get a list of databases from the server:

<span class="full-image-block ssNonEditable"><span><a href="/photos/PickingAlchemyDatabasesonaServer_133A7/ScreenShot23.jpg" class="broken_link"><img src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e9971fe4b01058545b489f/1257623562253/ScreenShot2_thumb1.jpg/1000w" alt="" /></a></span></span>

If you already have any databases&nbsp;loaded in Alchemy Administrator, they are already selected. Make changes to you selections and click Save. The changes will be persisted to your Alchemy.ini file.

To build this, I had to add a reference to both the Alchemy Object Library 2.0 and the Alchemy Server API and then make the call to load the local options file. Then I populate an ArrayList with the databases that are currently loaded in the ini:


<pre class="brush:csharp">foreach (Alchemy.Database myDatabase in auApp.Databases)
{
    if (myDatabase.Path.StartsWith("alchemy"))
        loadedDatabases.Add(new AuDb(myDatabase.Path));
}
</pre>

AuDb is a simple class I created that parses out the server, port, and database from the URL based on some regular expressions. Next I populate the list box with the databases under server control:
  
<pre class="brush:csharp">foreach (int DatabaseID in auServer.DatabaseList)
{
    string databaseUrl = auServer.get_DatabaseUrl(DatabaseID);
    AuDb myDB = new AuDb(databaseUrl);

    dbindex = lbDatabases.Items.Add(databaseUrl);

    if (loadedDatabases.Contains(myDB))
        lbDatabases.SetSelected(dbindex, true);
}
</pre>

I want the items that are currently in the ini to be selected on the list, so that explains the last two lines. Now I can go through each item in the list box, see if it is selected, and then either add the database or remove it from the Applications databases. Finally, call SaveOptionsFile to save it.

Pretty cool little tool and will definitely save me some time in the future.
