
const io = require('socket.io')(3000);
const fire_io = io.of('/airlines');

io.on('connection', (socket) => {
socket.on('New-flight', (payload) => {
 io.emit('New-flight', payload);
 console.log(` Flight { 
    event: 'new-flight',
    time: ${payload.time}, 
    Details: {
     airLine: ${payload.airLine},
     flightID: ${payload.flightID},
     pilot: ${payload.pilot},
    }, 
    destination: ${payload.destination}
     }} `
     ); 
     
});

socket.on('arrived', (payload) => {
    io.emit('arrived', payload);
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
});

fire_io.on('connection', (socket) => {
socket.on('took-off', (payload) => {
    io.emit('took-off', payload);
    console.log(`Flight {
        event: 'took-off',
        time: ${payload.time},
        Details: {
            airLine: ${payload.airLine},
            flightID: ${payload.flightID},
            pilot: ${payload.pilot},
        },
        destination: ${payload.destination}
    }`);
});
});
