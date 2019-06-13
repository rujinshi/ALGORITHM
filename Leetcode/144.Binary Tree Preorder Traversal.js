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

/**
 *
 * @param {TreeNode} root
 * @return {number[]}
 * @description 二叉树前序遍历 非递归
 * 根节点入栈，保存其值。如果有右节点，则入栈；如果有左节点，则入栈，循环
 */
var preorderTraversal = function(root) {
  if (!root) return [];
  const res = [];
  const stack = [root];
  let t = stack.pop();
  while (t) {
    res.push(t.val);
    if (t.right) {
      stack.push(t.right);
    }
    if (t.left) {
      stack.push(t.left);
    }
    t = stack.pop();
  }
  return res;
};
