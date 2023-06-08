
/*  let num = prompt("Input a number to check if it is divisible by 2");
    let numberIsEven = false;

    numberIsEven = evenNumberChecker(num);

    function evenNumberChecker(num){


        if (num%2 == 0){
            return true;
        } 

    }

    if (numberIsEven == true){
    
        alert("The number " + num + " is even");

    }
    
    else{

        alert("The number " + num + " is odd");

    }*/

/*I'm thinking of what to name this variable in this arrow function
Input the number
Get the remainder of the number divided by 2. If it is zero, return even */


isNumberEven = (number) => {

    if (number % 2 === 0){
        return true;
    }

    return false;

    }

console.log(isNumberEven(3));
