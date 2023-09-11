//In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. 

//Example: 
fibonacci(2) = [0,1]
fibonacci(3) = [0,1,1]
fibonacci(7) = [0,1,1,2,3,5,8] //There are 7 numbers in the Fibonacci sequence where each number is the sum of the two preceding ones


//Problem: Give a number 'n', find the first 'n' elements of the Fibonacci sequence
function fibonacci(n) {
    const fib = [0,1]
    for(let i = 2; i < n; i++){   //If 'n' is equal to 3
        fib[i] = fib[i-1] + fib[i-2] // Then fib[3] = fib[3-1] + fib[3-2]
    }
    return fib
}

//Big-O = O(n)

console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1, 1]
console.log(fibonacci(7)) // [0,1, 1, 2, 3, 5, 8]