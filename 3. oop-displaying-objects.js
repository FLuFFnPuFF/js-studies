let person = {
    
    firstName: "Genaro III", 
    lastName: "Villarin", 
    address: "Davao City"
    
}

/** 
 * To display object properties we can use different methods
 * Looping
 * Object.values()
 * JSON.stringify()
 * */ 
let personProperties = "";

// Method 1: Looping - This loops through the properties in the object
for (let property in person) {
    personProperties += property + ": " + person[property] + "\n";
}

console.log(personProperties);

// Method 2: Object.values() - This converts an object to an array
const array = Object.values(person);
console.log(array);

// Method 3: JSON.stringify() - This stringifies an object
const string = JSON.stringify(person);
console.log(string);

// BONUS: You can stringify the date
const today = new Date();
console.log(today);
