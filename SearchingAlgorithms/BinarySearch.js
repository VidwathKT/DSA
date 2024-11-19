// Binary Search in JavaScript
// Binary Search is a highly efficient algorithm for searching in a sorted array.
// The algorithm repeatedly divides the search space in half, comparing the target value with the middle element.
// If the middle element is equal to the target, the search is complete. 
// Otherwise, the algorithm eliminates half of the remaining elements and continues the search.

// How Binary Search Works:
// Compare the target value with the middle element of the array.
// If the target is equal to the middle element, return the index.
// If the target is smaller than the middle element, search the left half of the array.
// If the target is larger than the middle element, search the right half of the array.
// Repeat the process until the target is found or the search space is exhausted.
// Binary Search Implementation in JavaScript (Iterative Approach):

// Binary Search function (iterative)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // Find the middle index
      const mid = Math.floor((left + right) / 2);
  
      // Check if the target is at mid
      if (arr[mid] === target) {
        return mid; // Target found, return the index
      }
  
      // If target is smaller than mid, search the left half
      if (arr[mid] > target) {
        right = mid - 1;
      } 
      // If target is larger than mid, search the right half
      else {
        left = mid + 1;
      }
    }
  
    return -1; // Target not found
  }
  
  // Example usage:
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
  const target = 7;
  const result = binarySearch(sortedArray, target);
  
  if (result !== -1) {
    console.log(`Element found at index: ${result}`);
  } else {
    console.log("Element not found in the array");
  }