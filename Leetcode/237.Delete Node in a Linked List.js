/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * @description 给定结点（非尾结点），从单链表中删除
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
