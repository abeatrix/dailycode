class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        l, r = 0, len(nums)

        while l<r:
            m = (l+r)//2
            if nums[m] == target: 
                l, r=m, m
                while l-1>=0 and nums[l-1] == target:
                    l-=1
                while r+1<len(nums) and nums[r+1] == target:
                    r+=1
                return [l, r]
            elif target > nums[m]:
                l = m+1
            else:
                r = m


        return [-1, -1]
      
# Runtime: 84 ms
# Memory Usage: 15.4 MB
