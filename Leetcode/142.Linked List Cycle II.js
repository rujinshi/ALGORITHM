/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description Given a linked list, return the node where the cycle begins.
 * HASH法
 */
var detectCycle = function(head) {
  let myHashMap = new Map();
  let current = head;
  while (current.next) {
    if (myHashMap.has(current.next)) {
      return current.next;
    } else {
      myHashMap.set(current, current.next);
      current = current.next;
    }
  }
  return null;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description Given a linked list, return the node where the cycle begins.
 * 快慢指针法
 */
var detectCycle = function(head) {
  let slow = head;
  let fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let entry = head;
      while (entry !== slow) {
        entry = entry.next;
        slow = slow.next;
      }
      return slow;
    }
  }
  return null;
};
