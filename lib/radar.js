const utils = require('./utils.js');
const { PAD, padMid, verifyData, EOL, bg } = utils
/**
 * 
 * @param {list[dict]} radarData
 * [
 *  {
 *    "name": "feature1",
 *    "value": 8
 *  }
 * ] 
 * 
 * Values are automatlly scaled to 0-6 for calculating the distances.
 */
function createRadarChart(radarData, { width = 6 } = {}) {
  // Allows up to 6 features. This is to keep the ui from looking too tight.
  /**
   *    b 
   * a     c
   * 
   * d     f
   *    e
   */


  if (radarData.length > 6) throw new Error('Too many features at Radar Chart Creation. Max 6.')

  // Formations depending on the number of features
  const formations = {
    1: ['b'],
    2: ['b', 'e'],
    3: ['a', 'c', 'e'],
    4: ['a', 'c', 'd', 'f'],
    5: ['a', 'b', 'c', 'd', 'f'],
    6: ['a', 'b', 'c', 'd', 'e', 'f']
  };

  const selectedFormation = formations[radarData.length];

  // Normalize values to 0-6 into the scaled_value feature
  const max = Math.max(...radarData.map(o => o.value))
  radarData.forEach(o => o.scaled_value = Math.round((o.value) * 6 / (max)))

  function getPosition(value, feature_position = 'a', { incHeight = 2 } = {}) {
    switch (feature_position) {
      case 'a':
        // min (width, width) => max (0, 0 + incHeight)
        return [width - value, width - value + incHeight];
      case 'b':
        // min (width, width) => (width, 0)
        return [width, width - value];
      case 'c':
        // min: (width, width) => (width * 2, 0 + incHeight)
        return [width + value, width - value + incHeight]
      case 'd':
        // min: (width, width) => (0, width * 2)
        return [width - value, width + value - incHeight]
      case 'e':
        // min: (width, width) => (width, width * 2)
        return [width, width + value]
      case 'f':
        // min: (width, width) => (width * 2, width * 2)
        return [width + value, width + value - incHeight]

    }

  }


  // // Create paddings for the radar chart.
  // let messageArr = [];
  // for (let i = 0; i < width * 3 + 2; i++) {
  //   let message = PAD.repeat(width * 4 + 2) + "|";
  //   messageArr.push(message);
  // }

  String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
  }

  // Create the radar Plots
  const plots = Array.from({ length: width * 2 + 2 }, () =>
    new Array(width * 4 + 2).fill(undefined)
  );


  radarData.forEach((feature, index) => {
    const { name, scaled_value, value } = feature;
    const feature_position = selectedFormation[index];
    const [x, y] = getPosition(scaled_value, feature_position);

    plots[y][x*2] = bg('yellow', 2);
  });

  // Plot on the middle
  plots[width][width*2] = bg('red', 2);

  // Render the plots
  let render = PAD;
  for (let i = 0; i < plots.length; i++) {
    for (let j = 0; j < plots[i].length; j++) {
      if (plots[i][j] === undefined) {
        render += PAD;
      } else {
        render += plots[i][j];
      }
    }
    render += EOL + PAD;
  }

  return render;
}

// Example data
const stats = [{
  name: "feature1",
  value: 6
}, {
  name: "feature2",
  value: 6
}, {
  name: "feature3",
  value: 3
}, {
  name: "feature4",
  value: 6
}, {
  name: "feature5",
  value: 6
}, {
  name: "feature6",
  value: 6
}
];
const render = createRadarChart(stats);
console.log(render);
