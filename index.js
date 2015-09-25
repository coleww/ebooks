var after = require('after')
var makeIsCool  = require('iscool')
var iscool = makeIsCool()
var markov = require('@coleww/markov')
var Twit = require('twit')
var addEnder = require('add-ender')
var capitalize = require('capitalize')

module.exports = function (lines, config, n, cb) {
  var T = new Twit(config)
  var m = markov(n || 2)

  var init = after(lines.length, function () {
    var toot = !!cb ? cb(m) : addEnder(capitalize(m.fill(m.pick(), 12).join(" ").toLowerCase()))
    console.log(toot)
    if(iscool(toot) && toot.length < 140){
      T.post('statuses/update', {status: toot}, function (err, data, response) {
        console.log(err)
        console.log(data)
      })
    }
  })

  lines.forEach(function (line, i) {
    m.seed(line, init)
  })
}
