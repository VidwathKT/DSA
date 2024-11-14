const arr = [3, 7, 2, 9, 5, 7, 1];

// Array Creation and Basic Properties
console.log("Array length:", arr.length); // Get array length

// Searching and Accessing
console.log("Element at index 1:", arr[1]); // Access by index
console.log("Index of 7:", arr.indexOf(7)); // First index of a value
console.log("Last index of 7:", arr.lastIndexOf(7)); // Last index of a value
console.log("Includes 5:", arr.includes(5)); // Check if an element exists
console.log("Find element > 5:", arr.find(num => num > 5)); // Find element by condition
console.log("Find index of element > 5:", arr.findIndex(num => num > 5)); // Find index by condition

// Adding and Removing Elements
arr.push(10); // Add to end
console.log("After push:", arr);
arr.pop(); // Remove from end
console.log("After pop:", arr);
arr.unshift(0); // Add to beginning
console.log("After unshift:", arr);
arr.shift(); // Remove from beginning
console.log("After shift:", arr);

// Slicing and Splicing
console.log("Slice (index 1 to 3):", arr.slice(1, 3)); // Extract a portion
arr.splice(2, 1, 8); // Remove and replace at index
console.log("After splice:", arr);

// Sorting and Reversing
arr.sort((a, b) => a - b); // Sort in ascending order
console.log("Sorted array:", arr);
arr.reverse(); // Reverse the order
console.log("Reversed array:", arr);

// Iterating
console.log("Using forEach:");
arr.forEach((num, index) => console.log(`Index ${index}: ${num}`));

// Mapping, Reducing, and Filtering
const doubled = arr.map(num => num * 2); // Map elements to new values
console.log("Mapped (doubled) array:", doubled);
const sum = arr.reduce((acc, num) => acc + num, 0); // Sum up elements
console.log("Reduced (sum) value:", sum);
const filtered = arr.filter(num => num > 4); // Filter elements by condition
console.log("Filtered array (elements > 4):", filtered);

// Other Methods
const nestedArray = [1, [2, [3, 4]]];
console.log("Flattened array:", nestedArray.flat(2)); // Flatten nested arrays
const textArray = ["hello", "world"];
console.log("Joined array:", textArray.join(" ")); // Join elements to form a string

// Copying and Filling
const copiedArray = arr.slice(); // Copy array
console.log("Copied array:", copiedArray);
copiedArray.fill(0, 1, 3); // Fill with a value from start to end index
console.log("Filled array:", copiedArray);
