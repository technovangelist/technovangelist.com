---
path: "/2013/01/19/2013119graphing-with-r/" 
date: "2013-01-19T16:28:26+00:00" 
title: Graphing With R
tags:
  - Charts
  - javascript
  - R
  - Yottaa

---
I took a few days off for Christmas in San Antonio with my parents and my sister. While there, I had the usual tasks for a geek with non-geek relatives: fix computers, fix wifi, fix printers, explain the Internet, explain how stuff works. But in between time spent doing that, and doing family stuff, I learned a bit about [R][1]. R is programming language mostly intended to do statistical programming. I don&#8217;t know much about that, but I wanted a way to make some graphs that are sometimes difficult to make in Excel. 

I think it would be easier to just learn more about Excel, but now I am invested so I am trying to use it as much as possible. Recently at work I added a post to our blog on the impact of JavaScript and concatenating/minifying the code on your website. [You can read the about it here][2] At the end of that post, I added an chart describing the final results.

<div style="width: 700px" class="wp-caption alignnone">
  <img src="https://i2.wp.com/technovangelist.envl.pe/wp-content/uploads/sites/3/2013/01/TestSummary.png?w=1080" alt="JavaScript tests chart built with R" data-recalc-dims="1" />
  
  <p class="wp-caption-text">
    JavaScript tests chart built with R
  </p>
</div>

Creating a chart like this would probably take me 20-30 minutes in Excel. Building it in R would probably take less time if I knew R like I know Excel. Instead it took me a lot longer. But in getting there I discovered a lot of ways I didn&#8217;t like the image. I think Excel is great when you know exactly how you want the final image to appear in the post. I thought I did, but this looks vastly different from that initial version. Tweaking and then having a _very_ repeatable chart within seconds for any dataset is one of **R**&#8216;s biggest strengths for me.

So how did I get here? Well, R is complicated. Luckily a course on [Coursera][3] came up at exactly the right time for me. There is a second course that takes this further that starts next week too. 

But assuming that you know the basics of R and just want to see what I did, here is my R Script for this chart (the csv files I am using are the standard ones you can download after running a test on Yottaa):

body, td {
     
font-family: sans-serif;
     
background-color: white;
     
font-size: 12px;
     
margin: 8px;
  
}

tt, code, pre {
     
font-family: &#8216;DejaVu Sans Mono&#8217;, &#8216;Droid Sans Mono&#8217;, &#8216;Lucida Console&#8217;, Consolas, Monaco, monospace;
  
}

h1 {
     
font-size:2.2em;
  
}

h2 {
     
font-size:1.8em;
  
}

h3 {
     
font-size:1.4em;
  
}

h4 {
     
font-size:1.0em;
  
}

h5 {
     
font-size:0.9em;
  
}

h6 {
     
font-size:0.8em;
  
}

a:visited {
     
color: rgb(50%, 0%, 50%);
  
}

pre {
     
margin-top: 0;
     
max-width: 95%;
     
border: 1px solid #ccc;
     
white-space: pre-wrap;
  
}

pre code {
     
display: block; padding: 0.5em;
  
}

code.r, code.cpp {
     
background-color: #F8F8F8;
  
}

table, td, th {
    
border: none;
  
}

blockquote {
     
color:#666666;
     
margin:0;
     
padding-left: 1em;
     
border-left: 0.5em #EEE solid;
  
}

hr {
     
height: 0px;
     
border-bottom: none;
     
border-top-width: thin;
     
border-top-style: dotted;
     
border-top-color: #999999;
  
}

