/* Implement a function that reverses a string. For example, 
if the input is "hello", the function should return "olleh".*/

let reversedText = (string) => {
    let reversedText = "";
    
    for (let i = string.length - 1; i >= 0; i--) {
        reversedText += string[i];
    }

    return reversedText;

}

// console.log(reversedText("Hello"));


let isPalindrome = (string) => {
    wordIsPalindrome = false;
    let reversedText = "";
    
    for (let i = string.length - 1; i >= 0; i--) {
        reversedText += string[i];
    }

    if(reversedText === string){
        wordIsPalindrome = true;
    }
    
    return wordIsPalindrome;

}

console.log(isPalindrome("bob"));