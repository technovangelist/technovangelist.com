---
path: "/2013/01/07/201317learning-r-with-coursera/" 
date: "2013-01-07T23:36:12+00:00" 
title: Learning R With Coursera
tags:
  - Coursera
  - R

---
Last week I started taking a new course on [Coursera.org][1]. It&#8217;s called [Computing for Data Analysis][2] and its all about using the [R programming language][3] to get a better understanding of large datasets. I work for [Yottaa][4] and large datasets are something we deal a lot with. I want to find an interesting way to work with and understand the data collected from all sorts of sites on the internet and I am hoping R is the perfect solution. Unfortunately, its a bit wierd and not all that well documented, so this training course could be just what I need. 

The programming assignment from last week already taught me a few commands I hadn&#8217;t used before. We are working with a table of numbers describing ozone, temperature and more and we needed to find the mean of the Solar.R value where Ozone was greater than 31 and temperature was greater than 90. At first it took me about 7 lines of code to get this done, but after some searching, managed to get it down to a single beautiful line (which I am sure I would forget if I did not document it here):

    mean((subset(x,Ozone>31 & Temp>90))$Solar.R)
    

Wow, that is cool!

I am looking forward to the second section of the course which starts on Wednesday!

 [1]: https://www.coursera.org/
 [2]: https://www.coursera.org/course/compdata
 [3]: http://www.r-project.org/
 [4]: http://yottaa.com