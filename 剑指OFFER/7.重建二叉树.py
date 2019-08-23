# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

'''
思路  递归
前序：A B D E H I C F G
中序：D B H E I A F C G

在上面的前序序列中，可以很容易地获得A就是根节点。
此时，我们可以在后序序列中找到这个A，那么在A的左边就是A的左孩子及其子节点，在A的右边就是A的右孩子及其子节点。
假设，我们目前在A的左边。在遍历前序序列到B的时候，我就知道了B就是A的左孩子，而在B的左边(中序序列)的都是B的左孩子及其子节点，
在B的右边(同是也在A的左边)的就是B的右孩子及其子节点...以此类推.这就是利用递归来重建二叉树。
'''
class Solution:
    # 返回构造的TreeNode根节点
    def reConstructBinaryTree(self, pre, tin):
        if not pre or not tin:
            return None
        root = TreeNode(pre.pop(0))
        index = tin.index(root.val)
        root.left = self.reConstructBinaryTree(pre, tin[:index])
        root.right = self.reConstructBinaryTree(pre, tin[index+1:])
        return root

        # write code here
