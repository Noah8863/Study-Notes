//This is a binary search with a recursive function

//Problem - Given a *sorted* array of 'n' elements and a targer element 't', find the index of 't' in the array.
//Return -1 if the target element is not found.

//Examples;
arr = [-5, 2, 4, 6, 10]; //t = 10 -> should return 4
arr = [-5, 2, 4, 6, 10]; //t = 6 -> should return 3
arr = [-5, 2, 4, 6, 10]; //t = 20 -> should return -1

function recursiveBinarySearch(target, arr) {
    return search(target, arr, 0, arr.length - 1);     //0 is the first element in the array, arr.length - 1 is the last element in the array
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){   //No more elements in the array so return -1 -> element was not found
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]){
        return middleIndex
    }

    if(target < arr[middleIndex]){
        return search(arr, target, leftIndex, middleIndex - 1)  //the middleIndex - 1 is looking at the left side of the array recursively
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)  //this returns the right half of the array recursively
    }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) //4

//Big-O = O(logn)  --> Because with each recursive iteration, we are taking away half of the input size