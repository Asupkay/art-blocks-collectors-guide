export function democracityFeatures(tokenData) {
  const hash = tokenData.hash;
  const hashPairs = [];
  for (let j = 0; j < 32; j++) {
    hashPairs.push(hash.slice(2 + j * 2, 4 + j * 2));
  }
  const decPairs = hashPairs.map((x) => parseInt(x, 16));
  const features = {};

  const map = function(n, start1, stop1, start2, stop2) {
    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  };

  function weightedChooser(decPair, weights, array) {
    let k = decPairToPercent(decPairs[decPair]);
    for (let i = 0; i < weights.length; i++) {
      if (k <= weights[i]) {
        return array[i];
      }
    }
  }
  
  let shouldRain;
  
  const cSchemes = [
    'OFF(BLACK + WHITE)',
    'REEF',
    'BRICK',
    'DOLPHIN',
    'OAXACA',
    'WHO ATE THE CRANS?',
    'MOSS AGATE',
    'FIREWATER',
    'BRINKMAN',
    'TOMATO',
    'THE PINK ONE',
    'DROPDOWN',
  ];
  
  const pedestalTypes = ['Square', 'Pyramid', 'Stage'];

  function getColorCohesion() {
    const COLOR_COHESION_MIXED = 'Mixed';
    const CLOUD_COVERAGE_PERCENT = decPairToPercent(decPairs[13]);
    const LOW_CLOUD_COVERAGE_PERCENT = .6;
    const colorCohesionNumOptions = ['High', 'Normal', 'Random'];
    let colorCohesionWeights = [.28, .56, .84, 1];
    if (CLOUD_COVERAGE_PERCENT < LOW_CLOUD_COVERAGE_PERCENT) {
      colorCohesionNumOptions.push('Mono');
      colorCohesionWeights = [.25, .5, .75, .85, 1];
    }
    const colorCohesionOptions = [...colorCohesionNumOptions, COLOR_COHESION_MIXED];
    return weightedChooser(10, colorCohesionWeights, colorCohesionOptions);
  }

  function getCityStyle() {
    const typePercentages = [.16, .3025, .445, .5625, .68, .7725, .865, .9325, 1];
    const biomeTypes = {
      TRADITONAL: 'Traditional',
      SHORT: 'Short',
      TALL: 'Tall',
      BIGGER_IN_CENTER: 'Center City',
      AGRIDUSTRIAL: 'Agridustrial',
      SMALLER_IN_CENTER: 'Crater',
      MONOLITH: 'Monolith',
      CHAOS: 'Chaos',
      PETE_REPEAT: 'Pete Repeat'
    }
    return weightedChooser(11, typePercentages, Object.values(biomeTypes));
  }
  
  function getLightingType() {
    const k = decPairToPercent(decPairs[2]);
    if (k < .4) {
      return 'Afternoon';
    } else if (k < .6) {
      return 'Sunrise';
    } else if (k < .8) {
      return 'Sunset';
    } else if (k < .9) {
      return 'Flat';
    } else {
      return 'Night';
    }
  }
  
  function getWeather() {
    const snow = decPairToPercent(decPairs[4]) < .1;
    const acidRain = decPairToPercent(decPairs[14]) < .1;
    const k = decPairToPercent(decPairs[13]);
      if (k < .4) {
        return 'Clear Skies';
      } else if (k < .6) {
        if (k < .45) {
          shouldRain = true;
          return acidRain ? 'Partly Cloudy w. Acid Rain' : 'Partly Cloudy w. Precipitation';
        }
        return 'Partly Cloudy';
      } else if (k < .8) {
        if (k < .7) {
          shouldRain = true;
          return acidRain ? 'Mostly Cloudy w. Acid Rain' : 'Mostly Cloudy w. Precipitation';
        }
        return 'Mostly Cloudy';
      } else {
        if (k < .95) {
          shouldRain = true;
          if (k > .9) {
            return snow ? 'Overcast w. Precipitation' : acidRain ? 'Thunderstorm (Acid Rain)' : 'Thunderstorm';
          }
          return acidRain ? 'Overcast & Acid Rain' : 'Overcast w. Precipitation';
        }
        return 'Overcast';
      }
  }
  
  function getCloudType() {
    if (decPairToPercent(decPairs[13]) < .4) return 'None';
    const k = decPairToPercent(decPairs[16]);
    if (k < .3) {
      return 'Centered';
    }
    if (k < .6) {
      return 'Ring';
    }
    if (k < .8) {
      return 'Ring/Square';
    }
    return 'Square';
  }
  
  function getGroundCoverage() {
    const snow = decPairToPercent(decPairs[4]) < .1;
    const k = decPairToPercent(decPairs[6]);
    if (k <= .95) {
      return snow ? 'Snow' : 'None';
    }
    if (!(shouldRain && !snow) && decPairToPercent(decPairs[7]) < .5) {
      return 'Frozen Flood';
    }
    return 'Flood';
  
  }
  
  function decPairToPercent(decPair) {
    return map(decPair, 0, 255, 0, 1);
  }
  
  features['City Style'] = getCityStyle();
  features['Color Scheme'] = cSchemes[(cSchemes.length - .000000001) * decPairToPercent(decPairs[0]) << 0];
  features['Color Cohesion'] = getColorCohesion();
  features['Pedestal'] = pedestalTypes[(pedestalTypes.length - .000000001) * decPairToPercent(decPairs[12]) << 0];
  features['Lighting'] = getLightingType();
  features['Weather'] = getWeather();
  features['Fog'] = decPairToPercent(decPairs[5]) < .125 ? 'Yes' : 'No';
  features['Cloud Type'] = getCloudType();
  features['Ground Coverage'] = getGroundCoverage();

  return features
}
