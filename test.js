'use strict'

var dezony = require('./index')
var assert = require('assert')

function zony (cb) {
  process.nextTick(function () {
    cb()
    cb()
  })
}

var zafe = dezony(zony)

var called = false
zafe(function () {
  called = true
})
assert.equal(called, false)

setTimeout(function () {
  assert.equal(called, true)
})

var i = 0
zony(dezony(function () {
  i++
}))
setTimeout(function () {
  assert.equal(i, 1)
})
