/**
 * @param {TreeNode} root
 * @return {number[]}
 * @description 二叉树前序遍历 递归法
 */
var preorderTraversal = function(root) {
  const ansArray = [];
  helper(root, ansArray);
  function helper(treeNode, ansArray) {
    if (!treeNode) return;
    ansArray.push(treeNode.val);
    helper(treeNode.left, ansArray);
    helper(treeNode.right, ansArray);
  }
  return ansArray;
};

var preorderTraversal = function(root) {
  if (!root) return [];
  return [root.val]
    .concat(preorderTraversal(root.left))
    .concat(preorderTraversal(root.right));
};
