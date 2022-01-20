(function () {
    // hoisting in javascript is: the compiler reserves
    // space in memory for variables on an initial pass through code
    console.log(myCrazyVariable);

    var myCrazyVariable = 5;

    console.log(myCrazyVariable);

    console.log("got here");

    var myMovie = {
        "name" : "Bad Boys",
        "actors": [
            "Martin Lawrence",
            "Somebody else"
        ],
        "year" : "1999"
    }

    console.log(myMovie);

    cowSays('moo');
    function cowSays(sound){
        console.log(sound);
    }
})();
// this is an IIFE (function (){})();
// an immediately invoked function expression
// used in JS to avoid polluting the global scope