var removeElement = function(nums, val) {
  let k = 0, len = nums.length-1;
    for(let i=0; i<=len-k; i++) {
        if(nums[i] == val) {
          nums[i]="_";
          [nums[i], nums[len-k]] = [nums[len-k], nums[i]]
          i--;
          k++;
        }
    }
    return nums.length-k
}; 