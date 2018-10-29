---
path: "/2007/01/29/captaris-workflow-getting-the-overdue-event-to-fire-html/" 
date: "2007-01-29T06:36:00+00:00" 
title: Captaris Workflow – Getting the Overdue Event to Fire
tags:
  - captaris
  - captaris workflow

---
One of the common questions I get from Captaris customers is how to get the overdue event to fire. The reason this question comes up is that some of our method names are downright confusing, and I think we changed something here because it doesn&#8217;t look the same as I remember it.

In Captaris Workflow, there are a series of events that fire on any given task: Ready, Execute, Overdue, Failed, Reset, and Complete. Ready fires when the task is ready, but nothing has been done. Execute means a task has started but not necessarily finished. Overdue means the time alloted to complete the task has passed, but its not complete yet. Failed means something went wrong. Reset happens when the task is reset by the owner or administrator. And Complete means the task is complete and moves on to the next. At each one of these events, something can happen&#8230;anything you want.

There are two ways to set when that overdue event fires. By default, the task becomes overdue 1 year after it becomes ready. Usually you will want to change that. The easiest way is to drag the Set Overdue Date custom action on to the Ready event of the task and set it to the relative date it will be overdue. This will be Now plus some amount of time. There is no coding required to do this. But sometimes you will want a bit more flexibility that what this offers. For that, use the SetReminderForOverdueEvent method. It expects a DateTime, so just give it a time for when the overdue event should fire.

<pre class="brush:csharp&quot;">public void SecondTask_Ready(object data)
{
    SecondTask.SetReminderForOverdueEvent(DateTime.Now.AddSeconds.(30));
}
</pre>
