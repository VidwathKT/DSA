// Merge Sort in JavaScript
// Merge Sort is a highly efficient sorting algorithm that uses the divide and conquer approach to sort elements. 
// It divides the array into smaller subarrays, sorts those subarrays, and then merges them back together in 
// sorted order.

// How Merge Sort Works:
// Divide: Split the array into two halves until each subarray contains a single element.
// Conquer: Recursively sort the two halves.
// Combine: Merge the two sorted halves into a single sorted array.
// Merge Sort Implementation in JavaScript
// Here’s how you can implement Merge Sort in JavaScript:


function mergeSort(arr) {
    // Base case: if the array has one or zero elements, it is already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Sort the left half
    const right = mergeSort(arr.slice(mid)); // Sort the right half
  
    // Merge the sorted halves
    return merge(left, right);
  }
  
  // Helper function to merge two sorted arrays
  function merge(left, right) {
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Merge until one of the arrays is exhausted
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        sortedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        sortedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate any remaining elements from both arrays
    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }