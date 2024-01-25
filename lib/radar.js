
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


  if(radarData.length > 6) throw new Error('Too many features at Radar Chart Creation. Max 6.')

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
  const min = Math.min(...radarData.map(o => o.value))
  radarData.forEach(o => o.scaled_value = Math.round((o.value - min) * 6 / (max - min)))

  function getPosition(value, feature_position = 'a', {incHeight = 1} = {}) {
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






}

// Example data
const stats = [8, 5, 6, 9, 7, 6];
createRadarChart(stats);
