// function (msg,errorCode){ console.log(msg + errorCode);} function
// () => { console.log(msg + errorCode);} Arrow function
// these are equivalent
// function() {return "blah";}
// () => "blah"

// Arrow IIFE
// (()=>{

// window.onload event bound to my anonymous function
// window.onload = () => {
//     var myTargetDiv = document.querySelector("#myDiv");
//     var timerDelay = 5000;

//     var sayHello4 = () => {
//         myTargetDiv.innerHTML += ('Hello, from callback function')
//     } // end sayHello4

//     setTimeout(sayHello4,timerDelay);
// }

// Named function binding
var init = () => {

    const x = 3; // const is also block scoped

    if(x===3){
        const z = 2;
        let y = 4; // var is NOT block scoped; let is block scoped
        y += x;

        console.log(x);
        console.log("y is " + y);
        console.log(z);
    }

    console.log(x);
    console.log(z);
    console.log("y is " + y);
    

    // var myFirstName = "bryce";

    // var myFunction = () => {
    //     console.log("Hello, " + myFirstName + "!");
    // }; // end myFunction

    // myFunction();

    var myTargetDiv = document.querySelector("#myDiv");
    var timerDelay = 5000;

    var sayHello4 = () => {
        myTargetDiv.innerHTML += ('Hello, from callback function')
    } // end sayHello4

    setTimeout(sayHello4,timerDelay);
} // end init
// named function binding to onload
window.onload = init; 

// })(); // END OF IIFE



// // cannot call function expression before it is defined
// sayHello2();
// //JS arrow function expression
// let sayHello2 = () => {
//     console.log("hello from arrow function expression");
// }
// // can call declared function after it is defined
// sayHello2();

// // cannot call function expression before it is defined
// sayHello();
// // JS function expression
// let sayHello = function() {
//     console.log("hello, from function expression");
// }
// // can call declared function after it is defined
// sayHello();