// Binary Tree Preorder Traversal
// Given the root of a binary tree, return the preorder traversal of its nodes' values.
var preorderTraversal = function (root) {
  let x = [];
  let bfs = (node) => {
    if (!node) return;

    x.push(node.val);
    bfs(node.left);
    bfs(node.right);
  };
  bfs(root);
  return x;
};
