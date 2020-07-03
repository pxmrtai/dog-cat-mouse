var Cat = require('./cat')
var mouse = require ('./mouse')
var dog = require('./dog')


var cat = new Cat()
var mouse = new mouse('mickey')
var dog = new dog();
try {
    cat.eat(dog)
} catch (error) {
    console.log('Error while cat eating a dog');
    
}

console.log(cat);


