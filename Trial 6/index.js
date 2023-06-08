/*  Create a function that takes an array of strings as input and 
    returns a new array with the lengths of those strings. For example, 
    if the input is ["apple", "banana", "kiwi"], the function should 
    return [5, 6, 4].*/


function countArrayStringLength(array){
    let stringLength = [];

    for (let i = 0; i < array.length; i++) {
        stringLength.push(array[i].length);
    }

    return stringLength;

}


console.log(countArrayStringLength(["apple", "banana", "kiwi"]));