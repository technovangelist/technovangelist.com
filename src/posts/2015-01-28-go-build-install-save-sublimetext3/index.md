---
path: "/2015/01/28/go-build-install-save-sublimetext3/" 
date: "2015-01-28T14:32:07+00:00" 
title: Go build and install on save in SublimeText3
---
Update: Turns out every new Go developer makes this mistake. I realized the err of my ways with a week of writing this. When you just accept the Go way, everything gets better. Ignore my stupidity below.

Recently I have been dabbling more and more with [go][1]. And I write my go apps in [SublimeText3][2]. Soon after starting this I found the awesome [SublimeGo][3] plugin. So without knowing much, this makes life a lot easier. What I especially enjoy is the ability to run an argument on save. So every time I save a go file, it can do something. At first this ran a `build . errors &amp;&amp; go vet`. But then I wanted a bit more. I wanted it run that, then if successful build the app and move the compiled app to my bin directory.

Unfortunately, the one sucky part of golang is the opinionated way it wants you to organize your filesystem. If you want to keep all your projects together, then your bin directory is going to be required to be in a certain place. The build command claims to allow an output directory with `-o` but that doesn’t actually work the way it’s documented.

But I managed to find a workaroud and thought I would share. I just build to the current directory then move the file that has the same name as the current directory to my `~/bin` which is already in my path. Its not perfect since a file briefly appears in my ST sidebar, but it works.

Here is my full GoSublime.sublime-settings file:

<pre class="lang:default decode:true ">{
	"shell": ["/bin/zsh", "--login", "-c", "$CMD"],
	"on_save": [{
    "cmd": "gs9o_open", "args": {
        "run": ["sh", "if go build . errors && go vet; then go build -o ~/bin/`basename \"$PWD\"` .;fi;"],
        "focus_view": false
		}
	}]
}</pre>

&nbsp;

&nbsp;

&nbsp;

 [1]: http://golang.org
 [2]: http://www.sublimetext.com/3
 [3]: https://github.com/DisposaBoy/GoSublime