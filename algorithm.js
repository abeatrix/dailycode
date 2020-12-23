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

function bubbleSort(array) {
  let swapHappened = 0;
  let i = 0;
  while (swapHappened >= 0) {
    while (i < array.length - 1) {
      if (array[i + 1] < array[i]) {
        let x = array[i + 1];
        array[i + 1] = array[i];
        array[i] = x;
        swapHappened++;
      }
      i++;
    }
    if (swapHappened > 0) {
      i = 0;
      swapHappened = 0;
    } else {
      return array;
    }
  }
}
bubbleSort([12, 6, 3, 7, 13, 8]);

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > x) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = x;
  }
}

insertionSort([12, 6, 3, 7, 13, 8]);
