(function () {
    arrayPrimeCheck([23,15,22,124,11,9,2,13,5,1]);

    function arrayPrimeCheck(values){
        results = "";
        values.forEach(checkIfPrime);
        results = results.slice(0,results.length - 2);
        console.log(results);
    }
    function checkIfPrime(num) {
        if(num < 2) {
            results += num + "-no, ";
            return;
        }
        let m = Math.sqrt(num)
        for (let i = 2; i <= m; i++) {
            if (num % i === 0) {
                results += num + "-no, ";
                return;
            }
        }   
        results += num + "-yes, ";
    }
    
})();