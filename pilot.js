const events = require('./events.js');
require('./manager.js');

events.on('New-flight', (payload) => {
    setTimeout(() => {
        console.log(`Pilot: flight with ID ${payload.flightID} took-off`);
        events.emit('Take-off', payload);
    }, 4000);

    setTimeout(() => {
        console.log(`Pilot: flight with ID ${payload.flightID} has arrived`);
        events.emit('Arrived', payload);
    },3000);
});
