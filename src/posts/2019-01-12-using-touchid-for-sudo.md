---
title: Using Touch ID for authorizing sudo
date: 2019-01-12T19:37:37+0000
tags:
  - sudo
  - mac
  - touchid
  - tips
---
I use a 2017 MacBook Pro at work. This is easily the best laptop I have ever used. One of the amazing features is Touch ID. Put your finger on the sensor, and you have logged in. Amazing. But it's annoying that things like sudo `wont` use Touch ID instead of typing the password. Well, that's what I thought at first. And then I learned the trick. And then when I upgraded to Mojave, the trick was reset and I couldn't remember how I got it.

Well, now I remember. Turns out it is super easy. Just add one declaration in one file and now every time you type `sudo`, the Touch ID prompt appears. So for future me that tries to get this working again after the next update, here are the steps.

1. Open up the terminal.
2. Navigate to `/private/etc/pam.d`
3. Edit the file **sudo**: `sudo vim sudo`
4. Add one line to the top, right under the comment:

    `auth       sufficient     pam_tid.so`
5. Save the file.

That's it. Next time you try to `sudo` a command, you get the prompt to verify your fingerprint. Yay!