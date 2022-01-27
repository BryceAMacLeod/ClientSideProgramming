// Jan 25th object literal notation
var me = {
    name: "bryce",
    age: 100,
    isRetired: false,
    favoriteShows: ['Star Trek et al', 'Breaking Bad', 'and many more'],
    address:{
        street: '123 main st',
        city: 'haligoonia'
    },
    someFunc: function(){
        console.log('someFunc')
    }
}

let meAsJSON = JSON.stringify(me);
console.log(meAsJSON);

let newMe = JSON.parse(meAsJSON);
console.log(newMe);

me.someFunc();
console.log(me.address.street);
console.log(me.favoriteShows);

// Jan 27th 
var me = {};

var me = new Object();

var me = Object.create(null);

me.sillyHat = true;
me.newFunction = function() {
    console.log(me.sillyHat);
}

me.newFunction();
console.log(me.sillyHat);

// define a blueprint for my object - no classses in JS yet (ES5)
var People = function(name) {
    this.name = name;
}

var joe = new People('joe');

console.log(joe);

function myFunction() {
    console.log('hello from my function');
}

myFunction.language = 'eng';
myFunction.subFunction = function (param){
    console.log(param + ' from my sub function');
}

myFunction.subFunction('hello');
myFunction();
myFunction.subFunction(myFunction.language);
