---
path: "/2012/03/08/how-to-get-started-with-pushercom-html/" 
date: "2012-03-08T11:10:15+00:00" 
title: How To Get Started With Pusher.com
tags:
  - javascript
  - NodeJS
  - Pusher

---

Last night I was listening to one of my favorite podcasts called <a href="http://changelogshow.com/">The ChangeLog</a>. Its a weekly show covering new Open Source stuff. One of the sponsors is a company called <a href="http://pusher.com">Pusher</a>, but even after the ad, I wasn&#8217;t totally sure what they did. So I checked out their website.
  
At first glance of the site I still had a hard time understanding what they did. It looked like they provided some sort of communications layer between the browser and a server. They have all sorts of case studies, and a few examples, but after that, it was <em>still</em> hard to figure out what function they really actually performed.
  
So I started playing around with it, getting a free account and running through a sample or two, then scouring the web for other examples. After a while I thought I got it, but I was still wrong. It wasn&#8217;t until a few too many hours invested that I got close to grokking it. And it turns out that its really simple, and its <strong>extremely cool</strong>!
  
## What Does Pusher Do?

Basically, its a way to get data from the server back to the client asynchronously. Sure there are other ways to do that, but this is so darned simple to implement and it just works. You could use it to update a chart on your website with new usage stats, or implement a chat service, or all sorts of other things. Maybe even initiate a call to a customer using <a href="http://twilio.com">Twilio</a> as well.
  
## What Does It REALLY Do?
  
The chat was the first example I read and I think thats why I got confused. When I think of chat, I think of client to client. There might be a server somewhere in the middle, but its usually just there to initiate the conversation. And I assumed that Pusher was that server. But thats not what happens.
  
Your client, which is probably a web page, subscribes to a Pusher channel. You set up that channel from the server (or client). Messages are sent on the channel and any subscribers will see the messages on that channel (assuming permissions allow it, but my server assumes there are no secrets).
  
Now what I didn&#8217;t get till the last minute was that the client cannot submit messages, only receive them. Instead, the client has to contact the server on its own. I used a jQuery ajax post to do that. My server then parses the request and sends a message on the channel, which my client then deals with.
  
## How Do I Set It Up?
  
To set up a Pusher app, you need a server. The server doesn&#8217;t have to be complicated, but you do need a server. In today&#8217;s world of cloud services, a server no longer means a big loud rack mountable monstrosity in the closet. In fact in my case its a mysterious service in the ether called <a href="http://aws.amazon.com">Amazon Web Services</a>. I could just have easily used <a href="http://www.heroku.com/">Heroku</a>, or <a href="https://phpfog.com/" class="broken_link">PHPFog</a>, or all sorts of others, all of which have free base packages. So I setup the simplest possible server application I could come up with.
  
For me that application is a <a href="http://nodejs.org">NodeJS</a> based chat application. Here is the complete source code listing for my server.
  
Really! That&#8217;s all there is! Now this is NodeJS and its written in CoffeeScript, because thats just how I roll these days. The first two lines should be obvious, but node-pusher can be found at <a href="https://github.com/crossbreeze/node-pusher">https://github.com/crossbreeze/node-pusher</a>. Just run <code>npm install node-pusher</code> to get it installed on your server.
  
Then comes the key, secret, and appId. You can get those when you sign up for the free account at <a href="http://pusher.com">Pusher.com</a>. Create a new pusher object by passing it your key, secret, and appId. Then I create a few vars to store my channel, event, and some initial data. You can call your channel and event whatever you like. Its just a way for you to reference it in your client and server.
  
The trigger function is what actually sends the message on the channel as a specific type of event (again, you name it). The data can also be whatever your want to pass. So in my case I listen on port 8888 and anytime someone passes a query string like <code>from=matt&content=ChatMan</code>, then the server triggers an chat message on a channel called ChatChannel. Anyone who is subscribed will see that message.
  
## What About The Client?
  
If you thought the server was easy, the client is even easier. First, lets look at the HTML. As you can see its really basic. Just a text box to enter your name, and a text box for a message to send.
  
My html needs three javascript files: jQuery (just because I am lazy), Pusher (hopefully that one should be obvious), and my own local pusher code. So lets take a look at that code:
  
Again, super simple! I have moved my server URL to localhost so that you can test it with minimal fuss. Basically what happens is that whenever the text changes in the text box with ID of InputText, I post to localhost with a special query string. The fact that its going to a page called chat means nothing. That page could have been snufalufagus and it still works. I added a From name text box so I could easily test between two different browsers and see which was which.
  
Below that is the Pusher object which is initialized with your key from <a href="http://pusher.com">Pusher.com</a>. Then you subscribe to the channel. This needs to be the same as the channel name on the server. Finally I bind an event handler that tells the webpage to update whenever a new &#8216;chat&#8217; message comes in.
  
## Just 50 Lines Of Code?? Really?
  
Really ! Thats all there is. And I was a bit wasteful in a few spots. Now of course, hopefully you see where this could be improved. Like making it not look like it does. I could also subscribe to multiple channels, or multiple types of information. Maybe the chat window shows chat stuff, but I also get a file saved to localStorage. Maybe this is actually running in an Adobe Air app and the chat is visible, but I receive keys and passwords as a separate type of event which gets stored directly in the Encrypted Local Storage area.
  
Thats actually my plan. I have a site I created for work called <a href="http://faxdocs.tv">FaxDocs.tv</a> which hosts videos for our products. I want to add a chat window to parts of the site. I already created a management app we use internally that uses Adobe Air. The reason I did that is that I run on a Mac and my colleagues are on Windows. So now I can add the chat functionality to the Air app. When one of us has the app open, then the option for a chat is available on the website. The end user doesn&#8217;t have to use it, but they can.
  
As I complete more of that app, I&#8217;ll share it here. Until then, have fun with <a href="http://pusher.com">Pusher</a>. I certainly am.
</div>