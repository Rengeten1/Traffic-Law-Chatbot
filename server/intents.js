const intents = [
  {
    name: 'speed_limit',
    keywords: ['speed limit', 'how fast', 'maximum speed'],
    response: 'Speed limits in Germany depend on the area. Urban areas: 50 km/h, rural roads: 100 km/h, Autobahn: no general limit unless posted.',
    followUp: 'Would you like to know about specific speed limit signs?'
  },
  {
    name: 'traffic_sign',
    keywords: ['traffic sign', 'road sign', 'what does this sign mean'],
    response: 'Please describe the sign or its shape/color.',
    followUp: null
  },
  {
    name: 'parking',
    keywords: ['parking', 'where can I park', 'parking rules'],
    response: 'Parking rules vary by zone. Look for signs indicating allowed times or restrictions.',
    followUp: 'Do you have a specific parking scenario in mind?'
  },
  // Add more intents (e.g., traffic violations, right of way)
];

module.exports = intents;
