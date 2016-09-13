# tedxunc

# TEDxUNC Spring 2017
The source of the website for TEDxUNC, held on February 4, 2016.

## Setup
Install some stuff:
```
gem install sass
brew install node
npm install
```
Optionally, install gulp cli tools.
```
npm install --global gulp-cli
```

## Development
This website uses [gulp](http://gulpjs.com) as a build tool to compile assets and deploy the site. Here's the stuff you need to know:
```
gulp compile	# Compiles the site into /out
gulp watch		# Compiles the site and starts a server (--port defaults to 8000)
```

There are also other commands if you want to compile individual types of assets:
```
gulp jade		# Compiles jade/*.jade and puts them in out/ as HTML files
gulp scss		# Compiles and minifies scss/*.scss and puts them in out/ as CSS files
gulp js			# Concats all files in js/**/* and puts it in out/main.js
gulp images 	# Compresses img/**/* and puts everything in out/img
gulp static		# Moves static/**/* to out/
```
