// Linear Search in JavaScript
// Linear Search is the simplest search algorithm. It sequentially checks each element of the list until a match is found or the whole list has been searched. 
// It works for both sorted and unsorted lists.

// Linear Search Algorithm:
// Start at the first element.
// Compare each element with the target value.
// If a match is found, return the index.
// If the target value is not found, return -1.
// Code Implementation of Linear Search in JavaScript:

// Linear Search function
function linearSearch(arr, target) {
    // Loop through the array to find the target
    for (let i = 0; i < arr.length; i++) {
      // Check if the current element matches the target
      if (arr[i] === target) {
        return i; // Return the index if the target is found
      }
    }
    return -1; // Return -1 if the target is not found
  }
  
  // Example usage:
  const array = [10, 23, 45, 70, 11, 15];
  const target = 70;
  const result = linearSearch(array, target);
  
  if (result !== -1) {
    console.log(`Element found at index: ${result}`);
  } else {
    console.log("Element not found in the array");
  }