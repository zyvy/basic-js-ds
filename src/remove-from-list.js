const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// идея в том, чтобы рекурсивная функция в предыдущий шаг возвращала либо текущий
// элемент (если не совпадают)
// либо следующий если совпадение есть
// отдельно контролировать границы
function removeKFromList(l, k) {
  if (!l.next) {
    return null;
  }

  if (l.value === k) {
    l.next = removeKFromList(l.next, k);
    return l;
  } else {
    return l;
  }
}

module.exports = {
  removeKFromList,
};
