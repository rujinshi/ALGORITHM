/**
 *
 * @param {ListNode} head
 * @returns {ListNode} 反转后的头结点
 * @description 反转单链表
 * 迭代思想
 */

var swapPairs = function(head) {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  let current = dummyNode;

  while (current.next && current.next.next) {
    // 初始化双指针
    let first = current.next;
    let second = current.next.next;
    // 更新双指针
    first.next = second.next;
    second.next = first; //先确定后继
    current.next = second;
    // 更新current指针
    current = current.next.next;
  }
  return dummyNode.next;
};

/**
 *
 * @param {ListNode} head
 * @returns {ListNode} 反转后的头结点
 * 递归
 */
var swapPairs = function(head) {
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }

  let first = head.next;
  head.next = swapPairs(first.next);
  first.next = head; //后继指向前驱结点
  return first;
};

/**
 *
 * @param {ListNode} head
 * @returns {ListNode} 反转后的头结点
 * 递归
 */
var swapPairs = function(head) {
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }

  let v1 = head,
    v2 = head.next,
    v3 = v2.next;
  v2.next = v1;
  v1.next = swapPairs(v3);
  return v2;
};

