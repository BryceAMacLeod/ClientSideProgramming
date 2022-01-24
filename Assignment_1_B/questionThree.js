(function () {

    const myBirthday = new Date(2023, 0, 03, 0, 0, 0, 0);
    
    const date = new Date();
    let timeToBirthday = myBirthday - date;
    
    let seconds = Math.floor(timeToBirthday / 1000),
    minutes = Math.floor(seconds / 60),
    hours   = Math.floor(minutes / 60),
    days    = Math.floor(hours / 24),
    weeks   = Math.floor(days / 7);
    
    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    days %= 7;
    
    console.log("There are %d weeks, %d days, %d hours, %d minutes, and %d seconds until my next birthday!",weeks,days,hours,minutes,seconds);

})();