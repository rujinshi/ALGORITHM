
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

'''
输入一个链表，反转链表后，输出新链表的表头。
'''


class Solution:
    # 返回ListNode
    def ReverseList(self, pHead):
        cur = pHead
        prev = None
        while cur:
            prev, cur.next, cur = cur, prev, cur.next
        return prev
