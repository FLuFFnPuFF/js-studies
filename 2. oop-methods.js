/* Object methods

Objects can also contain methods, these methods can perform certain actions 
or computations on the object's data

*/

let person = {

    firstName: "Genaro III", 
    lastName: "Villarin", 
    address: "Davao City",

    /*  We define the property 'getFirstName' as a function that returns the 
        object's first name*/
    getFirstName: function() {
        return (this.firstName).toUpperCase();
    }
    
    
}

// To access object methods, we call the object name(person), then the method name(getFirstName())
console.log(person.getFirstName());
