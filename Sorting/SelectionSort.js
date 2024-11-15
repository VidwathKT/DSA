// Selection Sort in JavaScript
// Selection Sort is a simple and intuitive sorting algorithm that works by repeatedly selecting the 
//smallest (or largest, depending on the desired order) element from the unsorted portion of the array 
//and moving it to the beginning (or end) of the sorted portion.

// How Selection Sort Works:
// Start with the first element as the minimum.
// Compare this minimum with the next element. If the next element is smaller, update the minimum.
// Continue this for the entire array.
// Swap the minimum found with the first element of the unsorted portion.
// Move to the next element and repeat the process for the rest of the array until the entire array is sorted.
// Selection Sort Implementation in JavaScript
// Here's how you can implement Selection Sort in JavaScript:


function selectionSort(arr) {
    let n = arr.length;
  
    // Loop through the entire array
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i; // Assume the minimum is the first element of the unsorted portion
  
      // Find the minimum element in the unsorted portion
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j; // Update minIndex if a smaller element is found
        }
      }
  
      // Swap the found minimum element with the first element of the unsorted portion
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr; // Return the sorted array
  }