/** 

Big-O Notation is the worst case complexity of an algorithm. 

Big-O Notation describes the complexity of an algorithm using algebraic terms. 

It has two important characteristics:

 - It is expressed in terms of the input

 - It focuses on the bigger picture without getting caught up in the minute details. 

*/

//Example 

function summation(n){
    let sum = 0; //This will run once 
    for (let i = 1; i <= n; i++) {
        sum += i; //This will run as many times as n 
    }
    return sum; //This will also run once
}
/**
 * The function above has a total count of "n + 2"
 
 * If n is equal to 2, then the total count is 4
 * If n is equal to 100,000 then the total count is 100,002 
 
    - This is an example of how Big-O has a time complexity based on the input size 
*/

/**

- Time complexity

    - O(n) is linear 
    This means, as the size of the input increases, the time complexity also increases. 

 */


//This is considered O(1). Which is constant  
function summation(n){
    return (n * (n+1) /2); //This will only run once regardless of the size of the input
}


//This is O(n^2) - Quadratic
for (i = 1; i <= n; i++){
    for (j = 1; j <= n; j++){
        //Some Code   
    }
}

//This is O(n^3) - Cubic
for (i = 1; i <= n; i++){
    for (j = 1; j <= n; j++){
        for (k = 1; k <= n; k++){
            //Some Code   
        }  
    }
}


//This is O(logn) because on line 75, the input value is being divided by 2 every iteration. 
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

// ----------------------------------------------------------------------------------- //

// Big O Notation with Objects 

const person = {
    firstName: "Noah", 
    lastName: "Hoffman"
}

/**
    Looking at the time complexity with different actions:

    Insert: O(1)
    Remove: O(1)
    Access: O(1)
    Search: O(n) = Linear time complexity.  You may need to search the whole object for 'Hoffman' which would be (n). With (n) being the total data points in the object
    Oject.key(): O(n) = Linear time complexity.  Similar with finding the key of a particular data point in the object

*/

// ----------------------------------------------------------------------------------- //

// Big O Notation with Arrays 

const odd = [1,3,5,7,9,11,13]

/**
    Looking at the time complexity with different actions:

     Insert/Remove from the end: O(1)
     Insert/Remove from the beginning: O(n)  Because the index has to be reset for every element in the array
     Access: O(1)
     Search: O(n) = Linear time complexity because the element can be the last in the array
     Push/Pop: O(1) = Constant Time complexity
     Shift/unshift/Concat/Slice/Splice: O(n)
     Map/forEach/reduce/filter: O(n)

*/

//Using forEach with a callback function of forEach makes the time complexity quadratic 

function findPairsWithSum(arr, targetSum) {
    const result = [];
  
    arr.forEach((num1) => {             //O(n)^1
      arr.forEach((num2) => {           //O(n)^2  This second forEach makes the time complexity quadratic
        if (num1 + num2 === targetSum) {
          result.push([num1, num2]);
        }
      });
    });
  
    return result;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const target = 6;
  
  const pairs = findPairsWithSum(numbers, target);
  
  console.log(pairs); // Output: [ [ 1, 5 ], [ 2, 4 ], [ 3, 3 ], [ 4, 2 ], [ 5, 1 ] ]  