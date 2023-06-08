let sum = (x, y) => {return x+y};

console.log(sum(1, 2));

let square = (num) => {return num * num};

console.log(square(5));

let factorial = (num) => {
    if(num === 0 || num === 1){
        return 1;
    }

    // My misconception is, if return is called, the function stops in its tracks.
    // But since this is a recursion, it does not stop yet, the function calls itself
    
    return num * factorial(num-1);

    // The lower part of the recursion gets called only after the top part is finished

};

console.log(factorial(3));