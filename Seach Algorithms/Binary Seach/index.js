//Problem - Given a *sorted* array of 'n' elements and a targer element 't', find the index of 't' in the array.
//Return -1 if the target element is not found.

//Examples;
arr = [-5, 2, 4, 6, 10]; //t = 10 -> should return 4
arr = [-5, 2, 4, 6, 10]; //t = 6 -> should return 3
arr = [-5, 2, 4, 6, 10]; //t = 20 -> should return -1

//Before solution
function binarySearch(arr, target) {
  let sortedArr = arr.sort(function (a, b) {  //Sort the arr before finding the target/index
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (sortedArr[i] === target) { //Similar to linear Search, after sorting the array, find the target and return the index. 
      return i;
    }
  }
  return -1;
}

console.log(binarySearch([-1, 2, 10, 4, 6], 6)) //3
console.log(binarySearch([-1, 2, 10, 4, 6], 10)) //4
console.log(binarySearch([10, 4, -1, 6, 2], 10)) //4     <- Even though the numbers are not sorted, the function still returns 4 after sorting then finding the index
console.log(binarySearch([-1, 2, 10, 4, 6], 20)) //-1


//Binary search pseduocode;
/**
If the array is empty, return -1 as the element cannot be found. 

If the array has elements, find the middle element in the array. If the target is equal to the middle element, return the middle element index. 

If target is less than the middle element, binary search left half of the array. 

If target is greater than middle element, binary search right half of the array. 
*/


//Retry after learning more about binary search
function ReBinarySearch(arr, target){
    let sortedArr = arr.sort(function (a,b){
        return a - b
    })
    let halfArr = sortedArr[Math.round((sortedArr.length - 1) /2 )]
    if (target === halfArr) {
        return halfArr;
    }
    if (target > halfArr){
      return 'right side being returned'   //Stopped here as I would have crazy amount of nested IF loops
    }
    if (target < halfArr){
      return 'left side being returned'
    }
}

console.log(ReBinarySearch([-1, 2, 4, 6, 10], 4)) //4
console.log(ReBinarySearch([-1, 2, 4, 6, 10], 2)) //left side being returned
console.log(ReBinarySearch([-1, 2, 10, 4, 6], 6)) //right side being returned


//Solution
function solutionBinarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length -1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if (target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(solutionBinarySearch([-5, 2, 4, 6, 10], 10))  // 4
console.log(solutionBinarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(solutionBinarySearch([-5, 2, 4, 6, 10], 20)) // -1


//Big O = O(logn)  because the input size is reduced by half with each iteration
//Time complexity is logarithmic