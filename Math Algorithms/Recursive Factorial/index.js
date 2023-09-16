//Problem: Give an integer 'n', find the factorial of that integer

//Factorial of a non-negative number 'n' is the product of all positive integers less than or equal to 'n'. 

//Examples: 
// 5! = 5*4*3*2*1
// 4! = 4*3*2*1
//0! = 1

//Overall equal for a factorial number is n! = n * (n-1)!

function Factorial(n) {
    if (n === 0 ){
        return 1
    }
    return n * Factorial(n-1)
}

console.log(Factorial(1)) //1
console.log(Factorial(5)) //120


//Big-O = O(n)