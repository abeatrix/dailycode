var removeDuplicates = function(nums) {
    for(let i=nums.length-1; i>0; i--){
        if(nums[i]==nums[i-1]){
            nums.splice(i, 1)
        }
    }
    return nums.length
};

var removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    let i = 0;
    for(let j = 1; j<nums.length; j++) {
        if(nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    nums.length = i+1;
    return nums;
};
