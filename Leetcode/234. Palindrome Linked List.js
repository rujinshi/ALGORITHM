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
 * 回文链表
 */
//TODO:
var isPalindrome = function(head) {
  let cur = head;

  while (cur.next.next === cur.next) {
    tmp = cur.next.next;
  }
  cur = cur.next;
};
