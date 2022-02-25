// IIFE
(() => {

    // MY CODE HERE IS SAFE FROM GLOBAL CONTEXT
    
    // array manipulation functions
    const isEveryoneOfAge = (myInputArray) => {
        return myInputArray.every( (person) => person.age >= 18);
    };

    const getEveryoneOfAge = (myInputArray) => {
        // let newArray = [];

        // newArray = myInputArray.filter( (person) => person.age >= 18);

        // return newArray;

        return myInputArray.filter( (person) => person.age >= 18);

    };

    const findFirstPersonOfAge = (myInputArray) => {

        // let foundPerson = null;

        // foundPerson = myInputArray.find( (person) => person.age >= 18);

        // return foundPerson;

        return myInputArray.find( (person) => person.age >= 18);
    };

    const ageEveryoneOneYear = (myInputArray) => {

        // let newArray = [];

        // newArray = myInputArray.map( (person) => {
        //     return {
        //         name: person.name,
        //         age: person.age + 1
        //     }
        // });

        // return newArray;

        return myInputArray.map( (person) => {
            return {
                name: person.name,
                age: person.age + 1
            }
        });

    };

    const getSumOfAges = (myInputArray) => {
        
        return myInputArray.reduce( (total, person) => {
            total += person.age;
            return total;
        },0);
        
    };

    const getSumOfAgesOfAgeFolksAterAging = (myInputArray) => {

        return myInputArray
            .map( (person) => {
                return {
                    name: person.name,
                    age: person.age + 1
                }
            })
            .filter( (person) => person.age >= 18)
            .reduce( (total, person) => {
                total += person.age;
                return total;
            },0);

    };

    // my original array
    const myArray = [
        { name: "Thomas", age: 19},
        { name: "Noe", age: 17},
        { name: "Luc", age: 20}
    ];


    // I want a function to check if everyone is of age >= 18
    console.log("Is everyone of age? " + isEveryoneOfAge(myArray));

    // I want a function to retrieve everyone of age
    console.log("The list of all who are of age:");
    console.log(getEveryoneOfAge(myArray));

    // I want a function to find the first person of age
    console.log("Find first person of age:");
    console.log(findFirstPersonOfAge(myArray));

    // I want a function to age everyone one year
    console.log("The result of aging everyonme one year:");
    console.log(ageEveryoneOneYear(myArray));
    console.log("Original array?");
    console.log(myArray);

    // I want a function to sum everyone's age
    console.log("The sum of all ages is: " + getSumOfAges(myArray))

    // I want a function to sum everyone's age who are of age after aging them
    console.log("The sum of all ages of age folks is: " + getSumOfAgesOfAgeFolksAterAging(myArray))
})();