/* Write a function that takes an array of numbers 
as input and returns the highest number in the array.*/

function returnHighest(array){

    if (array.length === 0) {
        return "Enter a value";
    }
        

    let highestValue = array[0];

    for(let i = 0; i < array.length; i++){

        if(highestValue < array[i]){
            highestValue = array[i];
        }

    }

    return highestValue;

}

console.log(returnHighest([1, 5, 3, 2, 8, 12, 33, 5, 3, 2, 1]));