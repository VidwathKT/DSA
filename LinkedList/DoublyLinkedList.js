// A Doubly Linked List (DLL) is a type of linked list in which each node contains references to both the
//next and previous nodes. This allows traversal in both directions: forward and backward.

// Below is a complete implementation of a Doubly Linked List in JavaScript with the following operations:
// Append a node at the end.
// Prepend a node at the beginning.
// Insert a node at a specific index.
// Remove the first node.
// Remove the last node.
// Remove a node at a specific index.
// Print the list (both forward and backward).
// Get size of the list.

// Doubly Linked List in JavaScript
class Node {
    constructor(value) {
      this.value = value;     // Node's value
      this.next = null;       // Pointer to the next node
      this.prev = null;       // Pointer to the previous node
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;       // Head pointer (start of the list)
      this.tail = null;       // Tail pointer (end of the list)
      this.size = 0;          // Track the size of the list
    }
  
    // 1. Append a node at the end
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {  // If list is empty
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;   // Update tail
      }
  
      this.size++;
      console.log(`Appended ${value} to the list.`);
    }
  
    // 2. Prepend a node at the beginning
    prepend(value) {
      const newNode = new Node(value);
  
      if (!this.head) {  // If list is empty
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;  // Update head
      }
  
      this.size++;
      console.log(`Prepended ${value} to the list.`);
    }
  
    // 3. Insert a node at a specific index
    insertAt(value, index) {
      if (index < 0 || index > this.size) {
        console.log("Index out of range.");
        return;
      }
  
      const newNode = new Node(value);
  
      if (index === 0) {  // Inserting at the beginning
        this.prepend(value);
        return;
      }
  
      if (index === this.size) {  // Inserting at the end
        this.append(value);
        return;
      }
  
      let current = this.head;
      let counter = 0;
  
      while (counter < index) {
        current = current.next;
        counter++;
      }
  
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
  
      this.size++;
      console.log(`Inserted ${value} at index ${index}.`);
    }
  
    // 4. Remove the first node
    removeFirst() {
      if (!this.head) {
        console.log("The list is empty.");
        return;
      }
  
      const removedValue = this.head.value;
  
      if (this.size === 1) {  // Only one node in the list
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
  
      this.size--;
      console.log(`Removed the first node: ${removedValue}`);
    }
  
    // 5. Remove the last node
    removeLast() {
      if (!this.tail) {
        console.log("The list is empty.");
        return;
      }
  
      const removedValue = this.tail.value;
  
      if (this.size === 1) {  // Only one node in the list
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
  
      this.size--;
      console.log(`Removed the last node: ${removedValue}`);
    }
  
    // 6. Remove a node at a specific index
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        console.log("Index out of range.");
        return;
      }
  
      if (index === 0) {
        this.removeFirst();
        return;
      }
  
      if (index === this.size - 1) {
        this.removeLast();
        return;
      }
  
      let current = this.head;
      let counter = 0;
  
      while (counter < index) {
        current = current.next;
        counter++;
      }
  
      current.prev.next = current.next;
      current.next.prev = current.prev;
  
      const removedValue = current.value;
      this.size--;
      console.log(`Removed node at index ${index} with value: ${removedValue}`);
    }
  
    // 7. Print the list forward
    printForward() {
      if (!this.head) {
        console.log("The list is empty.");
        return;
      }
  
      let current = this.head;
      let result = "";
  
      while (current) {
        result += current.value + " <-> ";
        current = current.next;
      }
  
      console.log(result + "null");
    }
  
    // 8. Print the list backward
    printBackward() {
      if (!this.tail) {
        console.log("The list is empty.");
        return;
      }
  
      let current = this.tail;
      let result = "";
  
      while (current) {
        result += current.value + " <-> ";
        current = current.prev;
      }
  
      console.log(result + "null");
    }
  
    // 9. Get the size of the list
    getSize() {
      console.log(`The size of the list is: ${this.size}`);
    }
  }
  
  // Example usage
  const dll = new DoublyLinkedList();
  
  dll.append(10);
  dll.append(20);
  dll.prepend(5);
  dll.printForward();  // Output: 5 <-> 10 <-> 20 <-> null
  dll.printBackward(); // Output: 20 <-> 10 <-> 5 <-> null
  
  dll.insertAt(15, 2);
  dll.printForward();  // Output: 5 <-> 10 <-> 15 <-> 20 <-> null
  
  dll.removeFirst();
  dll.printForward();  // Output: 10 <-> 15 <-> 20 <-> null
  
  dll.removeLast();
  dll.printForward();  // Output: 10 <-> 15 <-> null
  
  dll.removeAt(1);
  dll.printForward();  // Output: 10 <-> null
  
  dll.getSize();       // Output: The size of the list is: 1
  
  
  // Explanation of Operations:
  // Append (append(value)): Adds a node with the specified value at the end of the list.
  // Prepend (prepend(value)): Adds a node with the specified value at the beginning of the list.
  // Insert at (insertAt(value, index)): Inserts a node with the specified value at the given index.
  // Remove First (removeFirst()): Removes the first node in the list (the head).
  // Remove Last (removeLast()): Removes the last node in the list (the tail).
  // Remove at (removeAt(index)): Removes the node at the specified index.
  // Print Forward (printForward()): Prints the list in a forward direction from head to tail.
  // Print Backward (printBackward()): Prints the list in reverse from tail to head.
  // Get Size (getSize()): Returns the current size of the list.