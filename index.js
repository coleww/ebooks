var after = require('after')
var tipots  = require('this-is-probably-ok-to-say')

var markov = require('@coleww/markov')
var Twit = require('twit')
var addEnder = require('add-ender')
var capitalize = require('capitalize')
var stopwords = require('stopwords').english
module.exports = function (lines, config, n, cb) {
  var T = new Twit(config)
  var m = markov(n || 2)

  var init = after(lines.length, function () {



    var start = m.pick()
    while (stopwords.indexOf(start.toLowerCase()) !== -1) start = m.pick()

    var toot = !!cb ? cb(m) : addEnder(capitalize(m.fill(start, 12).join(" ").toLowerCase()))

    while (stopwords.indexOf(toot.split(' ')[toot.split(' ').length - 1].toLowerCase()) !== -1) toot = toot.split(' ').slice(0, toot.split(' ').length - 1).join(' ')
    console.log(toot)
    if(tipots(toot) && toot.length < 140 && toot.length > 0){
      T.post('statuses/update', {status: toot}, function (err, data, response) {
        console.log(err)
        console.log(data)
      })
    }
  })

  lines.forEach(function (line, i) {
    m.seed(line.toLowerCase(), init)
  })
}
