;(function () {
  'use strict'

  function dezony (fn) {
    var once = function () {
      if (once.called) return
      once.called = true
      fn.apply(this, arguments)
    }
    once.called = false
    return once
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = dezony
  } else {
    window.dezony = dezony
  }
}())
