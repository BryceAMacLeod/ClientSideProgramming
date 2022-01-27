(function () {
    /* Write a function in JavaScript that will return the sum of the longest
    streak of consecutive increasing numbers within an array. 
    If there are no consecutive numbers in the array, the function will return zero.
    If there are multiple instances of the same number of consecutive numbers (increasing by 1)
    in the array, the function will return the largest sum calculated between all instances.
    */

    let testArray = [4,2,10,3,11,14,8]
    
    let anArray = [1,2,3,6,9,34,2,6];

    let anotherArray = [3,2,7,5,6,7,3,8,9,10,23,2,1,2,3];

    let lastArray = [100,101,102,3,4,5,6,9];

    console.log(funWithNumbers(testArray));
    console.log(funWithNumbers(anArray));

    console.log(funWithNumbers(anotherArray));

    console.log(funWithNumbers(lastArray));

    function funWithNumbers(values) {   
        let start = null,
            count = 0,
            tempArray = null,
            theArray = 0;

            //looping through the entire array of values
        for (let i = 0; i <= values.length; ++i) {

            // checking to see if the current value (plus one) is equal to the next value in the array
            if (values[i] + 1 === values[i + 1] && start === null) {
                // starting index of consecutive numbers
                start = i;
            }

            if(start !== null) {
                if (values[i] + 1 === values[i + 1]) {
                    count++;
                }
                else {
                    count++;
                    // creating a sub array of the consecutive numbers in the array
                    tempArray = values.slice(start, start + count);
                    //reseting conditional variables to check for other consecutive sequences
                    start = null;
                    count = 0;
                }
            }

            if (tempArray !== null) {
                // checking to see if the current consecutive array is longer than the largest known. 
                // initially the known longest array of consecutive numbers is undefined
                if (tempArray.length > theArray.length || theArray.length === undefined) {
                    theArray = tempArray;
                    tempArray = null;
                }
                // if the temp array is the same length of consecutive numbers as the known longest array,
                // the elements of each array are summed and the sums are compared to see which is larger.
                else if (tempArray.length === theArray.length) {
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

        let finalSum = 0;
        for (let i = 0; i < theArray.length; i++) {
            finalSum += theArray[i];
        }

        return finalSum;
    }

})();