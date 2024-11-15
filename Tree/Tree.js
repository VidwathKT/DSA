// To insert a node into a binary search tree (BST) using a single method (without using a helper function),
// you can directly perform the comparison and insert the node into the correct position inside the
//main insert() method itself.

// Here is a simple implementation of inserting a node into a binary search tree using a single method:

// Code Example: Insert Node with Single Method
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;  // Left child
      this.right = null; // Right child
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;  // Root of the tree
    }
  
    // Insert a node into the tree using a single method
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        // If the tree is empty, set the root to the new node
        this.root = newNode;
      } else {
        // Start with the root node
        let current = this.root;
  
        // Loop until the correct position is found
        while (true) {
          if (value < current.value) {
            // If the value is smaller, go to the left subtree
            if (current.left === null) {
              current.left = newNode; // Insert the node here
              break;
            } else {
              current = current.left; // Move to the left child
            }
          } else {
            // If the value is greater or equal, go to the right subtree
            if (current.right === null) {
              current.right = newNode; // Insert the node here
              break;
            } else {
              current = current.right; // Move to the right child
            }
          }
        }
      }
    }
  
    // In-order traversal to display the tree
    inOrder(node = this.root) {
      if (node !== null) {
        this.inOrder(node.left);  // Traverse the left subtree
        console.log(node.value);  // Print the node's value
        this.inOrder(node.right); // Traverse the right subtree
      }
    }
  }
  
  //-----------------------------------------------------------------------------------------------------------------
  
  
  //Delete a node from tree 
  class BinarySearchTree {
      // Other methods...
    
      // Delete: Remove a node with the specified value from the tree
      delete(value) {
        this.root = this._deleteNode(this.root, value);
      }
    
      _deleteNode(node, value) {
        if (!node) {
          return null;  // Node not found
        }
    
        // Find the node to be deleted
        if (value < node.value) {
          node.left = this._deleteNode(node.left, value);
        } else if (value > node.value) {
          node.right = this._deleteNode(node.right, value);
        } else {
          // Node found, handle deletion cases
    
          // Case 1: Node has no children (leaf)
          if (!node.left && !node.right) {
            return null;
          }
    
          // Case 2: Node has one child
          if (!node.left) {
            return node.right;
          } else if (!node.right) {
            return node.left;
          }
    
          // Case 3: Node has two children
          let minNode = this._findMin(node.right);  // Find in-order successor
          node.value = minNode.value;  // Replace with successor's value
          node.right = this._deleteNode(node.right, minNode.value);  // Delete successor
        }
    
        return node;
      }
    
      // Helper function to find the minimum node in a subtree
      _findMin(node) {
        while (node.left !== null) {
          node = node.left;
        }
        return node;
      }
    }
    
  //----------------------------------------------------------------------------------------------------------------
  
  //Update or Modify the node in the tree
  
  class BinarySearchTree {
      // Other methods...
    
      // Update: Update the value of a node in the tree
      update(oldValue, newValue) {
        let current = this.root;
    
        while (current !== null) {
          if (current.value === oldValue) {
            current.value = newValue;  // Update the node's value
            return true;
          } else if (oldValue < current.value) {
            current = current.left;
          } else {
            current = current.right;
          }
        }
    
        return false;  // Value to be updated not found
      }
    }
    
    //-------------------------------------------------------------------------------------------------------------
  
  
    //Read or search for node inside tree 
    class BinarySearchTree {
      // Other methods like constructor, insert...
    
      // Read: Search for a value in the tree
      search(value) {
        let current = this.root;
        
        while (current !== null) {
          if (value === current.value) {
            return true;  // Value found
          } else if (value < current.value) {
            current = current.left;  // Move left
          } else {
            current = current.right;  // Move right
          }
        }
    
        return false;  // Value not found
      }
    }
    