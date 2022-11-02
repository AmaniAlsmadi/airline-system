const socket = require('socket.io-client').connect(`http://localhost:3000`)
const socket2 = require('socket.io-client').connect(`http://localhost:3000/airlines`)


socket.on('New-flight', (payload) => {

    setTimeout(() => {
        console.log(`Pilot: flight with ID ${payload.flightID} took-off`);
        socket.emit('took-off', payload);
    }, 4000);

    setTimeout(() => {
        console.log(`Pilot: flight with ID ${payload.flightID} has arrived`);
        socket2.emit('arrived', payload);
    }, 3000);

});
