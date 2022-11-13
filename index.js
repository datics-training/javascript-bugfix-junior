// Create a function that returns true if two arrays contain identical values, and false otherwise.

// The following code given

// Please test the code with these test cases:
// arr1 = [1, 2] and arr2 = [1, 3]
// arr2 = [1, 2] and arr2 = [1, 2]

// Explain the problem with the code, and make necessary correction to fulfill the requirement 

function checkEquals(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i = 0; i<arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

const arr1 = [1, 2];
const arr2 = [1, 3];

const arr3 = [1, 2];
const arr4 = [1, 2];

console.log(checkEquals(arr1, arr2));
console.log(checkEquals(arr3, arr4));