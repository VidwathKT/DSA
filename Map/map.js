// Map in JavaScript
// A Map is a collection of key-value pairs where both keys and values can be of any type. It allows for more flexible key types than JavaScript objects, where keys are strings or symbols by default.

// Characteristics of Map:
// Key-Value pairs: Each entry in a Map is stored as [key, value].
// Order of insertion: Keys are iterated in the order they were inserted.
// Unique keys: A Map does not allow duplicate keys (but values can be duplicated).
// Methods and Properties of Map:
// set(key, value): Adds or updates a key-value pair in the Map.
// get(key): Returns the value associated with the key.
// has(key): Returns true if the key exists in the Map, false otherwise.
// delete(key): Removes the key and its associated value.
// clear(): Removes all key-value pairs from the Map.
// size: Returns the number of key-value pairs in the Map.
// forEach(): Executes a function for each key-value pair in the Map.

// Example of Map:
// Create a new Map
const myMap = new Map();

// Add key-value pairs to the Map
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set('job', 'Developer');
myMap.set({id: 1}, 'Employee');

// Get values from the Map
console.log(myMap.get('name')); // Alice
console.log(myMap.get('age'));  // 25

// Check if a key exists
console.log(myMap.has('job')); // true
console.log(myMap.has('salary')); // false

// Get the size of the Map
console.log(myMap.size); // 4

// Iterate over key-value pairs in the Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Delete a key-value pair
myMap.delete('age');

// Clear the Map
myMap.clear();
console.log(myMap.size); // 0

// Output:
// Alice
// 25
// true
// false
// 4
// name: Alice
// age: 25
// job: Developer
// [object Object]: Employee
// 0