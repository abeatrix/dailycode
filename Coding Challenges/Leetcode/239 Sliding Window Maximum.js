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
