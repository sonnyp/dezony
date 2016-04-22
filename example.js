;(function () {
  'use strict'

  var dezony

  // Node.js, browserify, ...
  if (typeof module !== 'undefined' && module.exports) {
    dezony = require('./index') // require('dezony') for you
  // browsers
  } else {
    dezony = window.dezony
  }

  function bad (cb) { // eslint-disable-line
    cb()
    cb()
  }

  // let's dezony
  function good (cb) {
    cb = dezony(cb)
    cb()
    cb()
  }

  var i = 0

  good(function () {
    i++
  })

  console.log(i) // 1

  // or

  bad(dezony(function () {
    console.log('called once')
  }))
}())
