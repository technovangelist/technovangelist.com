---
title: "Keeping Todoist Top of Mind"
date: 2018-09-12T02:40:47
draft: false
---
How do you keep track of the stuff you need to get done? How do you ensure you are really on top of it all. At work, we use Trello and Slack but to get more granular as well as for personal tasks, I use [Todoist](https://todoist.com).

# Ok, so why use something else

But as with any application you use to track tasks, its only any good if you remember to use it. I have been known to forget to keep it open...for weeks. And then the information gets out of date.

![My Touch Bar](/images/mytouchbar.png)

Recently however I have been much better about keeping everything in sync. The trick has been to use the incredible Touch Bar on the MacBook Pro to keep stats top of mind. Ideally I want to keep tasks in a project and out of the Inbox. If there is anything in my Todoist Inbox, I can see how many highlighted on the TouchBar. I want to know if there is anything due in the next 24 hours and so I see how many of those are coming up on the Touch Bar as well.

# Isn't there already something that does this

I have seen other tools that do this, but they typically need Todoist open on your desktop. Remember where I said I sometimes forget to open it...for weeks? Yeah, so that doesn't work for me. But it turns out the Todoist API is fairly easy to work with. It would be easier if the docs didn't suck, but I can usually figure it out.

# API ?!? Not interested

Now if the mention of an API concerns you, don't panic. If you want to replicate this, run the file your download below, add your key, run one command in your terminal window, and you are good to go.

To get this onto the Touch Bar, you are going to need the amazing [Better Touch Tool](https://folivora.ai/). Better Touch Tool lets you customize your mouse, touch pad, keyboard shortcuts and other things. In the last year or so, [Andreas Hegenberg](https://twitter.com/folivora_ai?lang=en), the author, added support for customizing the MBP Touch Bar. It costs 20 bucks for a lifetime license though you can try it for free for 45 days. When it comes time to pay for it, I hope you are just as surprised he charges so little for such an amazing tool.

# OK, its installed. Now what?

Once you have it installed, go to the TouchBar section. I am not sure what general settings you need, but here is what I have:


![my setting](/images/bttsettings.png)

The actual Todoist component is made of 5 items: 3 buttons and 2 widget. Basically there are two endcaps that are buttons. Then the Todoist icon is a button. The two widgets are scripts.

I use the Todoist API so the first step is to run the following in your terminal:

```
pip install todoist-python
```

Once you have that and Todoist is installed and running, visit this page on Better Touch Tool's website: https://community.folivora.ai/t/todoist-inbox-and-due-items-count/3673

From there, download **Todoistv1.bttpreset** and then run it. You should get a prompt to import it into Better Touch Tool. 

# Whoa! What are you doing there?

Opening any file from someone you don't know or trust is a risk. We don't really know each other and if I were evil, I would have the potential of running a script on your system. As far as I know, I am not doing anything bad, but it is a risk.

That said, here is what I am doing. The first script gets the number of items in your Todoist Inbox:

```python
from todoist.api import TodoistAPI
try:
  api = TodoistAPI('YourTodoistAPIKey')
  api.sync()
  inboxprojectinfo = list(filter(lambda x: x['name'] == "Inbox", api.state['projects']))[0]
  itemsininbox = len(api.projects.get_data(inboxprojectinfo['id'])['items'])
  if itemsininbox>0:
    print 'in: '+ str(itemsininbox)
except:
  print ""
```

Replace `YourTodoistAPIKey` with the API Key under Settings -> Integrations. 

The second script will get the number of items due in the next 24 hours.

```python
from datetime import datetime
from datetime import timedelta
from dateutil.parser import parse
from todoist.api import TodoistAPI

try:
  api = TodoistAPI('YourTodoistAPIKey')
  api.sync()
  tomorrow = datetime.utcnow() + timedelta(days=1)
  allitems = list(filter(lambda x: x['due_date_utc'] != None and x['checked'] == 0,  api.state['items']))
  duetoday = list(filter(lambda x: parse(x['due_date_utc']).replace(tzinfo=None)< tomorrow, allitems))
  if len(duetoday)>0:
    print 'due: ' + str(len(duetoday))
except:
  print ""
  ```

If you open the bttpreset file in a text editor and search for **BTTTriggerConfig** you will see these scripts and can verify that they are exactly what I list above. As you can see I am just getting info from your account and not modifying anything.

I have no comments setup on this blog, so if anything doesn't make sense, send me a tweet [@technovangelist](https://twitter.com/technovangelist).

For me, this is a game changer. It's too easy to close Todoist and then forget about anything in the app. With this, its always right there, always showing me that there is something I need to do...well except when it isn't. If you are offline, it won't work. It uses the API with todoist.com. If you are offline, todoist.com might as well not exist. I am fine with this caveat. I love the widget now that it's always on my touch bar and hope you get a kick out of it too. 