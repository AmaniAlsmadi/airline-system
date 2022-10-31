const events = require('./events.js');
require('./manager.js');
require('./pilot.js');

events.on('New-flight', (payload) => {
 console.log(` Flight { 
    event: 'new-flight',
    time: ${payload.time}, 
    Details: {
     airLine: ${payload.airLine},
     flightID: ${payload.flightID},
     pilot: ${payload.pilot},}, 
    destination: ${payload.destination}
     }} 
    `);
});

events.on('Take-off', (payload) => {
    console.log(`Flight {
        event: 'take-off',
        time: ${payload.time},
        Details: {
            airLine: ${payload.airLine},
            flightID: ${payload.flightID},
            pilot: ${payload.pilot},
        },
        destination: ${payload.destination}
    }`);
});

events.on('Arrived', (payload) => {
    console.log(`Flight {
        event: 'arrived',
        time: ${payload.time},
        Details: {
            airLine: ${payload.airLine},
            flightID: ${payload.flightID},
            pilot: ${payload.pilot},
        },
        destination: ${payload.destination}
    }`);
});