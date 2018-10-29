---
path: "/2006/01/11/2006111workflow-getting-one-out-of-two-to-approve-html/" 
date: "2006-01-11T10:16:00+00:00" 
title: 'Workflow: Getting one out of two to approve…'
tags:
  - captaris
  - captaris workflow

---
Yesterday a colleague asked me a question about a simple scenario in Captaris Workflow. Here it is: You have a simple workflow with 4 steps. The first leads to two in parallel, then both of those lead to the fourth. The two in parallel are approvers, perhaps of a document. You only need one approval to move forward. By default, Workflow requires approval from both to move forward, so how can you arrange it so only the one approval is required? It all comes down to the Business Rule Action.

First of lets create our test workflow. I drag and drop four webform tasks onto the canvas and name them First Task through Fourth Task. Now link all the tasks as shown: <br /><span class="full-image-block ssNonEditable"><span><img src="/static/500c9c42c4aa27cb90863e5e/50e9971de4b01058545b4678/50e99720e4b01058545b4981/1257622968813/ScreenShot022_small.jpg/1000w" alt="" /></span></span><br />Now create two webforms. One should just be the basic default form with the submit buttons. For the other, add a pair of radio buttons in the same group, and label them True and False. Create a single XML element called Approved, then bind that to the True Radio Button. Drag and drop the basic webform to the First and Fourth tasks and the other one to the Second and Third tasks. Note that so far we have done NO coding, just drag and drop, and clicking a few times.

If we run the workflow now, nothing special will happen. When we approve the second task, the workflow will wait for the third task to complete, but that&#8217;s not what our scenario demanded. So now we need to add an action to both the Second and Third tasks. From the Toolbox, drag and drop the Business Rule Action to the Complete event on those two tasks. Specify that the Business Rule should check to see if the Approved XML element has been set to True. Now here comes our one line of code. Right-click on the canvas and choose the script view. For the code block for the Second Task Complete event, add the following line:

<pre>ThirdTask.WorkflowAdvance(True)</pre>

Add the corresponding line for the ThirdTask Complete event as well (OK, there are two lines of code, but it&rsquo;s pretty much the same line so it doesn&#8217;t really count).

Now if we run the workflow and choose False on the Second (or Third Task), the other of the two will have to run. If we choose True, then the other task doesn&#8217;t have to run and it goes straight to the Fourth task.

This is a simple use of the Business Rule Action. If you look closely at the action that gets dropped on your canvas, you&#8217;ll notice a check mark and an x in that little diamond. Try dragging and dropping another action onto either the check or x. If the Business Rule evaluates to True, then it runs the actions under the check (or in our case, runs our single line of code). Otherwise it runs the actions under the x. Pretty cool and so damned easy&#8230;
