// In JavaScript, objects are key-value pairs used to store data and functionalities. 
// They allow you to represent real-world entities and perform various operations like adding, updating, deleting,
// or retrieving properties. Below are the main operations you can perform on objects in JavaScript:

// 1. Creating an Object
// There are multiple ways to create an object in JavaScript:

// Object literal: The simplest and most common way.
// Constructor function or Object.create().

// Using object literal
let person1 = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  
  // Using Object.create()
  let anotherPerson = Object.create(person1);
  // 2. Accessing Object Properties
  // You can access object properties using dot notation or bracket notation:
  
  // Dot notation: object.property
  // Bracket notation: object["property"]
  
  let person2 = { name: "John", age: 30 };
  console.log(person2.name);          // Output: "John"
  console.log(person2["age"]);        // Output: 30
  // 3. Adding or Modifying Properties
  // You can add or modify properties dynamically after an object is created.
  
  
  let person = { name: "John" };
  
  // Add a new property
  person.age = 30;
  
  // Modify an existing property
  person.name = "Jane";
  
  console.log(person);  // Output: { name: "Jane", age: 30 }
  // 4. Deleting Properties
  // Use the delete keyword to remove properties from an object.
  
  
  let person = { name: "John", age: 30 };
  delete person.age;
  console.log(person);  // Output: { name: "John" }
  // 5. Checking if a Property Exists
  // You can check whether a property exists in an object using:
  // The in operator.
  // hasOwnProperty() method.
  
  let person = { name: "John", age: 30 };
  
  console.log("name" in person);         // Output: true
  console.log(person.hasOwnProperty("age"));  // Output: true
  // 6. Iterating over Object Properties
  // You can iterate over an object's properties using:
  // for...in loop: Loops through all enumerable properties of the object.
  // Object.keys(): Returns an array of the object's own property keys.
  // Object.values(): Returns an array of the object's own property values.
  // Object.entries(): Returns an array of key-value pairs.
  
  let person = { name: "John", age: 30 };
  
  // Using for...in loop
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  
  // Using Object.keys(), Object.values(), Object.entries()
  console.log(Object.keys(person));   // Output: ["name", "age"]
  console.log(Object.values(person)); // Output: ["John", 30]
  console.log(Object.entries(person));// Output: [["name", "John"], ["age", 30]]
  
  // 7.Cloning or Copying Objects
  // There are several ways to create a copy of an object:
  
  // Object.assign(): Shallow copies all enumerable properties.
  // Spread operator {...obj}: A shorthand for shallow copying.
  
  let person = { name: "John", age: 30 };
  
  // Using Object.assign()
  let copyPerson = Object.assign({}, person);
  
  // Using spread operator
  let clonePerson = { ...person };
  
  console.log(copyPerson);  // Output: { name: "John", age: 30 }
  console.log(clonePerson); // Output: { name: "John", age: 30 }
  // 8. Merging Objects
  // You can merge two or more objects into one using Object.assign() or the spread operator.
  
  let obj1 = { a: 1, b: 2 };
  let obj2 = { b: 3, c: 4 };
  
  // Using Object.assign()
  let mergedObj = Object.assign({}, obj1, obj2);
  
  // Using spread operator
  let mergedObj2 = { ...obj1, ...obj2 };
  
  console.log(mergedObj);  // Output: { a: 1, b: 3, c: 4 }
  console.log(mergedObj2); // Output: { a: 1, b: 3, c: 4 }
  
  // 9.Object Freezing and Sealing
  // Object.freeze(): Freezes an object so that it cannot be modified (no adding, deleting, or changing properties).
  // Object.seal(): Seals an object so that existing properties cannot be deleted, but their values can be modified.
  
  let person = { name: "John", age: 30 };
  
  // Freezing
  Object.freeze(person);
  person.age = 35;   // This won't change the value
  console.log(person.age);  // Output: 30
  
  // Sealing
  Object.seal(person);
  person.age = 35;   // This will modify the value
  console.log(person.age);  // Output: 35