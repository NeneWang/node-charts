const utils = require('./utils')
const {
  EOL,
  PAD,
  verifyData,
  curForward,
  curUp,
  curDown,
  curBack,
  getOriginLen,
  getLabel
} = utils

const printBox = (width, height, style = '# ', left = 0, top = 0, type = 'coordinate') => {
  let result = curForward(left) + curUp(top)
  const hasSide = width > 1 || height > 1
    
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      result += style
    }

    if (hasSide) {
      if (i !== height - 1) {
        result += EOL + curForward(left)
      } else {
        result += EOL
      }
    }
  }

  if (type === 'data') {
    result += curDown(hasSide ? (top - height) : top) + curBack(left + getOriginLen(style))
  }
  return result
}

module.exports = (data, opts) => {
  verifyData(data)

  const newOpts = Object.assign({
    width: 7, //Amount of weeks
    left: 2,
    height: 8,
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
    startsVAxis: 0, //Starts on the vertical Line
    VLabels: ['Mo ', 'Tu ', 'We ', 'Th ', 'Fr ', 'Sa ', 'Su ']
  }, opts)
//   newOpts.legendGap = newOpts.width/3*4

  const {
    left, height, style, sides, width, zero, hAxis, vAxis, ratio,
    hName, vName, hGap, vGap, legendGap, startsHAxis, startsVAxis, VLabels
  } = newOpts

  let tmp; let result = ''
  const styles = data.map(item => item.style || style)
  const allSides = data.map(item => item.sides || sides)
  const keys = new Set(data.map(item => item.key))

  result += PAD.repeat(left) + vName
  result += PAD.repeat(legendGap)
  result += Array.from(keys)
    .map(
      key => key + ': ' + (data.find(
        item => item.key === key
      ).style || style)
    ).join(' | ') +
    EOL.repeat(2)

  result += printBox(width + left, height + 1, PAD.repeat(2))

  data.map((item, index) => {
    result += printBox(
      allSides[index][0],
      allSides[index][1],
      styles[index],
      item.value[0] * 2 + left + 3,
      item.value[1] + 2,
      'data'
    )
  })

  result += curBack(width * 2) + curUp(height + 1) +
          PAD.repeat(left + 1) + vAxis[1]

  for (let i = 1; i < height + 1; i++) {
    const yAxisLabels = (height - i) * ratio[1]
    const currentLabeledY = VLabels[yAxisLabels-1];
    // console.log("currentLabeledY", currentLabeledY)
    tmp = ((height - i) % vGap === 0 && i !== height)
      ? (currentLabeledY).toString() : ''//vAis[0] being the X axis item
    result += EOL + tmp.padStart(left + 1) + vAxis[0] 
  }

  result += curBack() + zero + curDown(1) + curBack(1) + '' + curUp(1)

  for (let i = 1; i < (width * 2) + hGap; i++) {
    if (!(i % (hGap * 2))) {
      result += hAxis[0]

      // Draw scale of horizontal axis
      const xAxisLabels = (i / 2) * ratio[0] + startsHAxis
      const len = xAxisLabels.toString().length

      result += curDown(1) + curBack(1) + xAxisLabels + curUp(1) //Prints the H axis values.
      if (len > 1) {
        result += curBack(len - 1)
      }

      continue
    }

    result += hAxis[1] //Draws the `>`
  }

  result += hAxis[2] + PAD + hName + EOL

  return result
}