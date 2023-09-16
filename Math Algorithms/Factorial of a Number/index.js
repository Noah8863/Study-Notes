//In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'

//Probem: Give an integer 'n', find the factorial of that integer

factorial(4) = 24   // factorial(4) = 4*3*2*1 = 24
factorial(5) = 120  // factorial(5) = 5*4*3*2*1 = 24

function factorial(n){
    let result = 1
    for(let i = 2; i <= n; i++){ //We start with let i=2 because multipling by 1 has no effect
        result = result * i
        // result starts at 1
        // i starts at 2
        //So result becomes = 1*2 = 2
        //Then result becomes 2, and i becomes 3 because of the i++ condition
        //So result becomes = 2*3 = 6
        //3! = 6
    }
    return result
}

console.log(factorial(0)) //1
console.log(factorial(4)) //24
console.log(factorial(5)) //120

//Big-O = O(n)

//More in-depth explaination behind the for loop logic 
// For n = 5:

// result starts at 1.
// In the loop:
// i is initially 2, so result becomes 1 * 2 = 2.
// i becomes 3, so result becomes 2 * 3 = 6.
// i becomes 4, so result becomes 6 * 4 = 24.
// i becomes 5, so result becomes 24 * 5 = 120.
// The loop ends because i is no longer less than or equal to 5.
// The function returns result, which is 120. 5! = 120