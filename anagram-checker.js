/*Problem 4: Anagram Check

Given two strings, determine if they are anagrams. Anagrams are words or 
phrases formed by rearranging the letters of another word or phrase.*/

/* LEARNINGS
-hash[key] returns the value of the key
-To get the keys of a hash, we can use Object.keys(hash)
-To see if another hash has the same key as another, we can use the
    hash.hasOwnProperty(key)*/

function anagramCheck(string1, string2){
    // Assign keys and values to the hashes through our custom function
    let string1Letters = getLetterCount(string1);
    let string2Letters = getLetterCount(string2);

    // Set the keys1 variable to not make it too long
    // This variables holds the letters(keys) of our first hash
    let keys1 = Object.keys(string1Letters);

    // If the number of keys do not match, return false
    if(keys1.length != Object.keys(string2Letters).length){
        return false;
    }

    // Iterate over the keys of the first string
    for(let key of keys1){

        //If the other hash does not have the same key, return false
        if(!string2Letters.hasOwnProperty(key)){
            return false;
        }

        // They have the same letters, but do they have the same number 
        // of those letters?
        
        // return false

        if(string1Letters[key] != string2Letters[key]){
            return false;
        }

    }
    
    //If it's all good, return true
    return true;

}

function getLetterCount(string){
    let letterCount = {};

    for (let i = 0; i < string.length; i++) {
        
        if(string[i] in letterCount) letterCount[string[i]]++
        else letterCount[string[i]] = 1;         
        

    }

    return letterCount;

}

console.log(anagramCheck("applebee", "aeeeplbp")); 