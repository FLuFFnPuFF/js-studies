
function addition(num1, num2){
    
    if(isNaN(num1) || isNaN(num2)){

        return "Invalid input";

    }

    return sum = parseInt(num1) + parseInt(num2);

}

result = addition(prompt("Input the first number"), prompt("Input the second number"));

alert(result);