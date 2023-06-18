/* Object introduction

In JavaScript, objects are king. If you understand objects, you understand JavaScript.

Objects are variables that can contain multiple values

The properties contain values, these values assigned can be accessed outside the object

Object properties can be primitive values, other objects, and functions

*/

let person = {
    
    /*  An object contains values called properties. In the following example, the properties 
    of the person object are: firstName, lastName, address*/
    
    firstName: "Genaro III", 
    lastName: "Villarin", 
    address: "Davao City"
    
}

// We can access the property values by calling the object name(person), then the property(firstName)
console.log(person.firstName);

// We can also access properties by calling the objectName[propertyName] format
console.log(person["firstName"]);

// We can also access properties by calling the objectName[expression] format
const expression = "firstName";
console.log(person[expression]);

// Accessing properties through a loop
for (const propertyIndex in person) {
    console.log(person[propertyIndex]);        
}

// We can also modify the object's properties
person.firstName = "Joggy";

console.log(person.firstName);

/** The following are for after you finished your first reading of this guide*/

// We can also replace the primitive properties with methods
person.lastName = function() {
    return "Replaced";
}

console.log(person.lastName());

