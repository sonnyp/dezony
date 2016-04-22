dezony
======

[![Build Status](https://img.shields.io/travis/sonnyp/dezony/master.svg?style=flat-square)](https://travis-ci.org/sonnyp/dezony/branches)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Run a function once.

# Getting started


`npm install dezony`

----

```javascript
var dezony = require('dezony');
```

or

```xml
<script src="node_modules/dezony/index.js"></script>
```
```javascript
var dezony = window.dezony
```

# Usage

```js
// here is a an example of a zony function
// calls back multiple time
function zony (cb) {
  cb()
  cb()
}

delay(cb) // release zony

zony(dezony(function () {
  console.log('called once')
}))
```

# Example

See [example.js](https://github.com/sonnyp/dezony/blob/master/example.js)

# Benchmark

See [benchmark](https://github.com/sonnyp/dezony/tree/master/benchmark)

# Test

```
npm install standard
npm test
```
