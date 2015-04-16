var through = require('through2')

module.exports = function (onpick) {
  var seen = 0
  var stream = through.obj(function (data, enc, cb) {
    if (Math.random() < 1 / ++seen) {
      stream.pick = data
      stream.emit('pick', data)
    }
    cb()
  })

  stream.pick = null
  if (onpick) stream.on('pick', onpick)

  return stream
}
