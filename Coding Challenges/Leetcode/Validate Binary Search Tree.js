/*
 Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/


var isValidBST = function(root) {

    let helper = function(root, lower, upper){
        if(!root) return true;
        if((lower != null && root.val <= lower) || (upper !=null && root.val >= upper)) return false;
        return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
    }

    return helper(root, null, null)
};
isValidBST([5,1,4,null,null,3,6])
