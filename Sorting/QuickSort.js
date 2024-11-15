// Quick Sort in JavaScript
// Quick Sort is a highly efficient sorting algorithm that employs the divide and conquer strategy. 
// It works by selecting a "pivot" element from the array and partitioning the other elements into two subarrays 
// according to whether they are less than or greater than the pivot. The subarrays are then sorted recursively.


// How Quick Sort Works:
// Choose a pivot element from the array.
// Partition the array into two halves:
// Elements less than the pivot.
// Elements greater than the pivot.
// Recursively apply the above steps to the subarrays.
// Combine the sorted subarrays and the pivot to get the final sorted array.
// Quick Sort Implementation in JavaScript
// Here’s how you can implement Quick Sort in JavaScript:


function quickSort(arr) {
    // Base case: if the array is empty or has one element, it is already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Choose the pivot (here we take the last element as the pivot)
    const pivot = arr[arr.length - 1];
    const left = []; // Elements less than the pivot
    const right = []; // Elements greater than the pivot
  
    // Partitioning the array
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]); // Push to left array
      } else {
        right.push(arr[i]); // Push to right array
      }
    }
  
    // Recursively sort the left and right arrays and combine with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
  }