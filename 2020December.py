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

