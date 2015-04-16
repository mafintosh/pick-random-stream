var through = require('through2')

module.exports = function (onpick) {
  var seen = 0
  var stream = through.obj(function (data, enc, cb) {
    if (Math.random() < 1 / ++seen) return cb(null, data)
    cb()
  })

  if (onpick) stream.on('data', onpick)
  return stream
}
