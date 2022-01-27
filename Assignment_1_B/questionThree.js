(function () {
    /* Write a JavaScript program to calculate the number of 
    weeks, days, hours, minutes and seconds left until midnight on your birthday.
    */

    // my next birthday is jan 3 2023
    const myBirthday = new Date(2023, 0, 03, 0, 0, 0, 0);
    
    // the current datetime
    const date = new Date();
    // subtracting these results in the time to my birthday in milliseconds.
    let timeToBirthday = myBirthday - date;
    
    // 1 second is 1000 milliseconds, floored to the nearest second, so on and so forth.
    let seconds = Math.floor(timeToBirthday / 1000),
    minutes = Math.floor(seconds / 60),
    hours   = Math.floor(minutes / 60),
    days    = Math.floor(hours / 24),
    weeks   = Math.floor(days / 7);
    
    // calculating the remainder in relation to the week.
    // 7 days in a week, 24 hours in a day , etc.

    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    days %= 7;
    
    console.log("There are %d weeks, %d days, %d hours, %d minutes, and %d seconds until my next birthday!",weeks,days,hours,minutes,seconds);

})();