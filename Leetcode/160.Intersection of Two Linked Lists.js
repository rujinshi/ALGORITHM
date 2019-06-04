/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * @description 相交链表
 * Set法 空间复杂度不符合题意
 */
var getIntersectionNode = function(headA, headB) {
  let mySet = new Set();
  while (headA) {
    mySet.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (mySet.has(headB)) {
      return headB;
    } else {
      mySet.add(headB);
      headB = headB.next;
    }
  }
  return null;
};

/**
 *
 * @param {ListNode} headA
 * @param {ListNode} headB
 * 方法2
 *
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let curA = headA;
  let curB = headB;
  while (curA !== curB) {
    curA = curA === null ? headB : curA.next;
    curB = curB === null ? headA : curB.next;
  }
  return curA;
};


// 方法3 将第一个链表放到第二个链表的尾部
// 则转化为合并后的链表是否为有环，若有环，则找到环的起始点
