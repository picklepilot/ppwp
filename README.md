## About

Basically, I'm sick of putting all this crap together at the start of each project - as you should be! Use this to your advantage if you'd like. It's just a really barebones Wordpress theme leveraging technologies such as SASS, Gulp and Bower.

Take care to remember that this theme is in early and active development, so things might suck for you at first.

## License
ppwp is released under the terms of the GPL version 3 or (at your option) any later version.

## Changelog
- **0.0.1 8/16/2016 First Commit**
	- Initial build
- **0.0.2 9/12/2016 Added Flexslider 2.0**
	- Added Flexslider in for convenience
	- Updated Gulpfile to uglify and minify added scripts

## Features

- Basic, barebones necesary files for a Wordpress theme
- Packaged with Bootstrap 4 Alpha
- All style sheets and js files are combined into minified single files
- WooCommerce ready

## SASS

Go ahead and customize the theme on top of Bootstrap styles by adding your own custom SCSS to the custom folder `./src/sass/custom/*`

## Installation

- Download the .zip of the project here
- Upload it into your WordPress installation subfolder here: `/wp-content/themes/`
- Login to WordPress
- Go to Appearance &#8594; Themes
- Activate the ppwp theme

## Getting started

### Pre-requisites
- Node.js (URL needed)
- Bower (URL needed)
- Browser Sync (URL needed)

### Set up scripts
- In Terminal, navigate to the theme folder
- Run: `$ npm install` 
- Next run: `$ bower install` 

Licenses & Credits
=
- Bootstrap: http://getbootstrap.com | https://github.com/twbs/bootstrap/blob/master/LICENSE (Code licensed under MIT documentation under CC BY 3.0.)
- jQuery: https://jquery.org | (Code licensed under MIT)
