(function () {
    /* Write a JavaScript program to iterate through an array of 
    ten(10) positive randomly generated numbers. 
    Each number will then be checked to see if it’s a prime number.
    */

    arrayPrimeCheck([23,15,22,124,11,9,2,13,5,1]);
    arrayPrimeCheck([1,10,5,9,11,10002323,999,777]);

    function arrayPrimeCheck(values) {
        results = "";
        values.forEach(checkIfPrime);

        // cleaning up the trailing comma
        results = results.slice(0,results.length - 2);

        console.log(results);
    }

    function checkIfPrime(num) {
        // primes are integers greater than one with no positive divisors besides one and itself
        if (num < 2) {
            results += num + "-no, ";
            return;
        }

        let numRoot = Math.sqrt(num)
        
        for (let i = 2; i <= numRoot; i++) {
            // if num has remainder === 0 when divided by any number between 2 and its square root
            // it is not prime
            if (num % i === 0) {
                results += num + "-no, ";
                return;
            }
        }
        // if it passes previous conditionals it is prime.   
        results += num + "-yes, ";
    }
    
})();