---
title: "CSV Lookup with Typinator for Working with Repetitive Forms"
date: 2017-10-31T22:21:18-04:00
draft: false
description: "I am getting ready for AWS re:INVENT 2017. One of the core parts of the demo is a website. This post shows you why CodeBuild is a part of it all and why you might want to use it. "
---
[Datadog](http://datadoghq.com) just had it’s [third customer summit this week in Austin Texas](https://www.datadoghq.com/blog/datadog-summit-recap-2017/). I gave two workshops there to help customers get up to speed on Datadog, and with monitoring Kubernetes. To reduce the number of bottlenecks the students had to deal with, I needed to setup about 110 trial accounts. The web form we have for setting up a trial account is great for setting up one, or even a dozen accounts, but setting up 110 is not supposed to be easy. There was probably a person I could work with to configure this, but I just wanted to get it done. You probably have a form that you have to fill out that is a bit tiresome too.

There are many tools I could have used but I decided to go the text expansion route. All the tools in this space replace a small bit of text you write with a much bigger block of text. A year ago I would have done this with the king of the genre, [TextExpander](https://smilesoftware.com/textexpander). But then they went the [subscription route](https://tidbits.com/article/17157) and I wondered if their was an alternative that was almost as good. Instead I found a competitor that does everything and more that TextExpander, for the single price: [Typinator](http://www.ergonis.com/products/typinator/).

## Typinator basics
It’s sometimes not as pretty to look at, but I can do the typical text expansion, like printing today’s date when I type ddate, or a standard email response when I type a small string. And I can also do expansion with forms. This means I can type something like `:user`and see a simple form asking me for an integer, and expand out to a username, email, and organization that uses the same base strings with my integer added to make it unique. I can also type a pattern of text and it will automatically expand to a variation on the text. For instance if I type the 3 digit, 2 digit, 4 digit pattern of a social security number, the RegEx pattern can trigger a text expansion. 

## Typinator functions
Things get magical when you add functions. Typinator allows for functions written in a variety of languages to act on the text you type, or collect in a form. So I can interact with the system to get really interesting expansions. Not only did I need to create a bunch of accounts, but I also needed to record the information, including passwords so I could give it to the students. So my solution was to write a little program to spit out a CSV file with usernames, email addresses, organizations, and unique passwords for 110 users (Actually I needed 100 but I screwed up nearly ten so it made sense to go a bit further). And then use Typinator to read that CSV file based on the number I enter in a form. 

## That function in detail
Let’s get a bit more specific. To fill in the form, I need a unique username. Then tap the tab key to move to the next field where I type an email address (I used my email address with the `+` trick so I can filter any emails that come in for that user (many email platforms let you add a `+` followed by some text to create a unique email address that still goes to you. So if your email is joe@company.com, you can sign up to Slack with joe+slack@company.com and emails still come to you, but they are a bit easier to filter) . Continue with organization then password. Finally press enter to go to the next step. 

I went into the Typinator UI and created a new expansion. My abbreviation text is dduser. Then the text it expands to is 

```
{{usernumber=?User Number}}AustinSummitUser{{usernumber}}{tab}mattw+AustinSummit{{usernumber}}@datadoghq.com{tab}AustinSummitUsers{tab}{/Python
import sys
import csv

userreader = csv.reader(open('/Users/mattw/projects/other/ddaccountmaker/users.txt', 'r'), delimiter = ',')
for row in userreader:
	value = row[0]
	prevalue = 'SummitTraining-'
	testvalue = prevalue+str({{usernumber}})
	if value == testvalue:
		sys.stdout.write(row[3].strip())
}
```

## A bit more detail
OK, so what’s going on there. `{{usernumber=?User Number}}`tells Typinator to open a text entry form to collect some text to be saved in the `usernumber`variable. The field on the form has the label **User Number**. Then `AustinSummitUser{{usernumber}}` will type **AustinSummitUser01** (assuming I entered 01 for User Number). `{tab}`means hit the tab key which moves the cursor to the next field over.

The function is written in Python. It opens the file on the file system called `users.txt` and reads through until it finds a user called AustinSummitUser followed by the number I entered. When it finds the right line, it returns the third field which is the unique password. Sure, its kinda simple, but this is super powerful. 

## Let's reuse this to login
Since I have the CSV file, I can create another expansion to login as any of my trial users. So when I type `ddlogin`this expansion is processed:

```
{{usernumber=?User Number<{{#usernumber+1}}>}}{/Python
import sys
import csv


userreader = csv.reader(open('/Users/mattw/projects/other/ddaccountmaker/users.txt', 'r'), delimiter = ',')
for row in userreader:
	value = row[0]
	prevalue = 'SummitTraining-'
	testvalue = prevalue+str({{usernumber}})
	if value == testvalue:
		sys.stdout.write(row[1].strip())
}
{tab}
{/Python
import sys
import csv


userreader = csv.reader(open('/Users/mattw/projects/other/ddaccountmaker/users.txt', 'r'), delimiter = ',')
for row in userreader:
	value = row[0]
	prevalue = 'SummitTraining-'
	testvalue = prevalue+str({{usernumber}})
	if value == testvalue:
		sys.stdout.write(row[3].strip())
}
{return}

```

This collects the user number, then spits out the email and password. I lookup both values because the pattern changed halfway through creating the users. I initially thought I was setting up for 40 users then expanded to 100, though perhaps I should have planned for 200. And when I added those 60 other users I changed the email pattern. I have no idea why, but the change made a lot of sense, as these things tend to do, at 2AM. 

Several times in the workshops, I had to login as different users to see what was going on. Being able to type **ddlogin** followed by **64** made logging in to that user’s account super quick and easy. 

## Have you used Typinator?
Are you using Typinator? Have you done similar things with it? I would love to hear more about what you are up to with it so send me at tweet [@technovangelist](https://twitter.com/Technovangelist).

