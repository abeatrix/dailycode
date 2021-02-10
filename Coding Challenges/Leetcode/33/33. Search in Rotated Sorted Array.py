# You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.
# Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
# If target is found in the array return its index, otherwise, return -1.

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums)-1
        while r>=l:
            m = l+(r-l)//2
            if target == nums[m]:
                return m
            elif nums[m] >= nums[l]:
                if target>=nums[l] and target<nums[m]:
                    r=m-1
                else:
                    l=m+1
            else:
                if target<=nums[r] and target>nums[m]:
                    l=m+1
                else:
                    r=m-1
        return -1
