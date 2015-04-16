# pick-random-stream

Uniformly pick a random value from a stream

```
npm install pick-random-stream
```

[![build status](http://img.shields.io/travis/mafintosh/pick-random-stream.svg?style=flat)](http://travis-ci.org/mafintosh/pick-random-stream)

## Usage

``` js
var random = require('pick-random-stream')

someStream.pipe(random()).on('data', function (data) {
  console.log('current random element is', data)
})
```

The random value will be chosen with propability `1/n`
where `n` is the total number of elements in the stream

For example to pick a random node module on npm you can do

``` js
var JSONStream = require('JSONStream')
var request = require('request')
var random = require('pick-random-stream')

request('http://node-modules.com/modules.json')
  .pipe(JSONStream.parse('*'))
  .pipe(random())
  .on('data', function (module) {
    console.log('current random module is', module)
  })
```

## License

MIT
