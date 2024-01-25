
> Bring charts to terminal

## New Charts

Heatmap:

Sample Code:


```js

console.log(annotation(notes))
const heatmap_plots = [];
SIZE_SQUARE = 2
WEEKS = 15
for (let i = 1; i < 13; i++) {
  i < 6 ? heatmap_plots.push({ key: '1+', value: [i, i], style: bg('red', SIZE_SQUARE) })
    : heatmap_plots.push({ key: '1+', value: [i, 6], style: bg('red', SIZE_SQUARE) })
}

heatmap_plots.push({ key: '3+', value: [2, 6], style: bg('blue', SIZE_SQUARE)})
heatmap_plots.push({ key: '5+', value: [6, 0], style: bg('cyan', SIZE_SQUARE) })

console.log(heatmap(heatmap_plots, { width: WEEKS , hName: "", vName: "", startsHAxis: 15, left: 4}) + '\n')

```

Results: 

![](https://github.com/NeneWang/node-charts/raw/master/img/2023-01-20-16-15-52.png)

Default options:

```json
  const newOpts = Object.assign({
    width: 5, //Amount of weeks
    left: 2,
    height: 7,
    style: '# ',
    sides: [1, 1],
    hAxis: ['+', '-', ''],
    vAxis: ['|', ''],
    hName: 'X',
    vName: 'Y',
    zero: '+',
    ratio: [1, 1],
    hGap: 2,
    vGap: 1,
    legendGap:0,
    startsHAxis: 15, //Start on the horizontal Line
    startsVAxis: 1, //Starts on the vertical Line
    VLabels: ['Mo ', 'Tu ', 'We ', 'Th ', 'Fr ', 'Sa ', 'Su ']
  }, opts)
```


### Bar

![](https://github.com/NeneWang/node-charts/raw/master/img/2024-01-25-09-54-05.png)

```js
const barData = [
  { key: 'A', value: 5, style: '*' },
  { key: 'B', value: 3, style: '+' },
  { key: 'C', value: 11 },
  { key: 'D', value: 1, style: bg('red') },
  { key: 'E', value: 5, style: bg('green') },
  { key: 'F', value: 7, style: bg('blue'), padding: 1 },
  { key: 'G', value: 0, style: bg('yellow') }
]

console.log(bar(barData))
```

### Pie

![](https://github.com/NeneWang/node-charts/raw/master/img/2024-01-25-09-55-22.png)

```js

// Pie
const pieData1 = [
  { key: 'A', value: 5, style: '* ' },
  { key: 'B', value: 10, style: '+ ' },
  { key: 'C', value: 10, style: '# ' },
  { key: 'D', value: 10, style: 'O ' }
]

const pieData2 = [
  { key: 'A', value: 5, style: bg('cyan', 2) },
  { key: 'B', value: 5, style: bg('yellow', 2) },
  { key: 'C', value: 5, style: bg('magenta', 2) },
  { key: 'D', value: 5, style: bg('white', 2) }
]

console.log(pie(pieData1, { left: 1 }))
console.log(pie(pieData2, { left: 1 }))
```
### Bullet

```js

const bulletData = [
  { key: 'Month', value: 5 },
  { key: 'Week', value: 3, style: fg('red', '*') },
  { key: 'Day', value: 20, style: bg('blue'), barWidth: 1 },
  { key: 'Now', value: 15, style: bg('cyan'), barWidth: 1 }
```

![](https://github.com/NeneWang/node-charts/raw/master/img/2024-01-25-09-57-03.png)

### Donut

```js
const donutData1 = [
  { key: 'A', value: 10, style: fg('cyan', '+ ') },
  { key: 'B', value: 10, style: fg('red', '* ') }
]
```

```js
const donutData2 = [
  { key: 'A', value: 20, style: bg('green', 2) },
  { key: 'B', value: 20, style: bg('blue', 2) },
  { key: 'C', value: 20, style: bg('yellow', 2) }
]
```


![](https://github.com/NeneWang/node-charts/raw/master/img/2024-01-25-09-57-48.png)

### Gauge

```js
const gaugeData1 = [
  { key: 'A', value: 0.5 }
]

const gaugeData2 = [
  { key: 'PR', value: 0.3 }
]

console.log(gauge(gaugeData1, { radius: 7 }))
console.log(gauge(gaugeData2, {
  radius: 7, style: bg('green', 2), bgStyle: bg('magenta', 2)
}))

```

![](https://github.com/NeneWang/node-charts/raw/master/img/2024-01-25-09-58-17.png)

### Scatter Data

![](https://github.com/NeneWang/node-charts/raw/master/img/2024-01-25-09-53-37.png)

```js
const scatterData = []

for (let i = 1; i < 17; i++) {
  i < 6 ? scatterData.push({ key: 'A', value: [i, i], style: fg('red', '*') })
    : scatterData.push({ key: 'A', value: [i, 6], style: fg('red', '*') })
}

scatterData.push({ key: 'B', value: [2, 6], style: fg('blue', '# '), sides: [2, 2] })
scatterData.push({ key: 'C', value: [6, 9], style: bg('cyan', 2) })

console.log(scatter(scatterData, { legendGap: 18, width: 15 }) + '\n')

```

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
