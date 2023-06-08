
/*  Write a function that takes a string as input 
    and counts the number of vowels (a, e, i, o, u) 
    in the string. Return the count.


let string = prompt("Please enter a string");
let lowerCasedString = string;
lowerCasedString = lowerCasedString.toLowerCase();
let stringArray = Array.from(lowerCasedString);
let vowels = 0;

console.log(string);
console.log(lowerCasedString);
console.log(stringArray.length);

for(i = 0; i < stringArray.length; i++){

    console.log(stringArray[i]);

    if (stringArray[i] == 'a' || stringArray[i] == 'e' || 
    stringArray[i] == 'i' || stringArray[i] == 'o' || 
    stringArray[i] == 'u'){
        vowels++
    }

}

console.log(vowels);*/

function countVowels(string){
    let vowels = {};

    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'e' || 
            string[i] === 'i' || string[i] === 'o' || 
            string[i] === 'u') {
            
            if(string[i] in vowels) vowels[string[i]]++;    
            else vowels[string[i]] = 1;

        }    
    }

    return vowels;

}

console.log(countVowels("applebee"));