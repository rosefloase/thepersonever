# thepersonever.net site files! :D 
this repo contains all files for my personal website: [thepersonever.net](https://thepersonever.net/)!  
thepersonever is a hand-coded site created in late 2022, as a residency for me to do really whatever i want. it's been going strong (with a few breaks here and there) ever since i created it! this site focuses on having many pages (some of which are harder to find than others), and for each and every page to feel unique  

thepersonever itself is served from [nekoweb](https://nekoweb.org), and thus all files contained within this repo use no serverside scripting  
additionally, this repo is distributed under the [(C+CGL)](tpe/c-cgl-1-1.txt) licence!

## repo mirrors
[github](https://github.com/rosefloase/thepersonever) - pushes to nekoweb  
[tangled](https://tangled.org/@thepersonever.net/thepersonever) - an atproto-based git network, which lets users host their repos on whatever hardware they want! (tangled also provides their own git server) 

## !!BEFORE YOU DIG!!
this site has a lot of secrets and other stuff that is better experienced without looking at a directory of the entire site... i'm not your mom though you don't HAVE to explore the site before digging through the files

## running

this repo only contains the site files, and does not have any server code present. this means you gotta provide your own http daemon!

### windows

i'd recommend [xampp](https://www.apachefriends.org/) for any windows user who wants to run an http server locally! just replace the contents of the ``htdocs`` folder with the contents of the ``tpe`` folder, or point to the tpe folder in the configuration file :o  
(i'm too lazy to make a template config file myself mess around with the file until you get it or look it up)  
((also make sure to get rewriteengine html extention redirections working. many links will break without it))

### linux

i personally use nginx for hosting locally! i'll be putting my config in this repo, but you can use any http daemon you want :p
just make sure to add rewriteengine support for .html documents to be read if no extension is provided! and to set the tpe directory as the website root
