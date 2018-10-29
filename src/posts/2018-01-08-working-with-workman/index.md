---
title: "Working with Workman"
date: 2018-01-08T14:07:57
draft: false
---
A few years ago I made a change in the way I work. It's a change that is generally positive with regards to my productivity, but I would actively advise you not to go that way. I changed my keyboard layout. Changing your keyboard layout is drastic; I had no idea how much of a brain shift would be required. I type faster than I ever did, but the bottleneck now is not my fingers but rather thinking about what I want to say and how I want to say it. That said, if you have made a switch, or are getting started with that switch, here is how I deal with it on my Mac with multiple keyboards.

My daily computer is a 2017 MacBook Pro with TouchBar. This is by far the best Mac I have ever used. I think it's finally better than my old 17" MBP. The keyboard is dreamily wonderful, the touch bar transforms the top row into something that is useful rather than wasted space. And the trackpad finally makes me not long for the old ThinkPad tracksticks. But this post isn't about my Mac. I want to show you the tools I use to make it easier to work with my chosen keyboard layout.

I use [Workman](https://github.com/kdeloach/workman), and more specifically [Workman Dead](https://github.com/kdeloach/workman/tree/master/mac#workman-dead-for-programmers). [Workman was created by OJ Bucao](http://workmanlayout.org/) to help him deal with his RSI and to overcome the weaknesses of Colemak which had the same goal against Dvorak. As long as I was making a switch, I figured I should choose something that was the most efficient possible. Workman Dead adds a 'dead key' that changes the layout when I hit the comma key. As soon as I press any key after comma, the layout goes back to the standard Workman. I can type most of the common punctuation and symbols without taking my fingers far from the home row. Kind of amazing.

There are lots of [statistics](http://workmanlayout.org/#tests-using-popular-books) put [out by](https://normanlayout.info/compare.html) many [folks](https://forum.colemak.com/topic/1098-some-statistics-about-layouts-comparisons-charts/) on what is easier and harder to type with. But many of those assume that all fingers have the same characteristics and all humans have the same configuration of fingers. In fact some folks claim that certain key combinations are hard on different layouts and I find them to be easy. Others are supposed to be easy and they are hard for me. So both assumptions may or may not be true for you: take the stats as a starting point and try them out yourself. 

Unfortunately, [OJ Bucao  seems to have distanced himself from the project](https://github.com/ojbucao/Workman/issues/34) but <http://workmanlayout.org/> is still going and supporting users that want to start working with the layout. You can download the Workman for MacOS, Windows, and Linux and if you are only using a single keyboard, thats all you need to think about. 

If you are only using keyboards with the same key layout, you are good too. Because a US QWERTY internal keyboard looks the same as a US QWERTY external keyboard. But thats not what I have. So yes, the keyboard on the MBP is a standard US layout. Use the workman layout files and change it in Keyboard Preferences and everything is all set. But the external keyboard I use at work is an [ErgoDox EZ](https://ergodox-ez.com/). I have had this for a few years, and it is amazing. The firmware allows you to remap the keyboard so that the keys are anywhere you want. And it supports many layers, so click a key and you could have a newly remapped keyboard, no software needed. Mine is with Workman. So when plugged into my Mac or anyone else's Mac, just leave it on US and I can type with the Workman layout. 

That's pretty awesome. But as soon as I unplug and move to a different room, I have a US layout keyboard to deal with, so switch to Workman and as soon as I plugin I have a layout that is neither Workman nor US so everything is screwed up. So I need a few things to happen to make this automatic. 

First I started with a pair of simple scripts and a utility by Wolfgang Lutz. Lutz, or Lutzifer on GitHub created Keyboard Switcher. Initially I had an [issue with it](https://github.com/Lutzifer/keyboardSwitcher/issues/1) but it was quickly resolved. So using these two super simple scripts I am good to go:

	#!/bin/bash
	# Switch to US
	/usr/local/bin/keyboardSwitcher select "U.S."

And

	#!/bin/bash
	# Switch to Workman
	/usr/local/bin/keyboardSwitcher select "Workman-Dead"

But that meant I needed to trigger the right one, so I tweaked it to this:

	#!/usr/local/bin/fish
	function keyswitch
	  set -l currkey (keyboardSwitcher get)
	  switch $currkey
	    case 'Workman-Dead'
	      /usr/local/bin/keyboardSwitcher select "U.S"
	    case 'U.S.'
	      /usr/local/bin/keyboardSwitcher select "Workman-Dead"
	  end
	end

	keyswitch

You can see that I use [Fish for my shell](https://fishshell.com/), another story for another time. It uses Keyboard Switcher to get the current layout then uses it again to set it to the other one. That can easily be added to a keyboard shortcut with something like [Keyboard Maestro](https://www.keyboardmaestro.com/main/) which is what I used to do. And then at some point I found [Hammerspoon](http://www.hammerspoon.org/) which lets you automate the Mac with some simple Lua scripts. Here are the simple, albeit convoluted, script I use to automate Keyboard Switcher with Hammerspoon.

	function setUSLayout(  )
	  hs.execute("keyboardSwitcher select \"U.S.\"", true)
	end

	function setWorkmanLayout(  )
	  hs.execute("keyboardSwitcher select \"Workman-Dead\"", true)
	end

	function setKeyboard()
	  local devs = hs.usb.attachedDevices()
	  if keyValueExists(devs, "productName", "ErgoDox EZ") then
	    setUSLayout()
	  else
	    setWorkmanLayout()
	  end
	end

	function usbDeviceCallback(data)
	    if string.match(data["productName"], "ErgoDox EZ") then
	      setKeyboard()
	    end
	end

	usbWatcher = hs.usb.watcher.new(usbDeviceCallback):start()

So at the bottom I create a watcher that gets triggered when a USB device is changed. usbDeviceCallback checks if the device that changed was the ErgoDox keyboard (the change could be that the keyboard was added or removed). That calls setKeyboard(). I think I used to do things with other USB devices as well. setKeyboard checks if the ErgoDox is attached right now. If it is, then set the US layout. If not, go to the Workman Dead layout. 

So now no matter which keyboard is attached, I have the right layout configured. It took a while to get it working the way it is now, but now things just work and its beautiful. I hope that is useful to someone other than just me.