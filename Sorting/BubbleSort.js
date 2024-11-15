// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

// How Bubble Sort Works:
// Start at the beginning of the array.
// Compare the first two elements. If the first element is greater than the second, swap them.
// Move to the next pair of adjacent elements and repeat the process until the end of the array is reached.
// After each pass, the largest element "bubbles up" to its correct position.
// Repeat the process for the entire array until no swaps are needed.
// Bubble Sort Implementation in JavaScript
// Here's how you can implement Bubble Sort in JavaScript:

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
  
    // Loop through the array
    do {
      swapped = false; // Reset the swapped flag for each pass
      for (let i = 0; i < n - 1; i++) {
        // Compare adjacent elements
        if (arr[i] > arr[i + 1]) {
          // Swap if they are in the wrong order
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true; // Set swapped to true if a swap occurs
        }
      }
      // Reduce n for optimization (the last element is sorted)
      n--;
    } while (swapped); // Continue until no swaps are made
  
    return arr; // Return the sorted array
  }