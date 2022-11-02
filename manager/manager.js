'use strice';


const { v4: uuidv4 } = require('uuid');
const { randFullName, randCity, randCountry } = require('@ngneat/falso');
const socket = require("socket.io-client").connect(`http://localhost:3000`);


setInterval(() => {
    const flightDetails = {
      airLine: 'Royal Jordanian Airlines',
      pilot: randFullName(),
      destination: `${randCountry()} , ${randCity()}`,
      flightID: uuidv4(),
      time: new Date(),
    };
    console.log(`manager: new flight with ID ${flightDetails.flightID} have been scheduled`);
    socket.emit('New-flight', flightDetails);
},10000);


 socket.on('arrived', (payload) => {
      console.log(`manager: We’re greatly thankful for the amazing flight`, payload.pilot);
    });
    