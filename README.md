
[![Travis (.org)](https://img.shields.io/travis/chunqiuyiyu/ervy.svg?style=flat-square)](https://travis-ci.org/chunqiuyiyu/@wangnene2/chart)
![GitHub](https://img.shields.io/github/license/chunqiuyiyu/ervy.svg?style=flat-square)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)
[![Install Size](https://flat.badgen.net/packagephobia/install/@wangnene2/chart)](https://packagephobia.now.sh/result?p=ervy)

> Bring charts to terminal


## Why build this
There is no special reason, just because I love terminal and ASCII art. It's very cool! Hope you enjoy Ervy and make your terminal more beautiful.

## Supported Chart types
### Bar
![](/site/imgs/bar.png)

### Pie
![](/site/imgs/pie.png)

### Bullet
![](/site/imgs/bullet.png)

### Donut
![](/site/imgs/donut.png)

### Gauge
![](/site/imgs/gauge.png)

### Scatter
![](/site/imgs/scatter.png)

## APIs

## main function
```js
ervy.[chartType](data, options)
```

## render colored characters
```js
// foreground color
ervy.fg(color, character)

// background color
ervy.bg(color, [length])
```
Supported color: black, red, green, yellow, blue, magenta, cyan and white.

Use [demo](/demo/index.js) to understand how to combine APIs in actual code.

## Credits

[@jcubic](https://github.com/jcubic)
[@chunqiuyiyu](https://github.com/chunqiuyiyu/ervy)

## License
[MIT](./LICENSE)
