# javascript
A place to test all kind of vanilla javascript features

To check the code, just:  
1.Install Live Server extension in VS Code  
2.Go to any folder and right click on index.html and click "Open with Live Server"

## Tests
We add a package.json because we need the Jest package.
Tests can be run jut typing "npm test"

## Babel and NPM packages
We need Babel to use recent JS features such as imports
1) npm i --save-dev @babel/core @babel/cli @babel/preset-env
2) Create a config file named babel.config.json with some presets
With that we can already do something like "npm test" (using jest library), but if we want that browsers can interpret packages we need to:
a) Add a script to a CDN like (npm i of the packages is not needed) 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
or
b) Use Browsify or Webpack or some other tool to manage packages and compile them into static bundles so browsers can read them
