/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
class Solution {
    solve(root, target) {
        let node = root, queue =[];
        queue.push(root);
        while(queue.length){
            node = queue.shift();
            if(node.val===target) return true
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return false
    }
}
