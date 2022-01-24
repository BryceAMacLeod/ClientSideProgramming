(function () {
    /* If the first and last characters of a string
    are the same (ignoring case), the function will
    return the string in reverse order. 
    Otherwise, the function will return the 
    string with the first and last letters removed. */

    function funWithStrings(word) {
        // the word to be returned
        let newWord = "";
        // checking if first and last characters are the same
        if(word.charAt(0).toUpperCase().localeCompare(word.charAt(word.length - 1).toUpperCase()) === 0) {
            // reversing the word
            for(let i = word.length; i >= 0; --i){
                newWord += word.charAt(i);
            }   
            return newWord;
        }
        else {
            // removing the first and last letter of the word
            newWord = word.slice(1,(word.length - 1))
            return newWord;
        }
    }
    console.log(funWithStrings("Triscuit"));
})();