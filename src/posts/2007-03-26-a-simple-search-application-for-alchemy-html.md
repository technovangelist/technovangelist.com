---
path: "/2007/03/26/a-simple-search-application-for-alchemy-html/" 
date: "2007-03-26T09:36:00+00:00" 
title: A Simple Search Application for Alchemy
tags:
  - captaris
  - captaris alchemy

---
One of my students this week asked about creating an extremely simple search client for Alchemy. Out of the box, Alchemy Search can be fairly easy to use, but there are still a lot of buttons that one could press. And if all you want is a simple search to show all the documents across all your repositories it may be a bit too much. So I created what has to be one of the simplest UIs possible:

<span class="full-image-block ssNonEditable"><span><img src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e99720e4b01058545b4957/1257623393073/ss001_thumb5.jpg/1000w" alt="" /></span></span>

As you type in the search box at the top left, results start showing up in the list below:

<span class="full-image-block ssNonEditable"><span><img src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e99720e4b01058545b4958/1257623394167/ss002.jpg/1000w" alt="" /></span></span>

Then you just click on a document and you get a preview:

<span class="full-image-block ssNonEditable"><span><img src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e99720e4b01058545b4959/1257623394064/ss003.jpg/1000w" alt="" /></span></span>

You can continue typing and your search is refined. No need to press enter. So how did I get here? Well, its just a simple Windows form application with a SplitContainer. On the right side I have the Alchemy Viewer, and on the left is a text box and a listbox. Whenever the text in the text box changes, it does the search again. One of the benefits of Alchemy is that the search is extremely quick, so this app is amazingly quick.

When I do the search I have to ensure that the text doesn&#8217;t end with <em>and</em> or <em>or</em>. If it does, then don&#8217;t pass it to the search because those are keywords we use. Then I clear the textbox and clear the query. The search itself is easy:

<pre class="brush:csharp">auQuery.AddFullTextQuery(tbSearch.Text);
auQuery.SearchGroup(auSGroup);
if (auQuery.Results.Count &gt; 0)
{
    foreach (Alchemy.Result aResult in auQuery.Results)
    {
        foreach (Alchemy.Item aItem in aResult.Items)
        {
            lbResults.Items.Add(aItem.Title);
        }
    }
}
</pre>

This also populates the listbox. Then when I click on an item, I tell the Viewer to ViewItem(). It took all of 20 minutes to write ugly code while exhausted. Give me another 30 minutes to clean it up and I might be willing to share it. Of course, this assumes you have Alchemy.
