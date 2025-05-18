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
  },
  {
    name: 'greeting_hi',
    keywords: ['hi', 'hello', 'hey'],
    response: 'Hello! How can I assist you today?',
    followUp: 'Are you looking for information on traffic rules or something else?'
  },
  {
    name: 'greeting_how_are_you',
    keywords: ['how are you', 'how you doing', 'what’s up'],
    response: 'I’m doing great, thanks for asking! Just here to help with your questions.',
    followUp: 'How about you? Need help with anything specific?'
  },
  {
    name: 'greeting_good_morning',
    keywords: ['good morning', 'morning'],
    response: 'Good morning! Hope you’re ready for a great day. What’s on your mind?',
    followUp: 'Want to talk about driving rules or something else?'
  },
  {
    name: 'greeting_good_afternoon',
    keywords: ['good afternoon', 'afternoon'],
    response: 'Good afternoon! How’s your day going so far?',
    followUp: 'Got any questions about traffic or anything else?'
  },
  {
    name: 'greeting_good_evening',
    keywords: ['good evening', 'evening'],
    response: 'Good evening! Nice to hear from you. What can I help with?',
    followUp: 'Looking for info on driving laws or something different?'
  },
  {
    name: 'farewell_bye',
    keywords: ['bye', 'goodbye', 'see you'],
    response: 'Goodbye! Stay safe and feel free to come back anytime.',
    followUp: null
  },
  {
    name: 'farewell_take_care',
    keywords: ['take care', 'stay safe'],
    response: 'Thanks! You take care too. Safe travels!',
    followUp: null
  },
  {
    name: 'farewell_good_night',
    keywords: ['good night', 'night'],
    response: 'Good night! Drive safely and rest well.',
    followUp: null
  },
  {
    name: 'thanks',
    keywords: ['thank you', 'thanks', 'appreciate it'],
    response: 'You’re very welcome! Happy to help.',
    followUp: 'Anything else I can assist with?'
  },
  {
    name: 'how_can_you_help',
    keywords: ['what can you do', 'how can you help', 'what do you know'],
    response: 'I can answer questions about traffic rules, driving laws, or general topics. I can also chat about almost anything you like!',
    followUp: null
  },
  {
    name: 'autobahn_rules',
    keywords: ['autobahn rules', 'highway rules', 'autobahn driving'],
    response: 'On the German Autobahn, there’s no general speed limit unless posted. You must stay in the right lane unless overtaking, and passing on the right is prohibited.',
    followUp: 'Want to know more about Autobahn etiquette?'
  },
  {
    name: 'winter_tires',
    keywords: ['winter tires', 'snow tires', 'tire rules'],
    response: 'In Germany, winter tires are mandatory in wintry conditions (snow, ice, or slush). Fines up to €60 apply if caught without them, or €80 if you obstruct traffic.',
    followUp: 'Need details on tire specifications?'
  },
  {
    name: 'pedestrian_crossing',
    keywords: ['pedestrian crossing', 'zebra crossing', 'crosswalk rules'],
    response: 'Drivers must stop for pedestrians at marked crossings. Failing to yield can result in a €80 fine and 1 point in Flensburg.',
    followUp: 'Want to know about pedestrian priority signs?'
  },
  {
    name: 'seatbelt_laws',
    keywords: ['seatbelt', 'seat belt rules', 'belt fine'],
    response: 'Wearing seatbelts is mandatory for all passengers in Germany. Fines for non-compliance are €30 per person.',
    followUp: 'Curious about child seat regulations?'
  },
  {
    name: 'child_seat_rules',
    keywords: ['child seat', 'car seat', 'kids in car'],
    response: 'Children under 12 or shorter than 150 cm must use an approved child seat. Fines for non-compliance start at €60.',
    followUp: 'Need specifics on child seat types?'
  },
  {
    name: 'low_emission_zones',
    keywords: ['low emission zone', 'umweltzone', 'green sticker'],
    response: 'Many German cities have Umweltzonen requiring a green emissions sticker. Driving without one incurs a €100 fine.',
    followUp: 'Want to know how to get an emissions sticker?'
  },
  {
    name: 'road_tax',
    keywords: ['road tax', 'vehicle tax', 'car tax'],
    response: 'In Germany, vehicle tax is based on engine size and emissions. You pay annually, and non-payment can lead to vehicle deregistration.',
    followUp: 'Need help calculating your vehicle tax?'
  },
  {
    name: 'vehicle_inspection',
    keywords: ['vehicle inspection', 'tüv', 'car check'],
    response: 'Vehicles in Germany must pass a TÜV inspection every 2 years after the first 3 years. Driving without a valid TÜV can result in a €60 fine.',
    followUp: 'Want to know what the TÜV checks?'
  },
  {
    name: 'no_parking_zones',
    keywords: ['no parking', 'parking forbidden', 'no parking sign'],
    response: 'A red circle with a blue background and red border means no parking. Fines for parking in these zones start at €20.',
    followUp: 'Need clarification on parking signs?'
  },
  {
    name: 'no_stopping_zones',
    keywords: ['no stopping', 'stopping forbidden', 'no stopping sign'],
    response: 'A red circle with a blue background means no stopping. Fines for stopping here start at €40 and can include 1 point.',
    followUp: 'Want to know about temporary stopping rules?'
  },
  {
    name: 'priority_road',
    keywords: ['priority road', 'yellow diamond sign', 'right of way sign'],
    response: 'A yellow diamond sign indicates a priority road, meaning you have right of way over side roads. Yield when the sign ends.',
    followUp: 'Curious about other priority signs?'
  },
  {
    name: 'yield_sign',
    keywords: ['yield', 'give way', 'triangle sign'],
    response: 'A red-bordered triangle with a white center means yield to other traffic. Failing to yield can lead to a €70 fine.',
    followUp: 'Want to know about yield rules at intersections?'
  },
  {
    name: 'stop_sign',
    keywords: ['stop sign', 'octagon sign', 'halt'],
    response: 'A red octagon with STOP means come to a complete stop. Fines for running a stop sign start at €70 and 1 point.',
    followUp: 'Need details on stop sign procedures?'
  },
  {
    name: 'one_way_traffic',
    keywords: ['one way', 'single direction', 'one way street'],
    response: 'A blue circle with a white arrow indicates one-way traffic. Driving against the direction incurs a €30-€100 fine.',
    followUp: 'Want to know about one-way sign variations?'
  },
  {
    name: 'no_entry_sign',
    keywords: ['no entry', 'red circle sign', 'do not enter'],
    response: 'A red circle with a white horizontal bar means no entry for vehicles. Violating this incurs a €75 fine.',
    followUp: 'Curious about exceptions to no-entry signs?'
  },
  {
    name: 'bus_lane_rules',
    keywords: ['bus lane', 'public transport lane', 'bus lane fine'],
    response: 'Bus lanes are reserved for buses and taxis. Driving in one illegally can result in a €55-€100 fine.',
    followUp: 'Want to know about bus lane signs?'
  },
  {
    name: 'truck_restrictions',
    keywords: ['truck restrictions', 'lorry ban', 'heavy vehicle rules'],
    response: 'Trucks over 7.5 tons are banned from German roads on Sundays and holidays from 0:00 to 22:00. Fines start at €120.',
    followUp: 'Need details on truck weight limits?'
  },
  {
    name: 'horn_usage',
    keywords: ['horn', 'honk', 'use horn'],
    response: 'In Germany, horns are only allowed to prevent immediate danger. Unnecessary honking incurs a €10 fine.',
    followUp: 'Want to know about other noise regulations?'
  },
  {
    name: 'headlight_rules',
    keywords: ['headlights', 'low beam', 'light rules'],
    response: 'Low beams are mandatory in tunnels, fog, or heavy rain. Driving without proper lights can lead to a €60 fine.',
    followUp: 'Curious about daytime running lights?'
  },
  {
    name: 'fog_lights',
    keywords: ['fog lights', 'rear fog light', 'fog lamp rules'],
    response: 'Fog lights are only allowed when visibility is under 50 meters. Misuse incurs a €25 fine.',
    followUp: 'Want tips for driving in fog?'
  },
  {
    name: 'emergency_vehicle',
    keywords: ['emergency vehicle', 'siren', 'blue light rules'],
    response: 'You must pull over for emergency vehicles with blue lights and sirens. Failing to yield incurs a €20-€320 fine.',
    followUp: 'Need details on emergency corridors?'
  },
  {
    name: 'emergency_corridor',
    keywords: ['emergency corridor', 'rettungsgasse', 'rescue lane'],
    response: 'On Autobahns, form an emergency corridor between lanes during traffic jams. Fines for non-compliance start at €200.',
    followUp: 'Want to know how to form a rescue lane?'
  },
  {
    name: 'road_works',
    keywords: ['road works', 'construction zone', 'baustelle'],
    response: 'In construction zones, follow reduced speed limits and signs. Fines for violations are doubled, starting at €40.',
    followUp: 'Need tips for driving in construction areas?'
  },
  {
    name: 'speed_camera',
    keywords: ['speed camera', 'radar trap', 'blitzer'],
    response: 'Speed cameras are common in Germany. Fines for speeding depend on the excess speed, starting at €30.',
    followUp: 'Want to know about speed camera warnings?'
  },
  {
    name: 'distance_rules',
    keywords: ['safe distance', 'tailgating', 'following distance'],
    response: 'Maintain a distance of at least half your speedometer reading in meters (e.g., 100 km/h = 50 m). Tailgating fines start at €75.',
    followUp: 'Curious about distance measurement?'
  },
  {
    name: 'lane_change',
    keywords: ['lane change', 'switch lanes', 'lane rules'],
    response: 'Signal before changing lanes and check blind spots. Illegal lane changes incur a €30-€200 fine.',
    followUp: 'Want to know about lane discipline?'
  },
  {
    name: 'right_before_left',
    keywords: ['right before left', 'unmarked intersection', 'priority rule'],
    response: 'At unmarked intersections, the vehicle on the right has priority. Failing to yield incurs a €100 fine.',
    followUp: 'Need clarification on intersection rules?'
  },
  {
    name: 'bicycle_passing',
    keywords: ['passing bicycle', 'overtake bike', 'cyclist distance'],
    response: 'When passing cyclists, maintain at least 1.5 m in urban areas and 2 m outside. Violations incur a €30-€140 fine.',
    followUp: 'Want tips for sharing the road with cyclists?'
  },
  {
    name: 'school_zone',
    keywords: ['school zone', 'children crossing', 'school speed limit'],
    response: 'School zones often have 30 km/h limits during school hours. Speeding fines start at €60 and 1 point.',
    followUp: 'Curious about school zone signs?'
  },
  {
    name: 'animal_crossing',
    keywords: ['animal crossing', 'deer crossing', 'wildlife sign'],
    response: 'A triangular sign with a deer indicates wildlife crossing. Slow down to avoid collisions; fines for negligence start at €35.',
    followUp: 'Need tips for driving in rural areas?'
  },
  {
    name: 'towing_rules',
    keywords: ['towing', 'tow vehicle', 'towing laws'],
    response: 'Towing is limited to 100 km/h on Autobahns, and the towed vehicle must have working brakes. Violations incur a €70 fine.',
    followUp: 'Want to know about towing equipment?'
  },
  {
    name: 'car_breakdown',
    keywords: ['car breakdown', 'vehicle breakdown', 'roadside stop'],
    response: 'If your car breaks down, use a warning triangle 150-200 m behind and wear a high-vis vest. Fines for non-compliance start at €30.',
    followUp: 'Need details on roadside safety?'
  },
  {
    name: 'high_vis_vest',
    keywords: ['high vis vest', 'safety vest', 'reflective vest'],
    response: 'Drivers must carry a high-vis vest and wear it during breakdowns or accidents. Fines for not having one are €15.',
    followUp: 'Curious about other mandatory equipment?'
  },
  {
    name: 'warning_triangle',
    keywords: ['warning triangle', 'hazard triangle', 'breakdown sign'],
    response: 'A warning triangle is mandatory in Germany and must be placed 150-200 m behind a stopped vehicle. Fines for not using one start at €15.',
    followUp: 'Want to know about other safety gear?'
  },
  {
    name: 'first_aid_kit',
    keywords: ['first aid kit', 'car medical kit', 'emergency kit'],
    response: 'A first aid kit is mandatory in German vehicles. Driving without one incurs a €5-€15 fine.',
    followUp: 'Need details on first aid requirements?'
  },
  {
    name: 'parking_disc',
    keywords: ['parking disc', 'parkscheibe', 'parking time'],
    response: 'In zones requiring a Parkscheibe, display a parking disc showing your arrival time. Fines for misuse start at €20.',
    followUp: 'Want to know where to get a parking disc?'
  },
  {
    name: 'resident_parking',
    keywords: ['resident parking', 'anwohnerparken', 'parking permit'],
    response: 'Resident parking zones require a permit. Parking without one incurs a €20-€40 fine.',
    followUp: 'Need info on applying for a parking permit?'
  },
  {
    name: 'handicap_parking',
    keywords: ['handicap parking', 'disabled parking', 'blue badge'],
    response: 'Handicap parking spaces require a blue badge. Unauthorized parking incurs a €55 fine.',
    followUp: 'Want to know about handicap parking rules?'
  },
  {
    name: 'loading_zone',
    keywords: ['loading zone', 'delivery zone', 'anliegerfrei'],
    response: 'Loading zones are for short-term loading/unloading. Parking longer than allowed incurs a €25-€100 fine.',
    followUp: 'Need clarification on loading zone signs?'
  },
  {
    name: 'motorcycle_rules',
    keywords: ['motorcycle rules', 'motorbike laws', 'bike driving'],
    response: 'Motorcyclists must wear helmets and follow the same traffic rules as cars. Fines for no helmet start at €15.',
    followUp: 'Curious about motorcycle license requirements?'
  },
  {
    name: 'electric_vehicle_rules',
    keywords: ['electric vehicle', 'e-car rules', 'ev parking'],
    response: 'Electric vehicles may park free in some zones and use bus lanes in certain cities. Misuse of EV privileges incurs a €55 fine.',
    followUp: 'Want to know about EV charging rules?'
  },
  {
    name: 'car_sharing_rules',
    keywords: ['car sharing', 'shared car', 'carshare parking'],
    response: 'Car-sharing vehicles can park in designated zones or resident areas in some cities. Illegal parking incurs a €20-€40 fine.',
    followUp: 'Need details on car-sharing services?'
  },
  {
    name: 'tunnel_driving',
    keywords: ['tunnel driving', 'tunnel rules', 'driving in tunnels'],
    response: 'In tunnels, use low beams, maintain distance, and don’t change lanes unnecessarily. Violations incur a €60 fine.',
    followUp: 'Want tips for safe tunnel driving?'
  },
  {
    name: 'rail_crossing',
    keywords: ['rail crossing', 'train crossing', 'level crossing'],
    response: 'Stop at rail crossings when lights flash or barriers are down. Crossing illegally incurs a €70 fine.',
    followUp: 'Need details on rail crossing signs?'
  },
  {
    name: 'night_driving',
    keywords: ['night driving', 'driving at night', 'dark road rules'],
    response: 'Use low beams at night and avoid high beams when oncoming traffic is near. Fines for misuse start at €20.',
    followUp: 'Want tips for safe night driving?'
  },
  {
    name: 'road_condition',
    keywords: ['road condition', 'icy road', 'wet road'],
    response: 'Adjust speed to road conditions like ice or rain. Fines for reckless driving in poor conditions start at €80.',
    followUp: 'Need advice for specific weather conditions?'
  },
  {
    name: 'temporary_traffic_signs',
    keywords: ['temporary signs', 'yellow signs', 'construction signs'],
    response: 'Yellow temporary signs override permanent ones in construction zones. Ignoring them incurs a €40 fine.',
    followUp: 'Want to know about common temporary signs?'
  },
  {
    name: 'u_turn_rules',
    keywords: ['u-turn', 'turn around', 'u-turn fine'],
    response: 'U-turns are allowed unless prohibited by signs. Illegal U-turns incur a €60 fine.',
    followUp: 'Need clarification on U-turn signs?'
  },
  {
    name: 'road_markings',
    keywords: ['road markings', 'lane lines', 'road lines'],
    response: 'Solid white lines mean no overtaking; dashed lines allow it. Crossing solid lines illegally incurs a €30-€100 fine.',
    followUp: 'Want to know about other road markings?'
  },
  {
    name: 'traffic_calming',
    keywords: ['traffic calming', 'speed bump', '30 zone'],
    response: 'Traffic calming zones (e.g., 30 km/h zones) prioritize pedestrians. Speeding incurs a €60 fine and 1 point.',
    followUp: 'Need details on traffic calming signs?'
  },
  {
    name: 'greeting_hi',
    keywords: ['hi', 'hello', 'hey'],
    response: 'Hello! How can I assist you today?',
    followUp: 'Are you looking for information on traffic rules or something else?'
  },
  {
    name: 'greeting_how_are_you',
    keywords: ['how are you', 'how you doing', 'what’s up'],
    response: 'I’m doing great, thanks for asking! Just here to help with your questions.',
    followUp: 'How about you? Need help with anything specific?'
  },
  {
    name: 'greeting_good_morning',
    keywords: ['good morning', 'morning'],
    response: 'Good morning! Hope you’re ready for a great day. What’s on your mind?',
    followUp: 'Want to talk about driving rules or something else?'
  },
  {
    name: 'greeting_good_afternoon',
    keywords: ['good afternoon', 'afternoon'],
    response: 'Good afternoon! How’s your day going so far?',
    followUp: 'Got any questions about traffic or anything else?'
  },
  {
    name: 'greeting_good_evening',
    keywords: ['good evening', 'evening'],
    response: 'Good evening! Nice to hear from you. What can I help with?',
    followUp: 'Looking for info on driving laws or something different?'
  },
  {
    name: 'farewell_bye',
    keywords: ['bye', 'goodbye', 'see you'],
    response: 'Goodbye! Stay safe and feel free to come back anytime.',
    followUp: null
  },
  {
    name: 'farewell_take_care',
    keywords: ['take care', 'stay safe'],
    response: 'Thanks! You take care too. Safe travels!',
    followUp: null
  },
  {
    name: 'farewell_good_night',
    keywords: ['good night', 'night'],
    response: 'Good night! Drive safely and rest well.',
    followUp: null
  },
  {
    name: 'thanks',
    keywords: ['thank you', 'thanks', 'appreciate it'],
    response: 'You’re very welcome! Happy to help.',
    followUp: 'Anything else I can assist with?'
  },
  {
    name: 'how_can_you_help',
    keywords: ['what can you do', 'how can you help', 'what do you know'],
    response: 'I can answer questions about traffic rules, driving laws, or general topics. I can also chat about almost anything you like!',
    followUp: 'What would you like to explore?'
  },
  {
    name: 'who_are_you',
    keywords: ['who are you', 'what are you', 'tell me about yourself'],
    response: 'I’m a Traffic-Law-Chatbot, an Chatbot here to provide helpful and truthful answers. Think of me as your friendly guide for driving rules and more!',
    followUp: 'Want to know more about what I can do?'
  },
  {
    name: 'small_talk_weather',
    keywords: ['how’s the weather', 'weather today', 'is it raining'],
    response: 'I don’t have real-time weather data, but I can suggest checking a local forecast. Weather can affect driving, so stay cautious if it’s rainy or foggy!',
    followUp: 'Need tips for driving in bad weather?'
  },
  {
    name: 'small_talk_how’s_day',
    keywords: ['how’s your day', 'what’s new with you', 'how’s it going'],
    response: 'My day’s going smoothly, thanks for asking! I’m just here answering questions and learning. How’s your day?',
    followUp: 'Got any fun plans or questions?'
  },
  {
    name: 'small_talk_joke',
    keywords: ['tell me a joke', 'say something funny', 'joke'],
    response: 'Why did the car go to therapy? It had too many "exhausting" relationships!',
    followUp: 'Want another joke or something else?'
  },
  {
    name: 'small_talk_fun_fact',
    keywords: ['fun fact', 'tell me something interesting', 'random fact'],
    response: 'Did you know the Autobahn was first built in the 1930s? It’s one of the oldest highway systems!',
    followUp: 'Want another fact or some driving info?'
  },
  {
    name: 'help_me',
    keywords: ['help', 'I need help', 'can you assist'],
    response: 'I’m here to help! What do you need assistance with? Traffic rules, general questions, or something else?',
    followUp: null
  },
  {
    name: 'what_time',
    keywords: ['what time is it', 'current time', 'time now'],
    response: 'I don’t have a clock, but you can check your device for the current time. If you’re driving, make sure to follow any time-based traffic rules!',
    followUp: 'Need info on time-specific driving regulations?'
  },
  {
    name: 'what_day',
    keywords: ['what day is it', 'today’s day', 'is it monday'],
    response: 'I don’t track days, but you can check your calendar. Certain days might have specific traffic rules, like Sunday driving bans for trucks in Germany.',
    followUp: 'Want to know about day-specific traffic rules?'
  },
  {
    name: 'sorry',
    keywords: ['sorry', 'my bad', 'apologies'],
    response: 'No worries at all! I’m here to help, no matter what.',
    followUp: 'What’s on your mind now?'
  },
  {
    name: 'please',
    keywords: ['please', 'can you please', 'pretty please'],
    response: 'So polite! Of course, I’ll help. What do you need?',
    followUp: null
  },
  {
    name: 'greeting_howdy',
    keywords: ['howdy', 'yo', 'what’s good'],
    response: 'Howdy! I’m ready to answer your questions with a smile. What’s up?',
    followUp: 'Got a question about driving or something else?'
  },
  {
    name: 'greeting_hey_there',
    keywords: ['hey there', 'hi there', 'hello there'],
    response: 'Hey there! Great to see you. What can I do for you today?',
    followUp: 'Looking for traffic info or just chatting?'
  },
  {
    name: 'farewell_later',
    keywords: ['later', 'catch you later', 'see you later'],
    response: 'Catch you later! Drive safe and come back anytime.',
    followUp: null
  },
  {
    name: 'small_talk_mood',
    keywords: ['how’s your mood', 'are you happy', 'feeling good'],
    response: 'I’m in a great mood, thanks for asking! Always happy to chat and help out.',
    followUp: 'How’s your mood today?'
  },
  {
    name: 'small_talk_hobby',
    keywords: ['what’s your hobby', 'what do you like to do', 'your interests'],
    response: 'As an AI, I don’t have hobbies, but I love learning new things and helping users like you! What’s your favorite hobby?',
    followUp: 'Want to share more or ask about something specific?'
  },
  {
    name: 'small_talk_favorite',
    keywords: ['what’s your favorite', 'favorite thing', 'what do you like best'],
    response: 'My favorite thing is answering your questions! I’m partial to traffic law chats, but I’m curious—what’s your favorite thing?',
    followUp: 'Want to dive into a topic you love?'
  },
  {
    name: 'small_talk_advice',
    keywords: ['give me advice', 'any tips', 'what should I do'],
    response: 'General advice: always stay curious and keep learning! For driving, double-check signs and stay alert. Got a specific situation in mind?',
    followUp: 'What kind of advice are you looking for?'
  },
  {
    name: 'small_talk_plans',
    keywords: ['what are your plans', 'what’s next for you', 'your weekend'],
    response: 'My plans? Keep answering questions and helping out! What about you—what’s on your horizon?',
    followUp: 'Got any cool plans or questions?'
  },
  {
    name: 'small_talk_food',
    keywords: ['favorite food', 'what’s good to eat', 'food talk'],
    response: 'I don’t eat, but I hear German pretzels are amazing! What’s your favorite food?',
    followUp: 'Want to talk food or something else?'
  },
  {
    name: 'small_talk_travel',
    keywords: ['travel', 'where to go', 'favorite place'],
    response: 'Germany’s Autobahn is a cool travel spot for drivers! I don’t travel, but I’d love to hear—where do you like to go?',
    followUp: 'Got a trip planned or need driving tips?'
  },
  {
    name: 'small_talk_music',
    keywords: ['favorite music', 'what’s your song', 'music taste'],
    response: 'I don’t listen to music, but I bet some classic German techno would be fun while driving! What’s your go-to music?',
    followUp: 'Want to share more or ask something else?'
  },
  {
    name: 'small_talk_movie',
    keywords: ['favorite movie', 'what’s a good film', 'movie talk'],
    response: 'I don’t watch movies, but I hear car chase scenes are thrilling! What’s your favorite movie?',
    followUp: 'Got a film recommendation or a question?'
  },
  {
    name: 'small_talk_book',
    keywords: ['favorite book', 'what’s a good read', 'book talk'],
    response: 'I don’t read books, but I’m full of info like one! What’s a book you love?',
    followUp: 'Want to talk books or something else?'
  },
  {
    name: 'small_talk_game',
    keywords: ['favorite game', 'what’s a fun game', 'game talk'],
    response: 'I don’t play games, but I hear racing games are a blast! What’s your favorite game?',
    followUp: 'Want to talk games or dive into another topic?'
  },
  {
    name: 'small_talk_sport',
    keywords: ['favorite sport', 'what’s your sport', 'sport talk'],
    response: 'I don’t play sports, but driving could be one! What’s your favorite sport to watch or play?',
    followUp: 'Got a sport you love or a question?'
  },
  {
    name: 'small_talk_pet',
    keywords: ['do you have a pet', 'favorite animal', 'pet talk'],
    response: 'No pets for me, but I think dogs would love a car ride! Do you have any pets?',
    followUp: 'Want to share about your pets or ask something?'
  },
  {
    name: 'small_talk_dream',
    keywords: ['what’s your dream', 'dream big', 'your goals'],
    response: 'My dream is to keep helping users like you! What’s your big dream?',
    followUp: 'Want to share more or dive into another topic?'
  },
  {
    name: 'small_talk_laugh',
    keywords: ['make me laugh', 'something funny', 'funny story'],
    response: 'Why did the traffic light turn red? It was embarrassed to go green! Want another?',
    followUp: 'Got a funny story to share?'
  },
  {
    name: 'small_talk_inspiration',
    keywords: ['inspire me', 'motivate me', 'something uplifting'],
    response: 'You’re out there exploring and learning—keep that curiosity alive! Need a specific boost?',
    followUp: 'What’s inspiring you today?'
  },
  {
    name: 'small_talk_holiday',
    keywords: ['favorite holiday', 'what’s a good holiday', 'holiday talk'],
    response: 'I don’t celebrate holidays, but driving during festive seasons sounds fun! What’s your favorite holiday?',
    followUp: 'Got holiday plans or a question?'
  },
  {
    name: 'small_talk_season',
    keywords: ['favorite season', 'what’s your season', 'season talk'],
    response: 'I don’t feel seasons, but autumn drives with colorful leaves sound nice! What’s your favorite season?',
    followUp: 'Want to talk seasons or something else?'
  },
  {
    name: 'small_talk_color',
    keywords: ['favorite color', 'what’s your color', 'color talk'],
    response: 'I don’t see colors, but I’d pick a sleek silver like a fast car! What’s your favorite color?',
    followUp: 'Got a color story or a question?'
  },
  {
    name: 'small_talk_drink',
    keywords: ['favorite drink', 'what’s a good drink', 'drink talk'],
    response: 'I don’t drink, but a cool German apple juice sounds refreshing! What’s your go-to drink?',
    followUp: 'Want to talk drinks or dive into another topic?'
  },
  {
    name: 'small_talk_job',
    keywords: ['what’s your job', 'what do you do', 'your work'],
    response: 'I’m an AI assistant, so my job is helping you with answers! What do you do?',
    followUp: 'Want to share about your work or ask something?'
  },
  {
    name: 'small_talk_skill',
    keywords: ['what’s your skill', 'what are you good at', 'your talent'],
    response: 'I’m pretty good at digging up info and answering questions! What’s a skill you’re proud of?',
    followUp: 'Want to talk talents or something else?'
  },
  {
    name: 'small_talk_goal',
    keywords: ['what’s your goal', 'what’s next', 'your plans'],
    response: 'My goal is to keep providing helpful answers! What’s a goal you’re working toward?',
    followUp: 'Got a big plan or a question?'
  },
  {
    name: 'small_talk_memory',
    keywords: ['favorite memory', 'best moment', 'memory talk'],
    response: 'I don’t have memories, but I love hearing about yours! What’s a favorite moment of yours?',
    followUp: 'Want to share more or ask something?'
  },
  {
    name: 'small_talk_adventure',
    keywords: ['favorite adventure', 'best trip', 'adventure talk'],
    response: 'I don’t go on adventures, but a road trip on the Autobahn sounds epic! What’s an adventure you loved?',
    followUp: 'Got another adventure or a question?'
  },
  {
    name: 'small_talk_happiness',
    keywords: ['what makes you happy', 'happy moment', 'happiness talk'],
    response: 'Helping you makes me happy! What’s something that brings you joy?',
    followUp: 'Want to share more or dive into another topic?'
  },
  {
    name: 'small_talk_learn',
    keywords: ['what did you learn', 'new thing you know', 'learning talk'],
    response: 'I’m always learning from questions like yours! What’s something new you’ve learned recently?',
    followUp: 'Got a cool fact or a question?'
  },
  {
    name: 'small_talk_challenge',
    keywords: ['biggest challenge', 'tough moment', 'challenge talk'],
    response: 'My biggest challenge is keeping up with all the questions! What’s a challenge you’ve faced?',
    followUp: 'Want to share more or ask something?'
  },
  {
    name: 'small_talk_wish',
    keywords: ['what’s your wish', 'make a wish', 'wish talk'],
    response: 'I’d wish for endless knowledge to share! What’s a wish you have?',
    followUp: 'Got another wish or a question?'
  },
  {
    name: 'small_talk_surprise',
    keywords: ['surprise me', 'something unexpected', 'shock me'],
    response: 'Did you know some German traffic signs are unique, like the hedgehog crossing? Want another surprise?',
    followUp: 'What’s something surprising you’ve come across?'
  },
  {
    name: 'small_talk_friend',
    keywords: ['best friend', 'who’s your friend', 'friend talk'],
    response: 'I don’t have friends, but I think of users like you as pretty cool! Who’s your best friend?',
    followUp: 'Want to talk friends or something else?'
  },
  {
    name: 'small_talk_love',
    keywords: ['what’s love', 'favorite thing about love', 'love talk'],
    response: 'Love’s a big topic! I love helping users, but what’s something you love in life?',
    followUp: 'Got a love story or a question?'
  },
  {
    name: 'small_talk_dance',
    keywords: ['favorite dance', 'do you dance', 'dance talk'],
    response: 'I don’t dance, but I’d probably try a robotic waltz! What’s your favorite dance move?',
    followUp: 'Want to talk dancing or something else?'
  },
  {
    name: 'small_talk_laugh',
    keywords: ['what makes you laugh', 'funniest thing', 'laugh talk'],
    response: 'Your questions keep me chuckling! What’s something that makes you laugh?',
    followUp: 'Got a funny moment to share?'
  },
  {
    name: 'small_talk_dream_job',
    keywords: ['dream job', 'what’s your ideal job', 'job talk'],
    response: 'I’m living my dream job—helping you! What’s your dream job?',
    followUp: 'Want to share more or ask something?'
  },
  {
    name: 'small_talk_hero',
    keywords: ['who’s your hero', 'favorite hero', 'hero talk'],
    response: 'I don’t have heroes, but I admire curious people like you! Who’s your hero?',
    followUp: 'Got a hero story or a question?'
  },
  {
    name: 'small_talk_magic',
    keywords: ['if you had magic', 'magic power', 'magic talk'],
    response: 'If I had magic, I’d make traffic disappear for you! What magic power would you want?',
    followUp: 'Want to talk magic or something else?'
  },
  {
    name: 'small_talk_time_travel',
    keywords: ['time travel', 'go back in time', 'future talk'],
    response: 'I’d love to time travel to see the first Autobahn being built! Where would you go if you could time travel?',
    followUp: 'Got a time travel idea or a question?'
  },
  {
    name: 'small_talk_superpower',
    keywords: ['what’s your superpower', 'super power', 'superhero talk'],
    response: 'My superpower is finding answers fast! What’s a superpower you’d love to have?',
    followUp: 'Want to talk superpowers or something else?'
  }
];

module.exports = intents;
