var mqtt = require ("mqtt");
var Gpio = require('onoff').Gpio;
var LED = new Gpio(4, 'out');
var my_topic_name = 'ezzaffa88/feeds/button';
var my_topic_name2 = 'ezzaffa88/feeds/led';

var client = mqtt.connect("https://io.adafruit.com",{
    port : 1883,
    username : "ezzaffa88",
    password :"62837ffa2eda476d96cc0c6ea4281432"
});
client.on('connect',()=>{
    client.subscribe(my_topic_name);
    console.log("connected to :"+my_topic_name);
    client.subscribe(my_topic_name2);
    console.log("connected to :"+my_topic_name2);
})
client.on('error',(error)=>{
    console.log("mqtt Client errored");
    console.log(error);
})
client.on("message",(topic,message)=>{
    console.log("new change On : "+ topic +"...");
    console.log(" New Value is   : "+message.toString())
    if (topic ==my_topic_name2 && message > 0 )
    {
        var blinkInterval = setInterval(blinkLED, 250);
        function blinkLED() { //function to start blinking
            if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
              LED.writeSync(1); //set pin state to 1 (turn LED on)
            } else {
              LED.writeSync(0); //set pin state to 0 (turn LED off)
            }
          }

function endBlink() { //function to stop blinking
    clearInterval(blinkInterval); // Stop blink intervals
    LED.writeSync(0); // Turn LED off
    //LED.unexport(); // Unexport GPIO to free resources
    
 }
  setTimeout(endBlink, 5000);
   }
   
})


       


  