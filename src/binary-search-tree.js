const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
    // remove line with error and write your code here
  }

  add(data) {
    if (!this.treeRoot) {
      this.treeRoot = new Node(data);
    } else {
      addNewNode(data, this.treeRoot);
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
    return true;
  }

  has(data) {
    function hasNode(data, currentNode) {
      if (!currentNode) {
        return false;
      } else if (currentNode.data == data) {
        return true;
      } else if (data < currentNode.data) {
        return hasNode(data, currentNode.left);
      } else {
        return hasNode(data, currentNode.right);
      }
    }
    return hasNode(data, this.treeRoot);
    // remove line with error and write your code here
  }

  find(data) {
    function findNode(data, currentNode) {
      if (!currentNode) {
        return null;
      } else if (currentNode.data == data) {
        return currentNode;
      } else if (data < currentNode.data) {
        return findNode(data, currentNode.left);
      } else {
        return findNode(data, currentNode.right);
      }
    }
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return findNode(data, this.treeRoot);
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
        if (!currentNode.left & !currentNode.right) {
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
console.log(tree.add(6));
console.log(tree.add(4));
console.log(tree.add(8));
console.log(tree.has(6));
console.log(tree.root());
console.log(tree.find(6));
module.exports = {
  BinarySearchTree,
};
