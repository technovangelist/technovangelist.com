---
path: "/2012/02/10/scratching-an-itch-in-the-adobe-air-html/" 
date: "2012-02-10T08:28:04+00:00" 
title: Scratching An Itch In The (Adobe) Air
tags:
  - Adobe Air
  - Air SDK
  - CoffeeScript
  - Fax
  - FaxDocs.tv
  - HTML
  - javascript

---
Recently I needed to solve a challenge that came up at work. Actually, it was a series of challenges. First, we needed a better way to display our/my videos. Then we needed a better way to submit and review those videos. We also needed a better way to report on how people consume them. It turned out to be quite a big challenge.

<img src="https://i1.wp.com/technovangelist.envl.pe/wp-content/uploads/sites/3/2012/02/Screen-Shot-2012-02-10-at-9.20.08-AM.png.08+AM.png?w=1080" alt="" data-recalc-dims="1" />

In the past, I didn’t think we needed a solution. YouTube provided the answer for everything. [YouTube][1]{.broken_link} was the primary host for our videos. It just made sense to display our videos on YouTube as well. We also provided links and embeds of those videos on our [blog][2], as well as on some other web properties.

But every now and then, YouTube changed the formatting for its pages. We have minimal control over the look of those pages. And organizing videos is always a challenge. Our customers have a hard time finding the right video because we don’t have a great way to categorize them on the page.

Reporting on video views is a strong point of YouTube, but we can’t easily see what parts of the videos engage viewers the most. I think I know what people enjoy, but I could be wrong. And the YouTube analytics don’t provide me with good enough tools to figure that out.

So we spent a good long time trying to find a better solution. And it’s ended up being one of my big projects at work for the last few months. The result is still in process, but I am pretty happy with where things are going.

<img src="https://i2.wp.com/technovangelist.envl.pe/wp-content/uploads/sites/3/2012/02/Screen-Shot-2012-02-10-at-9.18.14-AM.png.14+AM.png?w=1080" alt="" data-recalc-dims="1" />

For our customers and partners, it starts and ends with a single web property: [FaxDocs.tv][3]. FaxDocs is a list of videos that we can easily put into the right categories. And it is completely under our own control. But behind FaxDocs is a site called [Wistia][4] which actually hosts our videos.

Wistia isn’t going to be the solution for everyone as it does require payment. But as soon as you outgrow what YouTube provides for free, Wistia is a great next step. With Wistia, we control the video experience. We have access to great reports that show which parts of the videos are the most engaging. And there is another amazing benefit to using Wistia we did not expect at the beginning. Unlike YouTube, Wistia is not blocked by most corporate and international firewalls.

We already see an increase in views around the world. Administrators in companies that block YouTube are watching our videos. Potential customers in China are watching our videos even though YouTube is not accessible. Looking back, this is enough of a benefit to justify the subscription costs to Wistia.

FaxDocs itself is hosted with the massively popular web hosting company called [Squarespace][5]. Squarespace provides a great foundation with enough flexibilty for what I wanted to do.

The downside to using a custom platform as it is now is that my system is a bit brittle. I need to post things in a way that is just right. And I need to refer to a set of instructions with every post. I hate that. It was the same with YouTube and the result has been a bit of inconsistency as to how we post videos. So now I am working on the next stage of FaxDocs. I am creating a management app to make it easier to post, get statistics, and more.

I spent a bit of time thinking about the right way to deliver this management app. I cannot build the app just for me. There are others in the organization that need to work with it. I use a Mac, but everyone else is on a Windows PC. I would rather the app not run on an external webhost. Due to the resources available to me, that means it has to be a desktop app. And a desktop app that doesn’t require installing additional wierd services.

<img src="https://i0.wp.com/technovangelist.envl.pe/wp-content/uploads/sites/3/2012/02/Screen-Shot-2012-02-10-at-9.22.jpg.jpg?w=1080" alt="" data-recalc-dims="1" />

So how can I solve all of those needs? It turned out to be a really simple solution. Adobe Air. I have worked with Adobe Air for the last week now and I am really surprised at what it can do. That’s not to say that Air makes absolute sense all the time. I had a few challenges in building my app for Air that I had to overcome. And I am not developing for Adobe Air in the traditional way, so many of the online articles on the topic are not exactly written for me.

What is the traditional way to write an Adobe Air app? As far as I know, it is to use something like Flash Builder. While I do own Adobe Creative Suite 5.5, the version I have is Production Premium. This does not include Flash Builder. But it turns out that you do not need that to build an Adobe Air application.

My Adobe Air development environment involves two main tools. The first, and very important, tool is the free [Adobe Air SDK][6]. This includes the compiler and the debug utilities which I use a lot. The second main tool is a text editor. You can use any text editor you like, but at the moment I am totally loving [SublimeText 2][7]. If you are new to Sublime, also check out Jeffrey Way’s [Tips & Tricks at Nettuts][8].

I am going to walk through the process for building an Adobe Air app here on [Technovangelist][9]{.broken_link}. I haven’t written the articles yet, but I would expect the series to take quite a few posts. I hope you’ll stick with me as I write all the posts. If you have any comments, please share them with me below.

 [1]: http://youtube.com/opentextfddg
 [2]: http://faxsolutionsblog.opentext.com/
 [3]: http://faxdocs.tv/
 [4]: http://wistia.com/
 [5]: http://squarespace.com/
 [6]: http://www.adobe.com/special/products/air/sdk/
 [7]: http://www.sublimetext.com/2
 [8]: http://net.tutsplus.com/tutorials/tools-and-tips/sublime-text-2-tips-and-tricks/
 [9]: https://matt-williams-kq3v.squarespace.com/