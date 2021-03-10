var maxSlidingWindow = function(nums, k) {
    let res = [], q=[], l=0, r=0, len=nums.length;

    while(r<len){
        while(q && nums[q[q.length-1]] < nums[r]) q.pop()
        q.push(r)

        if(l>q[0]) q.shift();

        if( (r+1) >= k) {
            res.push(nums[q[0]]);
            l++
        }
        r++
    }
    return res
};

class Solution {
    solve(nums, k) {
        let l = 0, r=nums.length-1;
        while(l<r){
            if(k-nums[r]===nums[l]) return true;
            else if(nums[r]+nums[l]>k) r--;
            else l++;
        }
        return false;
    }
}

// two pointers

# 153. Find Minimum in Rotated Sorted Array (Medium)
class Solution:
    def findMin(self, nums: List[int]) -> int:
        l = 0
        r = len(nums)-1
        if(nums[l]<=nums[r]):
            return nums[l]
        while l+1<r:
            m = l+(r-l)//2
            if nums[m]<nums[r]:
                r=m
            else: l=m


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

  BFS() {
    let node = this.root,
        data = [],
        queue = [];
    queue.push(this.root);
    while(queue.length){
        node = queue.shift();
        data.push(node.val);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return data;
}

DFSPreOrder(){
    let data = [];
    function traverse(node){
        data.push(node.val);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
}

DFSPostOrder(){
    let data = [], current = this.root;
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.val);
    }
    traverse(current);
    return data;
}

DFSInOrder(){
    let data = [], current = this.root;
    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(current);
    return data;
}

