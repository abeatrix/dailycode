// Medium
var searchRange = function(nums, target) {
    let a=-1, b=-1, turned=false, len=nums.length, i=0;
    while(i<len){
      if(nums[i]===target && !turned){a=i, turned=true}
      else if(nums[i]===target){b=i}
      i++
    }
    if(a>-1 && b===-1) b=a
    return [a, b]
};

// Runtime: 80 ms, faster than 65.87% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
