// Linked List in JavaScript
// A linked list is a linear data structure where each element, called a node, contains two parts:

// Data: The value stored in the node.
// Next: A reference (or pointer) to the next node in the sequence.
// In contrast to arrays, linked lists do not use contiguous memory locations for storing their data. This makes insertion and deletion operations more efficient, especially at the beginning or middle of the list, as there is no need to shift elements like in arrays.

// Types of Linked Lists:
// Singly Linked List: Each node points to the next node.
// Doubly Linked List: Each node points to both the previous and next nodes (not covered in this example).
// In a singly linked list, the list consists of nodes, each having a reference to the next node, and the last node points to null, indicating the end of the list.

// Structure of a Singly Linked List:
// Head: Points to the first node in the list.
// Node: Each node contains data and a reference to the next node.
// Linked List Example in JavaScript
// Define a Node class to represent each node in the list
class Node {
    constructor(value) {
      this.value = value;  // Data stored in the node
      this.next = null;    // Pointer to the next node (initially null)
    }
  }
  
  // Define a LinkedList class
  class LinkedList {
    constructor() {
      this.head = null;    // Head of the list (initially null)
      this.size = 0;       // Keep track of the size of the list
    }
  
    // Add a node at the end of the list
    append(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        // If the list is empty, the new node becomes the head
        this.head = newNode;
      } else {
        // Traverse to the last node and add the new node
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Add a node at the beginning of the list
    prepend(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        newNode.next = this.head; // Point the new node's next to the current head
        this.head = newNode;      // Update the head to be the new node
      }
      this.size++;
    }
  
    // Print the linked list
    printList() {
      if (this.head === null) {
        console.log("The list is empty.");
        return;
      }
      let current = this.head;
      let listValues = "";
      while (current !== null) {
        listValues += current.value + " -> ";
        current = current.next;
      }
      listValues += "null";
      console.log(listValues);
    }
  
    // Get the size of the list
    getSize() {
      return this.size;
    }
  
    // Remove a node from the front of the list
    removeFirst() {
      if (this.head === null) {
        console.log("The list is empty.");
        return;
      }
      this.head = this.head.next;  // Move head to the next node
      this.size--;
    }
  
    // Find if a value exists in the list
    contains(value) {
      let current = this.head;
      while (current !== null) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  }
  
  // Example usage of the LinkedList class
  const list = new LinkedList();
  
  // Adding elements to the list
  list.append(10);  // Adds 10 to the end
  list.append(20);  // Adds 20 to the end
  list.prepend(5);  // Adds 5 to the beginning
  
  // Printing the list
  list.printList();  // Output: 5 -> 10 -> 20 -> null
  
  // Checking size of the list
  console.log("Size:", list.getSize());  // Output: Size: 3
  
  // Check if value exists in the list
  console.log("Contains 10?", list.contains(10));  // Output: true
  console.log("Contains 15?", list.contains(15));  // Output: false
  
  // Remove the first element
  list.removeFirst();
  list.printList();  // Output: 10 -> 20 -> null
  
  // Key Methods:
  // append(value): Adds a new node with the given value at the end of the list.
  // prepend(value): Adds a new node with the given value at the beginning of the list.
  // printList(): Prints the entire list from the head to the last node.
  // getSize(): Returns the size (number of nodes) of the list.
  // removeFirst(): Removes the first node from the list.
  // contains(value): Checks whether a node with a given value exists in the list.