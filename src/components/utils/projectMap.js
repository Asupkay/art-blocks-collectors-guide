import {empyreanFeatures} from './empyreanFeatureScript';
import {enchiridionFeatures} from './enchiridionFeatureScript';
import {democracityFeatures} from './democracityFeatureScript';

export const projectMap = {
  33: {
    featureScript: empyreanFeatures,
    features: {
      "Size": ["Small", "Normal", "Large"],
      "Line amount": ["Low", "Normal", "High"],
      "Point amount": ["Very low", "Low", "Normal", "High", "Very high"],
      "Line style": ["Loopy", "Neat loopy", "Straight"],
      "Color scheme": ["Grayscale", "Monochromatic", "Full spectrum"],
      "Moves": ["False", "True"],
      "Color Animation": ["N/A", "Random", "Rotate", "Hue shift"],
      "Filled": ["False", "True"],
      "Node style": ["Normal", "Just start point", "Just endpoint", "Start point and endpoint"],
      "Start point node style": ["N/A", "Circle", "Square", "Triangle", "Cross", "Asterisk"],
      "Endpoint node style": ["N/A", "Circle", "Square", "Triangle", "Cross", "Asterisk"],
      "Nodes filled": ["N/A", "False", "True"],
      "Possible node size": ["N/A", "Small", "Medium", "Large"],
      "Node rotation": ["N/A", "False", "True"],
      "Border": ["False", "True"],
      "Start point style": ["On circle edge", "Use previous endpoint", "Random"],
      "Random endpoint": ["False", "True"],
      "Noise magnitude": ["N/A", "Low", "Normal", "High"],
      "Noise resolution": ["N/A", "Low", "Normal", "High"],
      "Color animation speed": ["N/A", "Very slow", "Slow", "Normal", "Fast"],
      "Max node rotation": ["N/A", "Small", "Medium", "Large"],
    }
  },
  101: {
    featureScript: enchiridionFeatures,
    features: {
      "Color Palette": ["LAVENDER", "OFF(BLACK + WHITE)", "REEF", "BRICK", "DOLPHIN", "OAXACA", "MERCIA", "WHO ATE THE CRANS?", "MOSS AGATE", "FIREWATER", "FAST Ag"],
      "Color Cohesion": ["Mono", "High", "Normal", "Random"],
      "Has Background": ["False", "True"],
      "Rectangle Decoration": ["None", "Perpendicular Lines", "Parallel Lines", "Mixed Lines (Random)", "Mixed Lines (Noise)", "Cross Hatch", "Specks (Random)", "Specks (Grid)", "Random (Random)", "Random (Noise)", "Gradient",],
      "Split Style": ["None", "Horizontal", "Vertical", "Grid", "Partition"],
    },
    printedPieces: [
      0, 
      1,
      47,
      179,
      256,
      443,
      470,
      510,
      856,
      880,
      905,
      961,
      973
    ]
  },
  162: {
    featureScript: democracityFeatures,
    features: {
      "City Style": ["Traditional", "Short", "Tall", "Center City", "Agridustrial", "Crater", "Monolith", "Chaos", "Pete Repeat"],
      "Color Scheme": ["OFF(BLACK + WHITE)","REEF","BRICK","DOLPHIN","OAXACA","WHO ATE THE CRANS?","MOSS AGATE","FIREWATER","BRINKMAN","TOMATO","THE PINK ONE","DROPDOWN"],
      "Color Cohesion": ["Random", "High", "Normal", "Mono", "Mixed"],
      "Pedestal": ["Square", "Pyramid", "Stage"],
      "Lighting": ["Afternoon", "Sunrise", "Sunset", "Flat", "Night"],
      "Weather": ["Clear Skies","Partly Cloudy w. Acid Rain","Partly Cloudy w. Precipitation","Partly Cloudy","Mostly Cloudy w. Acid Rain","Mostly Cloudy w. Precipitation","Mostly Cloudy","Overcast w. Precipitation","Thunderstorm (Acid Rain)","Thunderstorm","Overcast & Acid Rain","Overcast w. Precipitation,Overcast"],
      "Fog": ["Yes", "No"],
      "Cloud Type": ["Centered", "Square", "Ring", "Ring/Square"],
      "Ground Coverage": ["None", "Snow", "Frozen Flood", "Flood"]
    },
    printedPieces: []
  }
}

export const urlToProjectId = {
  "empyrean": 33,
  "enchiridion": 101,
  "democracity": 162
}

