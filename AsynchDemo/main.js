(function (){

    // say hello
    document.write("Hello.<br>"); // main thread of execution

    function myCallbackFunction(){
        document.write("GOODbye!<br>");
    }
    //setTimeout vs setInterval
    setInterval(function() { // main thread of execution
        document.write("Goodbye!<br>"); // new thread 
    }, 5000);

    setTimeout(function (){
        document.write("GOODBYE<br>");
    },12000);

    setTimeout(myCallbackFunction, 12000);

    // hello again!
    document.write("hello again!<br>"); // main thread

})();
