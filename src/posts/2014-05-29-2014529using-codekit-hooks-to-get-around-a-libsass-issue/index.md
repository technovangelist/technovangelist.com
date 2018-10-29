---
path: "/2014/05/29/2014529using-codekit-hooks-to-get-around-a-libsass-issue/" 
date: "2014-05-29T11:54:46+00:00" 
title: Using Codekit Hooks To Get Around A Libsass Issue
---
Recently, I ran into a problem with [libsass][1] and loud comments. As some of you know I am working on building WordPress themes. At its bare minimum, a theme has a stylesheet with a comment at the top and a functions php file. I am using SCSS for styles and libsass to compile it. 

While libsass does almost everything the regular sass command does, there are some things that are missing. [Loud comments are one of the things that are broken][2] right now.

I happen to use [Codekit][3] as well. Codekit watches a directory and then does what it needs to do to result in nice clean code. If there is anything Codekit doesn&#8217;t know about, you can run an extra command using a hook. 

So I have Codekit take a style.scss file and compile it to style.css in the same subdirectory. Then I have a hook that watches for style.scss and runs the following shell script:

    cat source/scss/template_about.scss source/style.css >style.css
    

This super simple script concatenates template_about.scss and style.css into a single new file. Note that the new file is in a new location. When I had it adding the text to the same file, Codekit looped forever.

The result of this is I get a SASS compile far faster than what the standard command provides and I automatically get a file that works for WordPress. Woohoo!!!

 [1]: http://libsass.org/
 [2]: https://github.com/hcatlin/libsass/issues/348
 [3]: https://incident57.com/codekit/