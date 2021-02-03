<h1 align="center">black n white dotfiles</h1>

![img](https://i.imgur.com/EeF3Ezo.png)

![img](https://i.imgur.com/BGK3wSG.png)

![img](https://i.imgur.com/2XibV8I.png)

![img](https://i.imgur.com/jQKF7rg.png)

![img](https://i.imgur.com/b6IMN5t.png)

![img](https://i.imgur.com/p9rvcU3.png)

![img](https://i.imgur.com/Crjt1gJ.png)

![img](https://i.imgur.com/V72wkYj.png)


## Use BetterDiscord and Spicetify at your own risk, these are violations of their terms of services


These dotfiles might work out of a box on Manjaro i3 community edition.  
Also this is like my home folder so everything I have here is in my home folder


## Programs I use

```BetterDiscord, Spicetify, Xcursor, Nautilus, cava, rofi, Polybar, i3-gaps, i3-scrot, picom-git, neofetch, code-oss, gtk-3.0, eye of gnome, tty-clock, powerline```  
and a lot of others... you can see them in i3 config tho


## VS Code and IntelliJ themes

[VS Code Color Theme](https://marketplace.visualstudio.com/items?itemName=Jaakko.black)  
[VS Code Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)  
[IntelliJ Idea Theme](https://plugins.jetbrains.com/plugin/14059-darcula-pitch-black)


## Some additional install steps

If you want the Nautilus theme to be running you will have to build it on your own from folder themes/phocus.  
You have to get the files from [this repo](https://github.com/DarkReaper231/phocus) as I only provided modified build files in this repo. It is a fork as the creator will be doing some edits that will get rid of this black theme.

If you are planning to use the grub theme DO NOT COPY the whole config. The whole config is in my repo just for REFERENCE. Instead copy only the part starting with ```# --> This part creates the grub look and must be recopied into grub.cfg after every grub update``` and ending with ```# End of the grub look <--```


## Steps you should do after installing

1. Get openwheathermap.org API and modify weather.py in polybar  
2. Also polybar might not work for you out of a box, make sure the screen output is set to your current one  
3. Read through the config files, because something might be different for you  
4. Make sure you have fonts Inconsolata, Dejavu Sans Mono, TerminessTTF Mono, MonacoB  


## My website repo

[Here](https://github.com/DarkReaper231/webdevprojects)

## Credits

[Vista1nik](https://www.reddit.com/user/Vista1nik/) - gap spacing and picom config  
[snickerton](https://www.reddit.com/user/snickerton/) - modules of polybar  
[phisch90](https://www.reddit.com/user/phisch90/) - gtk theme called phocus  
