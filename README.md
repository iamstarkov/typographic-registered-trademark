# typographic-registered-trademark

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> [Don’t use alphabetic substitutes][rtfm]

Micro module to help eliminate one of the [bad typewriter habits][habits].


## Install

```sh
npm install --save typographic-registered-trademark
```


## Usage

```js
var registeredTrademark = require('typographic-registered-trademark');

registeredTrademark(`2013 MegaCorp (R)`); // 2013 MegaCorp ®
```

## License

MIT © [Vladimir Starkov](https://iamstarkov.com/)

[rtfm]: http://practicaltypography.com/trademark-and-copyright-symbols.html
[habits]: http://practicaltypography.com/typewriter-habits.html

[npm-url]: https://npmjs.org/package/typographic-registered-trademark
[npm-image]: http://img.shields.io/npm/v/typographic-registered-trademark.svg

[travis-url]: https://travis-ci.org/iamstarkov/typographic-registered-trademark
[travis-image]: http://img.shields.io/travis/iamstarkov/typographic-registered-trademark.svg

[coveralls-url]: https://coveralls.io/r/iamstarkov/typographic-registered-trademark
[coveralls-image]: http://img.shields.io/coveralls/iamstarkov/typographic-registered-trademark.svg

[depstat-url]: https://david-dm.org/iamstarkov/typographic-registered-trademark
[depstat-image]: https://david-dm.org/iamstarkov/typographic-registered-trademark.svg

[depstat-dev-url]: https://david-dm.org/iamstarkov/typographic-registered-trademark
[depstat-dev-image]: https://david-dm.org/iamstarkov/typographic-registered-trademark/dev-status.svg
