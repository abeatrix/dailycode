/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])) {
          let x = map.get(target-nums[i])
          return [x, i]
        }
        if(!map.has(nums[i])) map.set(nums[i], i)
    }
};

// Runtime: 72 ms, faster than 94.30% of JavaScript online submissions for Two Sum.
// Memory Usage: 38.6 MB, less than 73.70% of JavaScript online submissions for Two Sum.