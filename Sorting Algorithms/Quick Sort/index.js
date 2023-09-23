//Problem - Given an array of integers, sort the array. The array

//const arr = [-6, 20, 8, -2, 4];
// quickSort(arr) -> Should return [-6, -2, 4, 8, 20]

//Main Idea for Quick Sort 

/**
1) Indentify the pivot element in the array

You can do this by either;
    - Pick first element as pivot
    - Pick last element as pivot
    - Pick a random element as pivot
    - Pick median as pivot

2) Put everything that's smaller than the pivor into a 'left' array and everything that's greater than the pivot into a 'right' array

3) Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition

4) Repeatedly concatenate the left array, pivot and right array till one sorted away
*/

//Example of how this works visually

/** 

Start with an array of [-6, 20, 8, -2, 4]

In this example, we will take the last element in each iteration as the pivot element

4 -> is the pivot element in this case

We check the elements and sort them in a 'left' and 'right' array depending on the pivot. 

    - So -6 and -2 is in the left array
    - And 8 and 20 is in the right array

Now we have 2 new arrays;

left = [-6, -2]  &  right = [8, 20]

Again, we will take the last element of each array as the pivot and sort again. 

-2 becomes the pivot which makes -6 the new 'left' array with an empty 'right' array
20 becomes the new pivot with makes 8 the new 'left' array with the 'right' array also empty. 

Now that we have a single element array -> We start to concatenate

[-6, -2] && [8, 20]  --> 4 is greater than 'left' but less than 'right' 

[-6, -2, 4, 8, 20] is the final sorted array
*/