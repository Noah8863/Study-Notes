//Problem - Given an array of integers, sort the array. The array

//const arr = [-6, 20, 8, -2, 4];
//mergeSort(arr) -> Should return [-6, -2, 4, 8, 20]

//Merge Sort Idea

/**

1) Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted)

2) Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array. 

Example:
    
    const array = [-6, 20, 8, -2, 4]

    - Split the array into sub arrays;
    [-6, 20]     [8, -2, 4]

    Do the arrays contain only one element? No, continue making sub arrays;

    [-6]  [20]  [8]  [-2, 4]

    Continue to make sub arrays until ALL elements are in seperate arrays;

    [-6]  [20]  [8]  [-2]  [4]

    Now we merge the sub arrays into NEW sub arrays while insuring the elements are sorted

    [-6, 20]  [8]  [-2, 4]

    [-6, 20]  [-2, 4, 8]

    [-6, -2, 4, 8, 20]

*/

//Solution

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    const middle = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, middle)
    const rightArr = arr.slice(middle)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr){
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr)) // [-6, -2, 4, 8, 20]


//Time Complexity: O(nlogn)  best time complextity while sorting