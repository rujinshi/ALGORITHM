/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * @description 给定一个链表 判断是否有环
 * 时间复杂度O(1) 空间复杂度O(n)
 * 使用 HASH 思想
 */
var hasCycle = function(head) {
  if (head === null || head.next === null) {
    return false;
  }
  let cur = head;
  let myHashMap = new Map();
  while (cur.next) {
    if (myHashMap.has(cur.next)) {
      return true;
    } else {
      // map中的键值对为当前值和后继结点的值
      myHashMap.set(cur, cur.next);
      cur = cur.next; // 移动cur
    }
  }
  return false;
};

/**
 * 
 * @param {ListNode} head 
 * @return {boolean}
 * 使用快慢指针 快指针每次走两步
 * 慢指针每次走一步 如果能够相遇 必然有环
 */
var hasCycle = function(head) {
  let fast = head;
  let slow = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
