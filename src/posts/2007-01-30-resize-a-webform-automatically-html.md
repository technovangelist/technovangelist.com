---
path: "/2007/01/30/resize-a-webform-automatically-html/" 
date: "2007-01-30T05:45:00+00:00" 
title: Resize a webform automatically
tags:
  - captaris
  - captaris workflow

---
When designing a workflow in Captaris Workflow, one of your options is to use WebForms for all the UI. When doing this, we will usually open the form to some less than useful size and the enduser will usually resize the form to be able to use it. Resizing the form automatically is easy enough to do, but I always forget what the JavaScript should look like to do that. So here it is&#8230;just stick this in the PageLoad method and set the size to the right size for that form. Easy&#8230; Hopefully next time I need it, I won&#8217;t have to search for 10 minutes for this no-brainer&#8230;

<pre class="brush:js">Page.RegisterClientScriptBlock("tpCustomScript",
    "&lt;script language=JavaScript&gt;function resize()
    {window.resizeTo(300,300);};window.onresize=resize;
    resize();&lt;/script&gt;");
</pre>
