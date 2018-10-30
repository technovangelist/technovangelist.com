---
path: "/2010/07/30/the-most-obvious-answer-isnt-always-the-right-answer-html/" 
date: "2010-07-30T11:00:50+00:00" 
title: The Most Obvious Answer Isn’t Always The Right Answer
tags:
  - Troubleshooting

---

  <p>
    Every now and then I am reminded about how important good troubleshooting skills are. Don&#8217;t just hit the problem with a hammer and hope for the best. Instead, break the problem down and test each of the pieces to try to focus on the real issue. I do that all the time at work when showing students how to troubleshoot <a href="http://faxsolutionsblog.opentext.com">Fax Server</a> issues. That said, sometimes its a difficult thing to remember.
  </p>
  
  <p>
    Recently at home I have been having a tough time with my wireless connectivity. My 20Mb DSL connection comes with a wireless router from Zyxel and every now and then the wireless would drop. I figured it was a result of the router getting slammed with&#8230;ummm&#8230;traffic. In fact, when I could get to the administration screen over a wired connection, the CPU graph showed the unit was working overtime. So I worked on coming up with the right configuration for the source of all that traffic. But still, every now and then my wireless dropped.
  </p>
  
  <p>
    Luckily, I had an extra Linksys WRT54G lying around from before (it happens to be a v7 unit, meaning the only version not supported by <a href="http://www.dd-wrt.com/site/index">DD-WRT</a>). So I hooked that up to my network to serve as a simple wireless access point, and disabled that service on the Zyxel. It all seemed to be better, but the signal strength on my Mac was extremely weak. Considering that my couch (from which I do much of my serious testing) is no more than 6 feet away from the box, I thought this was a bit strange. And then within 20-30 minutes, the wireless dropped. AAAARRRRGGGGHHHHH!!!!!
  </p>
  
  <p>
    It was at that point that I noticed something strange. Right around the time of my dropped connection, I started a video playing on my <a href="http://www.engadget.com/2009/10/01/asus-eeebox-eb1501-comes-packing-windows-7-atom-330/">Asus EEE Box</a> media player. It streams its videos and music off of my <a href="http://www.drobo.com/">Drobo</a>, which just happens to be sitting on the floor of my electric closet next to my Zyxel and Linksys (This is at home&#8230;I have no rack system here&#8230;floors seem to work well instead). Hmmmm.
  </p>
  
  <p>
    I pulled the Linksys out of the closet so it was just a few feet from the Drobo. Signal strength rocketed up and most importantly, over the last two days, I have had no dropped connections. By moving the access point back into the closet, but mounting it higher up on the wall, I was able to maintain that level of connectivity without a mess of wires creeping into my living room. The next test will be to move the Zyxel higher up and removing the Linksys from the equation.
  </p>
  
  <p>
    So what does all this mean? Can I assume that the Drobo is causing enough interference to result in the wireless dropping? Well, not really. It turns out that it&#8217;s not the only thing near the floor in that closet. There is also the gas meter right there. It comes on every now and then to heat up the water in my boiler. Perhaps this is telling me that storing the Drobo in there might not be the best idea either.
  </p>
  
  <p>
    Troubleshooting is a valuable skill to have, especially in an IT-related field. That said, sometimes accidentally kicking the hammer into a problem sometimes is a quicker way to a solution&#8230;.
  </p>
</div>