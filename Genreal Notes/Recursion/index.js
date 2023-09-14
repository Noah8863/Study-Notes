//What?
//Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem. 
//Recursion is when a function calls itself


//Why?
//A great technique to simplify your solution
//If you find yourself breaking down your problem into smaller versions of the same problem, recursion is very useful. 


//Analogy

//Imagine you have a set of Russian nesting dolls, 
//your task is to find the tiniest doll within the set. Here's how you might approach it using recursion:

/**
Start with the largest doll in your hand, which represents the original problem (e.g., finding the smallest doll in the set).

Open the largest doll, revealing a slightly smaller doll inside. 
This smaller doll now becomes a new version of the original problem (finding the smallest doll within this smaller set).

Repeat the process: Open the smaller doll to find an even smaller doll inside, and again, this becomes a new instance of the same problem (finding the smallest doll in an even smaller set).

Continue this process until you eventually find the tiniest doll, which is your solution.

In this analogy, each new doll you encounter represents a smaller, more focused version of the same problem. The process continues recursively until you reach a base case (the tiniest doll), at which point you can directly solve the problem without further recursion.
*/


