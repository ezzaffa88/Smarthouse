const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/ttyUSB1', { baudRate: 9600 })

const parser = new Readline()

port.pipe(parser)

    



let  message = null;

    parser.on('data', line =>{
         message = line
		console.log("im variable"+message) 
    } )
    

//port.write('ROBOT POWER ON\n') old baudrate-- 256000