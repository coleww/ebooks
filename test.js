var tap = require('tap')

var ebooks = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(ebooks('world'), 'hello world', 'does it')
})
