---
path: "/2008/12/13/getting-started-with-home-automation-html/" 
date: "2008-12-13T18:58:00+00:00" 
title: Getting Started with Home Automation
tags:
  - Apartment
  - home automation

---

  <p>
    Back when I first bought this apartment, I knew I wanted to get into Home Automation. I wanted to be able to understand how I was using power, I wanted to turn the lights on and off from far away, I wanted my apartment to be intelligent and responsive to my needs. But there were a lot of other priorities that had to come first&#8230;like renovation, and recovering from paying for the renovation. But recently I actually got started with all of this.
  </p>
  
  <p>
    The first step was research. I wasn&#8217;t really sure what was possible. Looking around the net, I found some great sites that gave me ideas. Unfortunately many of them were in the US and much of what goes on in the US isn&#8217;t directly applicable to the rest of the planet. As usual, there are standards, then there are the US versions of those standards: power, radio frequencies, etc. Thankfully there are many example sites here in Europe too so I had to really get started there. One of the really great ones in <a href="http://bwired.nl">bwired.nl</a>, an automated and online home in the same country I am. Check that page out, he is displaying everything about his place. Now, I don&#8217;t plan to make this kind of data available for my apartment, but its very interesting to see what can be done.
  </p>
  
  <p>
    I decided the first project I wanted to tackle was monitoring my gas and electricity usage. Bwired shows what equipment he uses to read the gas and electric meters in his house and it looked pretty similar to what I needed to do. The first purchase was going to be from RFXCom, but trying to figure out what I wanted proved to be a bit difficult. I contacted the guys at RFXCom and got a quick response showing exactly what I should get to start out. A few weeks later I finally shelled out the money for everything. I ended up getting an RFXMeter with pulse counter, plus an additional pulse module, and one Reflective-Optical sensor and one Photo Sensor. These can be found at <a href="http://www.rfxcom.com/sensors.htm">http://www.rfxcom.com/sensors.htm</a>. I also got the USB 433.92 MHz Receiver with 1 COM Port. The RFXMeter goes in my electric closet with the Photo sensor stuck to the electric meter and the reflective-optical sensor on the gas meter. The Receiver is then plugged into my PC upstairs. As an extra bonus, the Receiver also picks up the Oregon Scientific and Radio Shack temperature meters I got a few years ago in the US.
  </p>
  
  <p>
    Getting started ended up being a bit frustrating because while I was hoping to be able to start working on it the following weekend, shipping took about 1.5 weeks. And then when I opened the box, the extra module was missing. I emailed the company and was amazed when the replacement showed up in my mailbox the next day. The 1.5 week delay is pretty typical for Dutch customer service, but the next day replacement is pretty much unheard of.
  </p>
  
  <p>
    The first step was to modify the RFXMeter box to accept the additional Pulse module. Some time with a power drill with a far too small bit shaved off enough plastic to make it work (had it not been late at night, a quick trip to a hardware store could have produced a more appropriate tool). Then I plugged in the module and the two sensors and tried to attach them to the Gas and Electric Meters. Easier said than done. The sensor for the electric meter seemed to be poorly set into its plastic housing, but with a paper clip and some duct tape I managed to get it into place. The reflective-optical sensor for the gas meter was far more difficult to place. In fact it took about two weeks of sticking, resticking, and finally discovering the adjustment screws inside the RFXMeter just today.
  </p>
  
  <p>
    The modules have two tiny screws on their circuit boards. Each one is to adjust how the sensors work. One is for the LED, and the other is for the optical sensor. Since the Photo sensor cable has no LED, you don&#8217;t have to adjust that one. OK, so to make the LED brighter, turn that screw clockwise, and to make the optical sensor more sensitive turn it&#8217;s screw clockwise. The protective plastic on my electric meter bows out an inch or two, so I had to make that more sensitive, while the plastic on the gas meter is flat so I had to make that much less sensitive. The sensors have double-sided tape on them which seemed a bit too permanent, hence the duct tape.
  </p>
  
  <p>
    But I didn&#8217;t spend the last two weeks just trying to place the sensors. I was also trying to figure out how to read the data collected into a database. I&#8217;ll go into detail on that project in a future post, but here are the basics. Since I am ex-Microsoft, I feel more comfortable with C# than anything else. The RFXMeter transmits data every 30 seconds, which is roughly the same frequency as the Oregon Scientific temperature sensors. I built a small Windows Service that watches the COM port on the receiver, parses the 6 or 10 bytes generated per transmission, and stores the data in a SQL Server database. Then I have a Web application that reads the database every 30 seconds and produces charts for gas and electric meter usage, and inside and outside temperatures. The gas and electric meter charts show me usage data for each hour, plus the average for that hour over the last 3 days. And rather than showing me meaningless numbers like cubic meters and kilowatt hours, I actually show how much that hour is costing me in Euros. I have been watching these charts all day and they are fascinating. And the project has given me a great excuse to spend more time with .Net 3.5, Linq to SQL and Linq to Objects, the new Microsoft ASP.NET Chart Control, basic bit arithmetic, and more.
  </p>
  
  <p>
    &nbsp;
  </p>
</div>