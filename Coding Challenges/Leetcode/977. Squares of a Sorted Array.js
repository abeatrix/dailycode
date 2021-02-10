/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 */

var sortedSquares = function(nums) {
    nums.forEach((n,i) => nums[i]=n*n)
    return nums.sort((a,b)=>a-b)
};
