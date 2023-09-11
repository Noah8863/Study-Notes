//A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. 

//Example: 
isPrime(5) = true (1*5 || 5*1)
isPrime(4) = false (1*4 || 2*2 || 4*1) //False because it can can be expressed as 2*2

//Problem - Given a natural number 'n', detemine if the number is prime or not.
function isPrime(n) {
    if(n < 2){
        return false;
    }
    for(let i = 2; i < 2; i++ ){ //i=2 since every number is divisiable by 1
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false

//Big-O = O(n) time complexity ^^^


function isPrime(n) {
    if(n < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++ ){ //i=2 since every number is divisiable by 1
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

//Big-O = O(sqrt(n))  because as 'n' gets bigger, the for loop has to execute less ^^^

/**
Explaination: Integers larger than the square root do not need to be checked because 
whenever 'n=a*b', one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'
*/

//For example, if 'n' is 100, we check/run the for loop till 'n' is equal to 10
//If 'n' is 1000, we check till 'n' is equal to 100
