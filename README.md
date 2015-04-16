# pick-random-stream

Uniformly pick a random value from a stream

```
npm install pick-random-stream
```

## Usage

``` js
var random = require('pick-random-stream')

someStream.pipe(random(function (data) {
  console.log('current random element is', data)
}))
```

The random value will be chosen with propability `1/n`
where `n` is the total number of elements in the stream

## License

MIT