@media print {
     
* {
        
background: transparent !important;
        
color: black !important;
        
filter:none !important;
        
-ms-filter: none !important;
     
}

body {
        
font-size:12pt;
        
max-width:100%;
     
}

a, a:visited {
        
text-decoration: underline;
     
}

hr {
        
visibility: hidden;
        
page-break-before: always;
     
}

pre, blockquote {
        
padding-right: 1em;
        
page-break-inside: avoid;
     
}

tr, img {
        
page-break-inside: avoid;
     
}

img {
        
max-width: 100% !important;
     
}

@page :left {
        
margin: 15mm 20mm 15mm 10mm;
     
}

@page :right {
        
margin: 15mm 10mm 15mm 20mm;
     
}

p, h2, h3 {
        
orphans: 3; widows: 3;
     
}

h2, h3 {
        
page-break-after: avoid;
     
}
  
}

<!-- Styles for R syntax highlighter -->

pre .operator,
     
pre .paren {
       
color: rgb(104, 118, 135)
     
}

pre .literal {
       
color: rgb(88, 72, 246)
     
}

pre .number {
       
color: rgb(0, 0, 205);
     
}

pre .comment {
       
color: rgb(76, 136, 107);
     
}

pre .keyword {
       
color: rgb(0, 0, 255);
     
}

pre .identifier {
       
color: rgb(0, 0, 0);
     
}

pre .string {
       
color: rgb(3, 106, 7);
     
}

<!-- R syntax highlighter -->

