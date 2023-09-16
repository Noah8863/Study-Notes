//Problem: Given an array of 'n' elements and a target element 't', find the index of 't' in the array.
//Return -1 if the target element is not found

//Examples;

arr1 = [-1, 2, 10, 4, 6]; //t = 10 -> Should return 2
arr2 = [-1, 2, 10, 4, 6]; //t = 6 -> Should return 4
arr3 = [-1, 2, 10, 4, 6]; //t = 20 -> Should return -1

//Before solution answer
function findIndex(t) {
  const numberToFind = t;
  const index = arr1.indexOf(numberToFind);
  for (let i = 0; i < arr1.length; i++) {
    if (t !== arr1[i]) {
      //This iterates every single time t does not equal the index
      console.log(arr1[i]);
      console.log("Couldnt find anything");
    } else {
      console.log(`Index is ${index}`);
    }
  }
}

//Updated answer after some googling and writing it out
//Works!
function findIndex(t) {
  const numberToFind = t;
  const index = arr1.indexOf(numberToFind);
  for (let i = 0; i < arr1.length; i++) {
    if ((t = index)) {
      return index;    //Return the index that matches with t
    } else {
      return -1;  //return -1 if number is not in the array
    }
  }
}

console.log(findIndex(2)) //1
console.log(findIndex(10)) //2
console.log(findIndex(6)) //4
console.log(findIndex(20)) //-1

//Answer
function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
            //Cleaner code and easier to read
        }
    }
    return -1
}

//Big-O = O(n)  because it has one for loop. As the size of the array increases, the number of executions increase. 


//Solution makes the function/algorithm more dynamic by allowing the array to be passed through as a parameter
console.log(linearSearch([-1, 2, 10, 4, 6], 10)) //2
console.log(linearSearch([-1, 2, 10, 4, 6], 6)) //4
console.log(linearSearch([-1, 2, 10, 4, 6], 20)) //-1