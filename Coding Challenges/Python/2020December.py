# 12-02

# 1672. Richest Customer Wealth (Easy)
class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        b = []
        for i in accounts:
            b.append(sum(i))
        return max(b)

class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        return max(map(sum, accounts))


# 268. Missing Number (Easy)
def missingNumber(self, nums: List[int]) -> int:
   n = len(nums)
   return n * (n + 1) / 2 - sum(nums)

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        nums.sort()
        for i in range(len(nums)):
            if i != nums[i]: return i
        return nums[-1]+1

# 287. Find the Duplicate Number (Medium)
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        nums.sort()
        for i in range(len(nums)):
            if nums[i] == nums[i+1]:
                return nums[i]

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

        return nums[r]

# 658. Find K Closest Elements (Medium)
# using binary search
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        l, r = 0, len(arr)-k
        while l<r:
            m = (l+r)//2
            if x-arr[m] > arr[m+k]-x:
                l=m+1
            else:
                r=m
        return arr[l:l+k]
