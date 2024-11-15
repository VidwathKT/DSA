//Insertion Sort in JavaScript

//Insertion Sort is a simple and intuitive sorting algorithm that builds a sorted array (or list) 
//one element at a time. It is much less efficient on large lists than more advanced algorithms like Quick Sort,
// Heap Sort, or Merge Sort.

// How Insertion Sort Works:
// Start with the second element. Assume the first element is already sorted.
// Compare the current element (key) with the elements in the sorted portion (to the left).
// Shift all larger elements to the right.
// Insert the key at its correct position in the sorted portion.
// Repeat for all elements in the array.
// Insertion Sort Implementation in JavaScript
// Here's how you can implement Insertion Sort in JavaScript:


function insertionSort(arr) {
    let n = arr.length;
  
    // Loop through each element starting from the second element
    for (let i = 1; i < n; i++) {
      let key = arr[i]; // The element to be inserted
      let j = i - 1; // The last index of the sorted portion
  
      // Shift elements of the sorted portion that are greater than key
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; // Move the larger element to the right
        j--; // Move to the previous element
      }
      // Insert the key at its correct position
      arr[j + 1] = key;
    }
  
    return arr; // Return the sorted array
  }