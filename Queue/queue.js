// In JavaScript, a queue is a data structure that follows the FIFO (First In, First Out) principle. 
//This means that the first element added to the queue is the first one to be removed. 
//It's like a line of people waiting: the first person in line is served first.

// Basic Queue Operations:
// enqueue: Add an element to the end of the queue.
// dequeue: Remove and return the element from the front of the queue.
// peek: View the front element without removing it.
// isEmpty: Check if the queue is empty.
// size: Return the number of elements in the queue.
// Queue Implementation in JavaScript
// You can implement a queue using a JavaScript array. Although arrays provide the necessary methods (push() and shift()), this may not be the most efficient for very large datasets, but for most cases, it's simple and works well.

// Queue Implementation Example:

class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the queue (enqueue)
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element from the queue (dequeue)
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift(); // Removes the first element
    }
  
    // View the front element without removing it (peek)
    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  
    // Clear the queue
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const queue = new Queue();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.peek());     // 10
  console.log(queue.dequeue());  // 10
  console.log(queue.peek());     // 20
  console.log(queue.size());     // 2
  console.log(queue.isEmpty());  // false
  
  // Explanation:
  // enqueue(element): Adds an element to the end of the queue using push().
  // dequeue(): Removes and returns the front element of the queue using shift(), which removes the first element.
  // peek(): Returns the front element (first element) without removing it.
  // isEmpty(): Checks if the queue is empty by checking the length of the items array.
  // size(): Returns the number of elements in the queue by returning this.items.length.