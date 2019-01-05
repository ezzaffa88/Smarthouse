var mqtt = require ("mqtt");
var my_topic_name3 = 'ezzaffa88/feeds/Senzor';

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


    var client = mqtt.connect("https://io.adafruit.com",{
    port : 1883,
    username : "ezzaffa88",
    password :"62837ffa2eda476d96cc0c6ea4281432"
});

client.on('connect',()=>{
  setInterval(()=>{
    client.publish(my_topic_name3,senzValue)
        console.log("Sent to server "+senzValue)
},1000)
})
client.on('error',(error)=>{
  console.log("mqtt Client errored");
  console.log(error);
})

    

//port.write('ROBOT POWER ON\n') old baudrate-- 256000