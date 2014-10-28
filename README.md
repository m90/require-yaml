# require-yaml

[![Build Status](https://travis-ci.org/m90/require-yaml.svg?branch=master)](https://travis-ci.org/m90/require-yaml)

> a transform for loading YAML files in requirejs, using [js-yaml][1]

## Install the plugin and its dependencies using bower
```sh
$ bower install require-yaml --save
```
If you prefer a manual install, make sure to satisfy the `js-yaml` and `text` dependencies.

## Simple usage
First, make sure the module names `js-yaml` and `text` resolve to the proper locations (both are installed alongside the loader when you are using bower):
```js
requirejs.config({
    paths : {
        yaml : './bower_components/require-yaml/yaml',
        js-yaml : './bower_components/js-yaml/dist/js-yaml',
        text : './bower_components/requirejs-text/text'
    }
});
```

Now you're ready to `require` YAML as plain JavaScript objects:
```js
require('yaml!some/folder/somefile.yaml', function(data){
    console.log(data); // => logs the transformed object
});
```

For more information see the [js-yaml repository][1].

## Build time
On build time you can simply use `stubModules` in your build config to get rid of the parser in the file you ship to production:
```js
({
    stubModules: ['text','js-yaml','yaml']
})
```

##License
MIT © [Frederik Ring](http://www.frederikring.com)

[1]: https://github.com/nodeca/js-yaml