// JavaScript provides two powerful data structures, Set and Map, that allow efficient storage and retrieval of unique values and key-value pairs, respectively. These structures were introduced in ES6 (ECMAScript 2015) and offer more flexibility than traditional arrays and objects.

// 1. Set in JavaScript
// A Set is a collection of unique values (no duplicates allowed). It allows you to store any type of value, whether primitive types or object references.

// Characteristics of Set:
// No duplicates: A Set automatically removes any duplicate values.
// Order of insertion: Elements in a Set are iterated in the order of their insertion.
// Size: You can easily retrieve the number of elements using the size property.
// Methods and Properties of Set:
// add(value): Adds a new element to the Set.
// delete(value): Removes the specified element from the Set.
// has(value): Returns true if the value exists in the Set, false otherwise.
// clear(): Removes all elements from the Set.
// size: Returns the number of elements in the Set.
// forEach(): Executes a function for each element in the Set.

// Example of Set:

// Create a new Set
const mySet = new Set();

// Add values to the Set
mySet.add(1);
mySet.add(5);
mySet.add(1);  // Duplicate, will be ignored
mySet.add('hello');
mySet.add({ name: 'John' });

// Check if values exist in the Set
console.log(mySet.has(5)); // true
console.log(mySet.has(10)); // false

// Get the size of the Set
console.log(mySet.size); // 4

// Iterate over the Set
mySet.forEach(value => {
  console.log(value);
});

// Remove a value from the Set
mySet.delete(1);

// Clear the Set
// mySet.clear();
// console.log(mySet.size); // 0
// Output:
// true
// false
// 4
// 1
// 5
// hello
// { name: 'John' }
// 0