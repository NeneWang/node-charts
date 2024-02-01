const bar = require('../lib/bar')
const pie = require('../lib/pie')
const bullet = require('../lib/bullet')
const donut = require('../lib/donut')
const gauge = require('../lib/gauge')
const scatter = require('../lib/scatter')
const { bg, fg } = require('../lib/utils')
const annotation = require('../lib/annotation')
const heatmap = require('../lib/heatmap')
const radar = require('../lib/radar')

// Scatter
const scatterData = []

for (let i = 1; i < 17; i++) {
  i < 6 ? scatterData.push({ key: 'A', value: [i, i], style: fg('red', '*') })
    : scatterData.push({ key: 'A', value: [i, 6], style: fg('red', '*') })
}

scatterData.push({ key: 'B', value: [2, 6], style: fg('blue', '# '), sides: [2, 2] })
scatterData.push({ key: 'C', value: [6, 9], style: bg('cyan', 2) })

console.log(scatter(scatterData, { legendGap: 18, width: 15 }) + '\n')

// Bar
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

// Bullet
const bulletData = [
  { key: 'Month', value: 5 },
  { key: 'Week', value: 3, style: fg('red', '*') },
  { key: 'Day', value: 20, style: bg('blue'), barWidth: 1 },
  { key: 'Now', value: 15, style: bg('cyan'), barWidth: 1 }
]

console.log(bullet(bulletData, { style: '+', width: 30, barWidth: 2 }))

// Donut
const donutData1 = [
  { key: 'A', value: 10, style: fg('cyan', '+ ') },
  { key: 'B', value: 10, style: fg('red', '* ') }
]

const donutData2 = [
  { key: 'A', value: 20, style: bg('green', 2) },
  { key: 'B', value: 20, style: bg('blue', 2) },
  { key: 'C', value: 20, style: bg('yellow', 2) }
]

console.log(donut(donutData1, { left: 1 }))
console.log(donut(donutData2, { left: 1, gapChar: bg('yellow', 2) }))

// Gauge
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


const notes = [
  { key: 'a', style: bg('green', 2) },
  { key: 'b', style: bg('red', 6) },
]



console.log(annotation(notes))
const heatmap_plots = [];
SIZE_SQUARE = 2
WEEKS = 15

for (let i = 1; i < 13; i++) {
  i < 6 ? heatmap_plots.push({ key: '1+', value: [i, i], style: bg('red', SIZE_SQUARE) })
    : heatmap_plots.push({ key: '1+', value: [i, 6], style: bg('red', SIZE_SQUARE) })
}

heatmap_plots.push({ key: '3+', value: [2, 6], style: bg('blue', SIZE_SQUARE) })
heatmap_plots.push({ key: '3+', value: [0, 6], style: bg('blue', SIZE_SQUARE) })
heatmap_plots.push({ key: '3+', value: [14, 1], style: bg('blue', SIZE_SQUARE) })
heatmap_plots.push({ key: '3+', value: [0, 2], style: bg('blue', SIZE_SQUARE) }) //This appears. but below 2 not.
heatmap_plots.push({ key: '3+', value: [0, 1], style: bg('blue', SIZE_SQUARE) })
heatmap_plots.push({ key: '3+', value: [0, 0], style: bg('blue', SIZE_SQUARE) })

heatmap_plots.push({ key: '5+', value: [6, 0], style: bg('cyan', SIZE_SQUARE) })

console.log(heatmap(heatmap_plots, { width: WEEKS, hName: "", vName: "", startsHAxis: 0, left: 4 }) + '\n')




// Example data
const stats = [{
  name: "STR",
  value: 4
}, {
  name: "DEX",
  value: 1
}, {
  name: "VIT",
  value: 6
}, {
  name: "INT",
  value: 5
}, {
  name: "WIS",
  value: 3
}, {
  name: "HP",
  value: 6
}
];
let { render, labelsWithColors } = radar(stats);
console.log(render);
console.log(annotation(labelsWithColors));




// Example data
const stats4Only = [{
  name: "feature1",
  value: 4
}, {
  name: "feature2",
  value: 6
}, {
  name: "feature3",
  value: 6
}, {
  name: "feature4",
  value: 3
}
];
let dataStast4 = radar(stats4Only);
console.log(dataStast4.render);
console.log(annotation(dataStast4.labelsWithColors));
