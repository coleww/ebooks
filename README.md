ebooks
----------------

node module to quickly scaffold ebooks style twitter bots

[![NPM](https://nodei.co/npm/ebooks.png)](https://nodei.co/npm/ebooks/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

### EXAMPLE

```
var ebooks = require('ebooks')
var fs = require('fs')
var config = require('./config') // just a file that module.exports a JavaScript object containing twitter API keys
var lines = fs.readFileSync('./seed.txt').toString().split("\n")
ebooks(lines, config)
```


### A ONE LINE VERSION!

`require('ebooks')(require('fs').readFileSync('./seed.txt').toString().split('\n'), require('./config'))`

### API

`ebooks(lines, twitterConfig, n, callback)`

- lines: An array of strings to seed the markov chain. Might be stored in a newline separated file, or fethed from somewhere on the internet.
- twitterConfig: a JS object containing twitter API keys formatted for the [twit](https://github.com/ttezel/twit) module
- n: optional, defaults to 2. ngram level for the markov chain. lower=>more nonsense, higher=> more sense
- callback: optional, a callback for generating a tweet with the markov chain. Is passed 1 argument which is a [markov chain object](https://github.com/substack/node-markov). Uses a sensible default if callback is not passed.
