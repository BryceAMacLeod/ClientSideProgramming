(function () {
    // hoisting is use before declaration
    console.log(myCrazyVariable);

    var myCrazyVariable = 5;

    console.log(myCrazyVariable);

    console.log("got here");
})();
// this is an IIFE (function (){})();
// an immediately invoked function expression
// used in JS to avoid polluting the global scope