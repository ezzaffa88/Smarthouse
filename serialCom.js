//To install 'serialport' locally, enter the command:
//$ npm install serialport
//Otherwise, Error: Cannot find module 'serialport' will reported

const SerialPort = require("serialport").SerialPort
const serialport = require("serialport")
const serialPort =  SerialPort('/dev/ttyUSB0', 
    {   baudrate: 9600,
        dataBits: 8,
        parity: 'none',
        stopBits: 1,
        flowControl: false
    });

serialPort.on("open", function () {
    console.log('open');
    serialPort.on('data', function(data) {
        console.log('data received: ' + data);
        });
    /* serialPort.write("Hello from Raspberry Pi\n", function(err, results) {
        console.log('err ' + err);
        console.log('results ' + results);
        }); */
});