//Problem - Given an array of integers, sort the array.

//Bubble sort is not the best sorting algorithm in the real world!

const arr = [-6, 20, 8, -2, 4];

// bubbleSort(arr) -> Should return [-6, -2, 4, 8, 20]

//Overall Idea;

//Compare adjacent elements in the array and swap the positions if they are not in the intended order. This
//Repeat the instruction as you step through each element in the array
//Once you step through the whole array with no swaps, the array is sorted.

//Example of bubble sort;

const orginalArr = [-6, 20, 8, -2, 4]; //You start with the first index of the array and compare left to right.

// [-6, 20, 8, -2, 4] -> [-6, 8, 20, -2, 4] Swap since 20 > 8
// [-6, 8, 20, -2, 4] -> [-6, 8, -2, 20, 4] Swap since 20 > -2
// [-6, 8, 2, 20, 4] -> [-6, 8, -2, 4, 20] Swap since 20 > 4

//End of array? Elements swapped? Yes? Repeat the comparison

function bubbleSort(arr) {
  let swapped;
  do {
      swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      //arr.length - 1 because there is no need to compare the last element to a non-existent element in the array
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true
      }
    }
  } while (swapped); //while swapped is true, keep running the for loop
}

const arr1 = [-6, 20, 8, -2, 4];
bubbleSort(arr);
console.log(arr); //[-6, -2, 4, 8, 20]
