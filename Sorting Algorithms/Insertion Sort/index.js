//Problem - Given an array of integers, sort the array.



const arr = [-6, 20, 8, -2, 4];
// insertionSort(arr) -> Should return [-6, -2, 4, 8, 20]

//Overall idea for an insertion sort

/**

Virtually split the array into a sorted and an unsorted part

Assume that the first element is already sorted and remaining elements are unsorted

Select an unsorted element and compare with all elements in the sorted part

If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right. 

Insert the selected element at the right index

Repeast till all the unsorted elements are places in the right order
*/

//Visual to help understand what is happening

[-6, 20, 8, -2, 4]

//We start with the first index in the array, which is 20 in this case. We store 20 as a variable. NTI for exmaple. (Number to Insert)

//Next, we take the sorted part of the array, in this case it is -6, and store -6 as a variable SE. (Sorted Element). 

//Then we compare, -6 > 20? No, place 20 to the right of -6. 

[-6, 20, 8, -2, 4]
//Nothing has changed in our example. 

//Next we take 8, store it as NTI and 20 as SE first. 

//20 > 8? Yes, shift 20 to the right. 
//-6 > 8? No, place 8 to the right of -6. 

[-6, 8, 20, -2, 4]
//Now are array is sorted up to the 2nd index. 

//Continue this until we we reach the final element in the array. Then the array will be sorted. 