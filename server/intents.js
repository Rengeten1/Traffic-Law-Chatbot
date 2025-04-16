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
  {
    name: 'right_of_way',
    keywords: ['right of way', 'priority', 'who goes first', 'roundabout rules'],
    response: 'In Germany, right of way is determined by signs, road markings, or the "right before left" rule at unmarked intersections. For example, in a roundabout, vehicles already inside have priority.',
    followUp: 'Would you like details on a specific right-of-way situation?'
  },
  {
    name: 'traffic_violation',
    keywords: ['fine', 'traffic violation', 'speeding ticket', 'penalty'],
    response: 'Fines for traffic violations in Germany vary. For example, speeding by 10 km/h in urban areas may cost €30-€60. Serious offenses like running a red light can be €90-€360.',
    followUp: 'Do you want to know about a specific violation?'
  },
  {
    name: 'bicycle_rules',
    keywords: ['bicycle', 'bike rules', 'cycle on sidewalk', 'cycling laws'],
    response: 'In Germany, bicycles must use bike lanes when available. Using bike on wrong side of the bike lanes is also illegal. Riding on sidewalks is generally not allowed for adults, except where signs permit. Helmets are recommended but not mandatory.',
    followUp: 'Are you curious about other cycling rules?'
  },
  {
    name: 'drivers_license',
    keywords: ['driver’s license', 'driving license', 'how to get license', 'license requirements'],
    response: 'To get a driver’s license in Germany, you must be at least 18, complete a driving school course, pass a theory test, and pass a practical driving test. First aid training is also required.',
    followUp: 'Would you like to know about license classes or costs?'
  },
{
    name: 'drunk_driving',
    keywords: ['drunk driving', 'alcohol limit', 'DUI', 'drink and drive', 'jail for drunk'],
    response: 'In Germany, the legal blood alcohol limit is 0.5 g/L for most drivers, 0.0 g/L for new drivers. Driving over 0.5 g/L can lead to fines from €500, license suspension, or up to 7 years in jail for severe cases causing harm.',
    followUp: 'Do you want to know about testing procedures for alcohol?'
  },
  {
    name: 'hit_and_run',
    keywords: ['hit and run', 'leave accident', 'flee scene', 'jail for accident'],
    response: 'Hit-and-run in Germany is illegal. Leaving an accident scene without reporting can result in fines up to €7,000, license revocation, or up to 7 years in jail, especially if injuries occur.',
    followUp: 'Would you like details on what to do after an accident?'
  },
  {
    name: 'reckless_driving',
    keywords: ['reckless driving', 'dangerous driving', 'street racing', 'jail for reckless'],
    response: 'Reckless driving, like street racing or endangering others, is heavily penalized in Germany. Penalties include fines, license suspension, or up to 2 years in jail, or 7 years if it causes death.',
    followUp: 'Are you curious about specific reckless driving cases?'
  },
  {
    name: 'driving_without_license',
    keywords: ['no license', 'driving without license', 'unlicensed driving', 'jail for no license'],
    response: 'Driving without a valid license in Germany can lead to a fine of up to €2,000 or up to 1 year in jail. Repeated offenses increase penalties and may include vehicle confiscation.',
    followUp: 'Do you want to know how to reinstate a license?'
  },
{
    name: 'red_light_violation',
    keywords: ['run red light', 'red light fine', 'traffic light violation', 'jail for red light'],
    response: 'Running a red light in Germany incurs fines from €90 to €360, plus 1-2 points in Flensburg. If it endangers others, you could face up to 7 years in jail, especially if it causes an accident.',
    followUp: 'Would you like to know about traffic light rules?'
  },
  {
    name: 'drug_driving',
    keywords: ['drug driving', 'drugs and driving', 'DUI drugs', 'jail for drugs'],
    response: 'Driving under the influence of drugs in Germany is illegal, with zero tolerance for illegal substances. Penalties include fines from €500, license suspension, or up to 5 years in jail for severe cases.',
    followUp: 'Do you want to know about drug testing on roads?'
  },
  {
    name: 'mobile_phone_use',
    keywords: ['phone while driving', 'mobile phone fine', 'texting and driving', 'jail for phone'],
    response: 'Using a mobile phone while driving in Germany leads to a €100-€200 fine and 1-2 points. If it causes an accident, penalties increase, with possible jail time up to 7 years for serious harm.',
    followUp: 'Are you interested in hands-free device rules?'
  },
  {
    name: 'overtaking_violation',
    keywords: ['illegal overtaking', 'pass on right', 'overtaking rules', 'jail for overtaking'],
    response: 'Illegal overtaking, like passing on the right on the Autobahn, can lead to fines of €70-€700 and 1-2 points. Causing an accident may result in up to 7 years in jail.',
    followUp: 'Would you like to know more about overtaking signs?'
  },
  {
    name: 'traffic_causing_death',
    keywords: ['accident death', 'kill while driving', 'jail for accident', 'fatal crash'],
    response: 'Causing death by negligent or reckless driving in Germany can lead to up to 7 years in jail, especially for drunk or dangerous driving. Fines and license bans also apply.',
    followUp: 'Do you want to know about legal defenses in such cases?'
  },
  {
    name: 'repeat_offenses',
    keywords: ['repeat offender', 'multiple violations', 'jail for repeat', 'traffic points'],
    response: 'Repeat traffic offenses in Germany accumulate points in Flensburg. At 8 points, you lose your license. Persistent violations, like drunk driving, can lead to jail terms up to 7 years.',
    followUp: 'Would you like details on the points system?'
  }

  // Add more intents (e.g., traffic violations, right of way)
];

module.exports = intents;
