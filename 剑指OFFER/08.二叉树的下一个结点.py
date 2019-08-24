# -*- coding:utf-8 -*-
# class TreeLinkNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
#         self.next = None
'''
思路：
1.二叉树为空 则返回空
2.当前节点存在右子树，则下一个结点是它右子树中的最左子节点
3.当前节点无右子树 => 向上寻找，直到找到这样一个节点 -> 它是父节点的左节点
'''

class Solution:
    def GetNext(self, pNode):
        if not pNode:
            return None
        if pNode.right != None:
            while pNode.right.left != None:
                pNode.right = pNode.right.left
            return pNode.right
        while pNode.next != None:
            if pNode.next.left == pNode:
                return pNode
            pNode = pNode.next
        return None