var hljs=new function(){function m(p){return p.replace(/&/gm,&#8221;&&#8221;).replace(/</gm,"<")}function f(r,q,p){return RegExp(q,"m"+(r.cI?"i":"")+(p?"g":""))}function b(r){for(var p=0;p<r.childNodes.length;p++){var q=r.childNodes[p];if(q.nodeName=="CODE"){return q}if(!(q.nodeType==3&&q.nodeValue.match(/s+/))){break}}}function h(t,s){var p="";for(var r=0;r<t.childNodes.length;r++){if(t.childNodes[r].nodeType==3){var q=t.childNodes[r].nodeValue;if(s){q=q.replace(/n/g,"")}p+=q}else{if(t.childNodes[r].nodeName=="BR"){p+="n"}else{p+=h(t.childNodes[r])}}}if(/MSIE [678]/.test(navigator.userAgent)){p=p.replace(/r/g,"n")}return p}function a(s){var r=s.className.split(/s+/);r=r.concat(s.parentNode.className.split(/s+/));for(var q=0;q<r.length;q++){var p=r[q].replace(/^language-/,"");if(e[p]){return p}}}function c(q){var p=[];(function(s,t){for(var r=0;r<s.childNodes.length;r++){if(s.childNodes[r].nodeType==3){t+=s.childNodes[r].nodeValue.length}else{if(s.childNodes[r].nodeName=="BR"){t+=1}else{if(s.childNodes[r].nodeType==1){p.push({event:"start",offset:t,node:s.childNodes[r]});t=arguments.callee(s.childNodes[r],t);p.push({event:"stop",offset:t,node:s.childNodes[r]})}}}}return t})(q,0);return p}function k(y,w,x){var q=0;var z="";var s=[];function u(){if(y.length&&w.length){if(y[0].offset!=w[0].offset){return(y[0].offset<w[0].offset)?y:w}else{return w[0].event=="start"?y:w}}else{return y.length?y:w}}function t(D){var A="<"+D.nodeName.toLowerCase();for(var B=0;B&#8221;}while(y.length||w.length){var v=u().splice(0,1)[0];z+=m(x.substr(q,v.offset-q));q=v.offset;if(v.event==&#8221;start&#8221;){z+=t(v.node);s.push(v.node)}else{if(v.event==&#8221;stop&#8221;){var p,r=s.length;do{r&#8211;;p=s[r];z+=(&#8220;&#8221;)}while(p!=v.node);s.splice(r,1);while(r<s.length){z+=t(s[r]);r++}}}}return z+m(x.substr(q))}function j(){function q(x,y,v){if(x.compiled){return}var u;var s=[];if(x.k){x.lR=f(y,x.l||hljs.IR,true);for(var w in x.k){if(!x.k.hasOwnProperty(w)){continue}if(x.k[w] instanceof Object){u=x.k[w]}else{u=x.k;w="keyword"}for(var r in u){if(!u.hasOwnProperty(r)){continue}x.k[r]=[w,u[r]];s.push(r)}}}if(!v){if(x.bWK){x.b="\b("+s.join("|")+")\s"}x.bR=f(y,x.b?x.b:"\B|\b");if(!x.e&&!x.eW){x.e="\B|\b"}if(x.e){x.eR=f(y,x.e)}}if(x.i){x.iR=f(y,x.i)}if(x.r===undefined){x.r=1}if(!x.c){x.c=[]}x.compiled=true;for(var t=0;t<x.c.length;t++){if(x.c[t]=="self"){x.c[t]=x}q(x.c[t],y,false)}if(x.starts){q(x.starts,y,false)}}for(var p in e){if(!e.hasOwnProperty(p)){continue}q(e[p].dM,e[p],true)}}function d(B,C){if(!j.called){j();j.called=true}function q(r,M){for(var L=0;L<M.c.length;L++){if((M.c[L].bR.exec(r)||[null])[0]==r){return M.c[L]}}}function v(L,r){if(D[L].e&&D[L].eR.test(r)){return 1}if(D[L].eW){var M=v(L-1,r);return M?M+1:0}return 0}function w(r,L){return L.i&&L.iR.test(r)}function K(N,O){var M=[];for(var L=0;L<N.c.length;L++){M.push(N.c[L].b)}var r=D.length-1;do{if(D[r].e){M.push(D[r].e)}r&#8211;}while(D[r+1].eW);if(N.i){M.push(N.i)}return f(O,M.join("|"),true)}function p(M,L){var N=D[D.length-1];if(!N.t){N.t=K(N,E)}N.t.lastIndex=L;var r=N.t.exec(M);return r?[M.substr(L,r.index-L),r[0],false]:[M.substr(L),"",true]}function z(N,r){var L=E.cI?r[0].toLowerCase():r[0];var M=N.k[L];if(M&&M instanceof Array){return M}return false}function F(L,P){L=m(L);if(!P.k){return L}var r="";var O=0;P.lR.lastIndex=0;var M=P.lR.exec(L);while(M){r+=L.substr(O,M.index-O);var N=z(P,M);if(N){x+=N[1];r+='<span class="'+N[0]+'">&#8216;+M[0]+&#8221;</span>&#8220;}else{r+=M[0]}O=P.lR.lastIndex;M=P.lR.exec(L)}return r+L.substr(O,L.length-O)}function J(L,M){if(M.sL&&e[M.sL]){var r=d(M.sL,L);x+=r.keyword_count;return r.value}else{return F(L,M)}}function I(M,r){var L=M.cN?&#8217;<span class="'+M.cN+'">&#8216;:&#8221;&#8221;;if(M.rB){y+=L;M.buffer=&#8221;&#8221;}else{if(M.eB){y+=m(r)+L;M.buffer=&#8221;&#8221;}else{y+=L;M.buffer=r}}D.push(M);A+=M.r}function G(N,M,Q){var R=D[D.length-1];if(Q){y+=J(R.buffer+N,R);return false}var P=q(M,R);if(P){y+=J(R.buffer+N,R);I(P,M);return P.rB}var L=v(D.length-1,M);if(L){var O=R.cN?&#8221;</span>&#8220;:&#8221;&#8221;;if(R.rE){y+=J(R.buffer+N,R)+O}else{if(R.eE){y+=J(R.buffer+N,R)+O+m(M)}else{y+=J(R.buffer+N+M,R)+O}}while(L>1){O=D[D.length-2].cN?&#8221;</span>&#8220;:&#8221;&#8221;;y+=O;L&#8211;;D.length&#8211;}var r=D[D.length-1];D.length&#8211;;D[D.length-1].buffer=&#8221;&#8221;;if(r.starts){I(r.starts,&#8221;&#8221;)}return R.rE}if(w(M,R)){throw&#8221;Illegal&#8221;}}var E=e[B];var D=[E.dM];var A=0;var x=0;var y=&#8221;&#8221;;try{var s,u=0;E.dM.buffer=&#8221;&#8221;;do{s=p(C,u);var t=G(s[0],s[1],s[2]);u+=s[0].length;if(!t){u+=s[1].length}}while(!s[2]);if(D.length>1){throw&#8221;Illegal&#8221;}return{r:A,keyword\_count:x,value:y}}catch(H){if(H==&#8221;Illegal&#8221;){return{r:0,keyword\_count:0,value:m(C)}}else{throw H}}}function g(t){var p={keyword\_count:0,r:0,value:m(t)};var r=p;for(var q in e){if(!e.hasOwnProperty(q)){continue}var s=d(q,t);s.language=q;if(s.keyword\_count+s.r>r.keyword\_count+r.r){r=s}if(s.keyword\_count+s.r>p.keyword\_count+p.r){r=p;p=s}}if(r.language){p.second\_best=r}return p}function i(r,q,p){if(q){r=r.replace(/^((]+>|t)+)/gm,function(t,w,v,u){return w.replace(/t/g,q)})}if(p){r=r.replace(/n/g,&#8221;  
&#8220;)}return r}function n(t,w,r){var x=h(t,r);var v=a(t);var y,s;if(v){y=d(v,x)}else{return}var q=c(t);if(q.length){s=document.createElement(&#8220;pre&#8221;);s.innerHTML=y.value;y.value=k(q,c(s),x)}y.value=i(y.value,w,r);var u=t.className;if(!u.match(&#8220;(\s|^)(language-)?&#8221;+v+&#8221;(\s|$)&#8221;)){u=u?(u+&#8221; &#8220;+v):v}if(/MSIE [678]/.test(navigator.userAgent)&&t.tagName==&#8221;CODE&#8221;&&t.parentNode.tagName==&#8221;PRE&#8221;){s=t.parentNode;var p=document.createElement(&#8220;div&#8221;);p.innerHTML=&#8221;

    "+y.value+"

&#8220;;t=p.firstChild.firstChild;p.firstChild.cN=s.cN;s.parentNode.replaceChild(p.firstChild,s)}else{t.innerHTML=y.value}t.className=u;t.result={language:v,kw:y.keyword\_count,re:y.r};if(y.second\_best){t.second\_best={language:y.second\_best.language,kw:y.second\_best.keyword\_count,re:y.second\_best.r}}}function o(){if(o.called){return}o.called=true;var r=document.getElementsByTagName(&#8220;pre&#8221;);for(var p=0;p<r.length;p++){var q=b(r\[p]);if(q){n(q,hljs.tabReplace)}}}function l(){if(window.addEventListener){window.addEventListener("DOMContentLoaded",o,false);window.addEventListener("load",o,false)}else{if(window.attachEvent){window.attachEvent("onload",o)}else{window.onload=o}}}var e={};this.LANGUAGES=e;this.highlight=d;this.highlightAuto=g;this.fixMarkup=i;this.highlightBlock=n;this.initHighlighting=o;this.initHighlightingOnLoad=l;this.IR="[a-zA-Z\]\[a-zA-Z0-9\_\]\*";this.UIR="\[a-zA-Z\_\]\[a-zA-Z0-9\_\]\*";this.NR="\b\d+(\.\d+)?";this.CNR="\b(0\[xX\]\[a-fA-F0-9\]+|(\d+(\.\d\*)?|\.\d+)(\[eE\]\[-+\]?\d+)?)";this.BNR="\b(0b\[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\*=|\+|\+=|,|\.|-|-=|/|/=|:|;|<|<<|<<=||>=|>>|>>=|>>>|>>>=|\?|\[|\{|\(|\^|\^=|\||\|=|\|\||~&#8221;;this.ER=&#8221;(?![\s\S])&#8221;;this.BE={b:&#8221;\\.&#8221;,r:0};this.ASM={cN:&#8221;string&#8221;,b:&#8221;&#8216;&#8221;,e:&#8221;&#8216;&#8221;,i:&#8221;\n&#8221;,c:[this.BE],r:0};this.QSM={cN:&#8221;string&#8221;,b:'&#8221;&#8216;,e:'&#8221;&#8216;,i:&#8221;\n&#8221;,c:[this.BE],r:0};this.CLCM={cN:&#8221;comment&#8221;,b:&#8221;//&#8221;,e:&#8221;$&#8221;};this.CBLCLM={cN:&#8221;comment&#8221;,b:&#8221;/\*&#8221;,e:&#8221;\*/&#8221;};this.HCM={cN:&#8221;comment&#8221;,b:&#8221;#&#8221;,e:&#8221;$&#8221;};this.NM={cN:&#8221;number&#8221;,b:this.NR,r:0};this.CNM={cN:&#8221;number&#8221;,b:this.CNR,r:0};this.BNM={cN:&#8221;number&#8221;,b:this.BNR,r:0};this.inherit=function(r,s){var p={};for(var q in r){p[q]=r[q]}if(s){for(var q in s){p[q]=s[q]}}return p}}();hljs.LANGUAGES.cpp=function(){var a={keyword:{&#8220;false&#8221;:1,&#8221;int&#8221;:1,&#8221;float&#8221;:1,&#8221;while&#8221;:1,&#8221;private&#8221;:1,&#8221;char&#8221;:1,&#8221;catch&#8221;:1,&#8221;export&#8221;:1,virtual:1,operator:2,sizeof:2,dynamic\_cast:2,typedef:2,const\_cast:2,&#8221;const&#8221;:1,struct:1,&#8221;for&#8221;:1,static\_cast:2,union:1,namespace:1,unsigned:1,&#8221;long&#8221;:1,&#8221;throw&#8221;:1,&#8221;volatile&#8221;:2,&#8221;static&#8221;:1,&#8221;protected&#8221;:1,bool:1,template:1,mutable:1,&#8221;if&#8221;:1,&#8221;public&#8221;:1,friend:2,&#8221;do&#8221;:1,&#8221;return&#8221;:1,&#8221;goto&#8221;:1,auto:1,&#8221;void&#8221;:2,&#8221;enum&#8221;:1,&#8221;else&#8221;:1,&#8221;break&#8221;:1,&#8221;new&#8221;:1,extern:1,using:1,&#8221;true&#8221;:1,&#8221;class&#8221;:1,asm:1,&#8221;case&#8221;:1,typeid:1,&#8221;short&#8221;:1,reinterpret\_cast:2,&#8221;default&#8221;:1,&#8221;double&#8221;:1,register:1,explicit:1,signed:1,typename:1,&#8221;try&#8221;:1,&#8221;this&#8221;:1,&#8221;switch&#8221;:1,&#8221;continue&#8221;:1,wchar\_t:1,inline:1,&#8221;delete&#8221;:1,alignof:1,char16\_t:1,char32\_t:1,constexpr:1,decltype:1,noexcept:1,nullptr:1,static\_assert:1,thread\_local:1,restrict:1,\_Bool:1,complex:1},built\_in:{std:1,string:1,cin:1,cout:1,cerr:1,clog:1,stringstream:1,istringstream:1,ostringstream:1,auto\_ptr:1,deque:1,list:1,queue:1,stack:1,vector:1,map:1,set:1,bitset:1,multiset:1,multimap:1,unordered\_set:1,unordered\_map:1,unordered\_multiset:1,unordered\_multimap:1,array:1,shared\_ptr:1}};return{dM:{k:a,i:&#8221;</",c:[hljs.CLCM,hljs.CBLCLM,hljs.QSM,{cN:"string",b:"'\\?.",e:"'",i:"."},{cN:"number",b:"\b(\d+(\.\d\*)?|\.\d+)(u|U|l|L|ul|UL|f|F)"},hljs.CNM,{cN:"preprocessor",b:"#",e:"$"},{cN:"stl\_container",b:"\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered\_map|unordered\_set|unordered\_multiset|unordered\_multimap|array)\s\*&#8221;,k:a,r:10,c:[&#8220;self&#8221;]}]}}}();hljs.LANGUAGES.r={dM:{c:[hljs.HCM,{cN:&#8221;number&#8221;,b:&#8221;\b0[xX\]\[0-9a-fA-F\]+\[Li]?\b&#8221;,e:hljs.IMMEDIATE\_RE,r:0},{cN:&#8221;number&#8221;,b:&#8221;\b\d+(?:[eE\]\[+\-\]?\d\*)?L\b&#8221;,e:hljs.IMMEDIATE\_RE,r:0},{cN:&#8221;number&#8221;,b:&#8221;\b\d+\.(?!\d)(?:i\b)?&#8221;,e:hljs.IMMEDIATE\_RE,r:1},{cN:&#8221;number&#8221;,b:&#8221;\b\d+(?:\.\d\*)?(?:\[eE\]\[+\-\]?\d\*)?i?\b&#8221;,e:hljs.IMMEDIATE\_RE,r:0},{cN:&#8221;number&#8221;,b:&#8221;\.\d+(?:\[eE\]\[+\-\]?\d\*)?i?\b&#8221;,e:hljs.IMMEDIATE\_RE,r:1},{cN:&#8221;keyword&#8221;,b:&#8221;(?:tryCatch|library|setGeneric|setGroupGeneric)\b&#8221;,e:hljs.IMMEDIATE\_RE,r:10},{cN:&#8221;keyword&#8221;,b:&#8221;\.\.\.&#8221;,e:hljs.IMMEDIATE\_RE,r:10},{cN:&#8221;keyword&#8221;,b:&#8221;\.\.\d+(?!\[\w.])&#8221;,e:hljs.IMMEDIATE\_RE,r:10},{cN:&#8221;keyword&#8221;,b:&#8221;\b(?:function)&#8221;,e:hljs.IMMEDIATE\_RE,r:2},{cN:&#8221;keyword&#8221;,b:&#8221;(?:if|in|break|next|repeat|else|for|return|switch|while|try|stop|warning|require|attach|detach|source|setMethod|setClass)\b&#8221;,e:hljs.IMMEDIATE\_RE,r:1},{cN:&#8221;literal&#8221;,b:&#8221;(?:NA|NA\_integer\_|NA\_real\_|NA\_character\_|NA\_complex\_)\b&#8221;,e:hljs.IMMEDIATE\_RE,r:10},{cN:&#8221;literal&#8221;,b:&#8221;(?:NULL|TRUE|FALSE|T|F|Inf|NaN)\b&#8221;,e:hljs.IMMEDIATE\_RE,r:1},{cN:&#8221;identifier&#8221;,b:&#8221;[a-zA-Z.\]\[a-zA-Z0-9.\_\]*\b&#8221;,e:hljs.IMMEDIATE\_RE,r:0},{cN:&#8221;operator&#8221;,b:&#8221;|=||<|!|&|\||\$|:",e:hljs.IMMEDIATE\_RE,r:0},{cN:"operator",b:"%",e:"%",i:"\n",r:1},{cN:"identifier",b:"\`",e:"\`",r:0},{cN:"string",b:'"',e:'"',c:[hljs.BE],r:0},{cN:"string",b:"'",e:"'",c:[hljs.BE],r:0},{cN:"paren",b:"[[({\])}]",e:hljs.IMMEDIATE\_RE,r:0}]}};
  
hljs.initHighlightingOnLoad();

<pre><code class="r">setwd("~/Downloads/")
library(ggplot2)
library(plyr)
js1 &lt;- read.csv("Lat-JSTest-Jan14-Test1.csv")
js2 &lt;- read.csv("Lat-JSTest-Jan14-Test2.csv")
js3 &lt;- read.csv("Lat-JSTest-Jan14-Test3.csv")
js4 &lt;- read.csv("Lat-JSTest-Jan14-Test4.csv")
js5 &lt;- read.csv("Lat-JSTest-Jan14-Test5.csv")
alljs &lt;- rbind(js1,js2,js3,js4,js5)
regions &lt;- data.frame(Location=c("New York (NYC)", 
                                 "Chicago (ORD)",
                                 "Dallas (DFW)",
                                 "Washington DC (DCA)",
                                 "San Francisco (SFO)", 
                                 "Oregon (PDX)",
                                 "Amsterdam (AMS)",
                                 "Berlin (BER)",
                                 "Dublin (DUB)",
                                 "London (LDN)",
                                 "Tokyo (NRT)",
                                 "Hong Kong (HK)",
                                 "Sydney (SYD)"),
                      Region=c(rep("US",6),rep("Europe",4),rep("AsiaPac",3)))
alljsr &lt;- merge(alljs,regions,by.x="Location")
mt &lt;- ddply(alljsr,
            "Monitor.name", 
            summarise, 
            mt2i=median(time.to.interact),
            sd=sd(time.to.interact),
            se=sd(time.to.interact)/sqrt(length(time.to.interact))
            )

p &lt;- ggplot(mt,aes(x=factor(Monitor.name),y=mt2i,fill=Monitor.name))
p.plot &lt;- geom_bar(stat="identity")
p.error &lt;- geom_errorbar(aes(ymin=mt2i-se,ymax=mt2i+se),width=0.10)
#p.error &lt;- geom_errorbar(width=0.25)
p.coord &lt;- coord_cartesian(ylim=c(1000,6000))
p.labs &lt;- labs(color="black", title="Javascript Tests", y="Time to Interact", y="" )
p.theme &lt;- theme(legend.position="none",
                 panel.grid.major=element_line(color="black",size=.3,linetype="dotted"),
                 #panel.grid.major.x=element_line(size=.6),
                 panel.grid.minor=element_line(color="black",size=.1,linetype="dotted"),
                 panel.grid.major.x=element_blank(),
                 panel.border=element_rect(color="black", fill=NA, size=.2),
                 panel.background=element_rect(fill="white")

)
p.sfill &lt;- scale_x_discrete(name="Tests",
                               breaks=c("Lat-JSTest-Jan14-Test1",
                                        "Lat-JSTest-Jan14-Test2",
                                        "Lat-JSTest-Jan14-Test3",
                                        "Lat-JSTest-Jan14-Test4a",
                                        "Lat-JSTest-Jan14-Test5"),
                               labels=c("1) Initial Test",
                                        "2) Added JS",
                                        "3) Optimizednexcept JS",
                                        "4) Optimizednwith ReducenJavaScript Requests",
                                        "5) Optimizednwith ReducenJS Requestsn& JS Minify"))
p.text &lt;- geom_text(size=8,aes(x=Monitor.name, y=mt2i-500, label=mt2i), color="white")


p + p.plot + p.labs + p.theme + p.coord + p.sfill+p.error +p.text 
</code></pre>

I am having a lot of fun with R so far and I look forward to seeing what I come up with over the next few weeks. I have a series of posts coming up on the Yottaa Blog and plenty of opportunity to post more charts made with R.

 [1]: http://www.r-project.org/
 [2]: http://www.yottaa.com/blog/bid/259514/How-Does-Reducing-JavaScript-Requests-Minifying-JavaScript-Impact-Site-Performance
 [3]: http://www.coursera.org