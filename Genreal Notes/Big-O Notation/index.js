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