const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
    // remove line with error and write your code here
  }

  add(data) {
    if (!this.root) {
      this.root = new Node(data);
    } else {
      addNewNode(data, this.root);
    }
    function addNewNode(newNodeData, currentNode) {
      // 1 если дерево пустое
      if (!currentNode) {
        return new Node(data);
      }
      // 2 если уже есть
      if (newNodeData == currentNode.data) {
        return currentNode;
      }
      // 3 если не пустое и нет то определяем право или лево и рекурсия
      if (newNodeData > currentNode.data) {
        currentNode.right = addNewNode(newNodeData, currentNode.right);
      } else if (newNodeData < currentNode.data) {
        currentNode.left = addNewNode(newNodeData, currentNode.left);
      }
      return currentNode;
    }
    // remove line with error and write your code here
  }

  has(data) {
    function findNode(data, currentNode) {
      if (!currentNode) {
        return false;
      }
      if (currentNode.data == data) {
        return true;
      } else if (currentNode.data > data) {
        findNode(data, currentNode.left);
      } else {
        findNode(data, currentNode.right);
      }
    }
    return findNode(data, this.root);
    // remove line with error and write your code here
  }

  find(data) {
    function findNode(data, currentNode) {
      if (!currentNode) {
        return null;
      }
      if (currentNode.data == data) {
        return currentNode;
      }
      if (currentNode.data > data) {
        findNode(data, currentNode.left);
      } else {
        findNode(data, currentNode.right);
      }
    }
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return findNode(data, this.root);
  }

  remove(data) {
    function removeNode(data, currentNode) {
      if (!currentNode) {
        return null;
      }
      if (currentNode.data > data) {
        currentNode.left = removeNode(data, currentNode.left);
        return currentNode;
      } else if (currentNode.data < data) {
        currentNode.right = removeNode(data, currentNode.right);
        return currentNode;
      } else if (currentNode.data == data) {
        // нашли смотрим потомков
        if (!currentNode.left & !currentNode.right){
          currentNode.data = null;
        }
      }
    }
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}
const tree = new BinarySearchTree();
console.log(tree.add(5));
module.exports = {
  BinarySearchTree,
};
