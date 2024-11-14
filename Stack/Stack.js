// In JavaScript, a stack is a data structure that follows the LIFO (Last In, First Out) principle. 
//This means that the last item added to the stack is the first one to be removed. 
//Stacks are commonly used for tasks like managing function calls, undo operations, 
//and depth-first search algorithms.

// You can implement a stack in JavaScript using an array, since arrays have built-in methods
// that allow you to mimic stack behavior. Here’s how you can do it:

// Basic Stack Operations
// Push: Add an element to the top of the stack.
// Pop: Remove the element from the top of the stack.
// Peek: View the top element without removing it.
// isEmpty: Check if the stack is empty.
// size: Return the size of the stack.

// Implementation Example
class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add element to the stack (push)
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element (pop)
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // View the top element (peek)
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  }
  
  const stack = new Stack();
  
  // Example usage
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.peek()); // 30
  console.log(stack.pop());  // 30
  console.log(stack.size()); // 2
  console.log(stack.isEmpty()); // false