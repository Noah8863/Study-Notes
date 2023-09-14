//An integer is a power of two if there exists an integer 'x' such that 'n' === 2x

//Problem: Give a positive integer 'n', determine if the number is a power of 2 or not. 


isPowerOfTwo(1) = true(2^0)
isPowerOfTwo(2) = true(2^1)
isPowerOfTwo(5) = false


function  isPowerOfTwo(n){
    if( n < 1 ){     //Instantly get rid of any negative numbers or 0
        return false;
    }
    while( n < 1 ){
        if( n % 2 !== 0 ){  //If the number is divided all the way to 0, return false
        return false;
        }
        n = n/2;    //Otherwise, n = n/2
    }
    return true;  
}

//Big-O = O(logn)   Because the input size is reduced by half every iteration

console.log(isPowerOfTwo(1)); //true
console.log(isPowerOfTwo(2)); //true
console.log(isPowerOfTwo(5)); //fasle



function isPowerOfTwoBitWise(n){
    if( n < 1 ){     //Instantly get rid of any negative numbers or 0
        return false;
    }
    return (n & (n-1)) === 0 
}