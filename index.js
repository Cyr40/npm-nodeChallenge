const info = require('./information');


var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${info.name} from ${info.campus} Campus!`,
    e : "oO",
    T : "U "
}));