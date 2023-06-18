/**JavaScript Accessors
 * Getters and setters allow you to define Object Accessors
 * 
 * Getters - functions used to retrieve the value of a property
 *         - defined using the "get" keyword followed by a function definition
 *         - provides a more concise access to properties, may allow access to properties 
 *           without exposing the underlying logic. 
 */    

let person = {
    
    /*  An object contains values called properties. In the following example, the properties 
    of the person object are: firstName, lastName, address*/
    
    firstName: "Genaro III", 
    lastName: "Villarin", 
    address: "Davao City",

    get fullName() {
        return this.firstName + " " + this.lastName;
    },

    set changeName(name) {
        this.firstName = name;
    }
    
};

console.log(person.fullName);

person.changeName = "Aaron";

console.log(person.firstName);