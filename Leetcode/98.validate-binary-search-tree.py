#
# @lc app=leetcode id=98 lang=python3
#
# [98] Validate Binary Search Tree
#
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

'''
Solution1 中序遍历后为上升数组
'''


class Solution1:
    def isValidBST(self, root: TreeNode) -> bool:
        order = []
        self.inorderTraversal(root, order)
        for i in range(1, len(order)):
            if order[i] <= order[i-1]:
                return False
        return True

    def inorderTraversal(self, root, order):
        if root == None:
            return []
        self.inorderTraversal(root.left, order)
        order.append(root.val)
        self.inorderTraversal(root.right, order)


'''
Solution2 
'''


class Solution:
    def isValidBST(self, root: TreeNode) -> bool:

        def helper(node, minValue=float("-inf"), maxValue=float("inf")):
            if not node:
                return True
            if not minValue < node.val < maxValue:
                return False
            return helper(node.left, minValue, node.val) and helper(node.right, node.val, maxValue)
        return helper(root)
