**This is no longer the theme powering [AdrianArtiles.com](http://AdrianArtiles.com)**  
# **The theme currently powering [AdrianArtiles.com](http://AdrianArtiles.com) is [MediumFox](https://github.com/sevenadrian/MediumFox)** #

# foxslide #

This is a theme built for [Octopress](http://Octopress.org) that is a work in progress with inspirations from all over the web. Built on top of [bootstrap](http://twitter.github.com/bootstrap/) and [html5 boilerplate](http://html5boilerplate.com/), and has SEO considerations along with instagram and twitter widgets out of the box.

![screenshot](/screenshot.png)

## Installation ##

````
$ cd yourOctopress
$ git submodule add https://github.com/sevenadrian/foxslide .themes/foxslide
$ git submodule update --init
$ rake install['foxslide']
$ rake generate
````

### Grab the latest updates ###

````
$ cd yourOctopress
$ git submodule update
# regenerate, make changes, etc...
````

### Alternate installation without git submodule ###
````
$ cd yourOctopress
$ git clone https://github.com/sevenadrian/foxslide .themes/foxslide
$ rake install['foxslide']
$ rake generate
````

## Pull-Requests Welcomed! ##

This is a first draft and can definitely be improved on. Pull requests are very much welcomed and desired!
