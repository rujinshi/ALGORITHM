// Reverse a singly linked list.
// 思想：当前节点的后继指向前驱节点

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode} 反转后的头结点
 * @description 反转单链表
 * 方法1 迭代 iterate
 */
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let cur = head;
  let prev = null;
  // 当前节点的后继指向前驱节点
  while (cur) {
    // 保存当前节点的后续节点 否则会断链
    let tempNext = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tempNext;
  }
  return prev;
};

/**
 *
 * @param {ListNode} head
 * @return {ListNode} 反转后的头结点
 * 方法2 递归 recursion
 * 参考 https://blog.csdn.net/FX677588/article/details/72357389
 */
var reverseList = function(head) {
  // 空链表直接返回
  // head.next === null为空是递归基
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  // 一直循环到链尾
  let newHead = reverseList(head.next);
  // 翻转链表的指向
  head.next.next = head;
  // 断开原有连接
  head.next = null;
  // 新链表头永远指向的是原链表的链尾
  return newHead;
};


