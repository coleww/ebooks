var ebooks = require('./config')
var config = require('./')
var Twit = require('twit')
var T = new Twit(config)

var toot = ebooks()

T.post('statuses/update', {status: toot}, function (err, data, response) {
  console.log(err)
  console.log(data)
})
