'use strice';


const {v4: uuidv4 } =require('uuid');
const { randFullName, randCity, randCountry } = require( '@ngneat/falso' );
const events = require('./events.js');
require('./pilot.js');



setInterval(() => {
    setTimeout(() => {

      const flightDetails = {
        airLine: 'Royal Jordanian Airlines',
        pilot: randFullName(),
        destination: `${randCountry()} , ${randCity()}` ,
        flightID: uuidv4(),
        time: new Date(),
        };
      console.log(`manager: new flight with ID ${flightDetails.flightID} have been scheduled`);
      events.emit('New-flight', flightDetails);
    });
  },10000);

  events.on('Arrived', (payload) => {
    console.log(`manager: We’re greatly thankful for the amazing flight, Jane doe`, payload.pilot);
  });

