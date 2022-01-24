(function () {

    function funWithNumbers(values) {
        let start = null,
            count = 0,
            tempArray = null,
            theArray = 0;
        for (let i = 0; i <= values.length; ++i) {
            if(values[i] + 1 === values[i + 1] && start === null) {
                start = i;
            }
            if(start !== null) {
                if (values[i] + 1 === values[i + 1]) {
                    count++;
                }
                else {
                    count++;
                    tempArray = values.slice(start,start + count);
                    
                    start = null;
                    count = 0;
                }
            }
            if(tempArray !== null) {
                if(tempArray.length > theArray.length || theArray.length === undefined) {
                    theArray = tempArray;
                    tempArray = null;
                }
                else if(tempArray.length === theArray.length) {
                    console.log(tempArray);
                    let tempSum = 0,
                        Sum     = 0;
                    for (let j = 0; j < tempArray.length; j++) {
                        tempSum += tempArray[j];
                    }
                    for (let k = 0; k < tempArray.length; k++) {
                        Sum += theArray[k];
                    }              
                    if(tempSum > Sum) {
                        theArray = tempArray;
                        tempArray = null;
                    }
                }
                else {
                    tempArray = null;
                }
            }
        }

        let sum = 0;
        for (let i = 0; i < theArray.length; i++) {
            sum += theArray[i];
        }
        return sum;
    }

    let testArray = [4,2,10,3,11,14,8]
    let anArray = [1,2,3,6,9,34,2,6];
    let anotherArray = [3,2,7,5,6,7,3,8,9,10,23,2,1,2,3];
    let lastArray = [100,101,102,3,4,5,6,9];

    console.log(funWithNumbers(testArray));
    console.log(funWithNumbers(anArray));
    console.log(funWithNumbers(anotherArray));
    console.log(funWithNumbers(lastArray));

})();