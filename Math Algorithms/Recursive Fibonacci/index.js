//Problem: Given a number 'n', find the nth element of the fibonacci sequence

recursiveFibonacci(0) = 0
recursiveFibonacci(1) = 1
recursiveFibonacci(6) = 8

recursiveFibArray = [0,1,1,2,3,5,8]

//The 6th number in the sequence is 8. Thus, resursiveFibonacci(6) = 8


function recursiveFibonacci(n){
    if ( n < 2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

//Time complexity: O(n^2)  --> Horrible preformance

//The reason recursive is bad preformance for the Fibonacci Sequence is due to the way it's solved. 

//If F represents a function to calculate the Fibonacci number, then:
//Fn = F (n-1) + F (n-2)

//F(7) would unfold like this:

/**

                            F7 = F6 - F5:
                                /       \
                              /          \
            F6 = F5 - F4        &&         F5 = F4 - F3
                /       \                      /       \
               /         \                    /         \ 
        F5 = F4 - F3    F4 = F3 - F2     F4 = F3 - F2    F3 = F2 - F1

*/

//Without solving all the way, this continues to be 64 calls total. Equalling to be 2^6
//Making the time complexity O(n^2)