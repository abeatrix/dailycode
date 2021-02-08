# Given a binary array, find the maximum number of consecutive 1s in this array.
""" Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3. """

class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count = 0
        maxcount = 0
        for num in nums:
            if num == 1:
                count += 1
                if maxcount < count:
                    maxcount = count
            else:
                if maxcount < count:
                    maxcount = count
                count = 0
        return maxcount

# Given an array nums of integers, return how many of them contain an even number of digits.
"""
Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation:
12 contains 2 digits (even number of digits).
345 contains 3 digits (odd number of digits).  """

def findNumbers(self, nums: List[int]) -> int:
    count = 0
    for num in nums:
        if len(str(num))%2 == 0:
            count += 1
    return count

# get numbers that is even number:
def findNumbers(nums):
    count = [i for i in nums if len(str(i))%2 == 0]
    print (count)
findNumbers([13,0,14,21,0,1])

""" Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6] """

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        nums1[m:] = nums[:n]
        nums1.sort()

# or
nums1[m:] = []+nums2
        nums1.sort()



""" Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this: """
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        temp = list(set(nums))
        nums.clear()
        nums[0:] = []+temp
        nums.sort()

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        nums[:] = sorted(set(nums))

def removeDuplicates(nums) :
    for i in range(len(nums)):
        while i<len(nums)-1 and nums[i]==nums[i+1]:
            del nums[i+1]

# not working in leetcode
def removeDuplicates(nums) :
    temp = list(set(nums))
    nums = []+temp

removeDuplicates([0,0,1,1,1,2,2,3,3,4])


# Check If N and Its Double Exist
# Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

# More formally check if there exists two indices i and j such that :

# i != j
# 0 <= i, j < arr.length
# arr[i] == 2 * arr[j]

class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
checkIfExist([-2,0,10,-19,4,6,-8])


class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        turned = False
        if len(arr) < 3 or arr[0]>arr[1]:
            return False
        for i in range(len(arr)-1):
            if arr[i]<arr[i+1]:
                if turned:
                    return False
            elif arr[i]>arr[i+1]:
                if not turned:
                    turned = True
            else:
                return False
        return turned
"""
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations. """

def moveZeroes(nums):
    i = len(nums)-1
        while i >= 0:
            if nums[i]==0:
                del nums[i]
                nums.append(0)
            i-=1
moveZeroes([0,1,0,3,12])

# SLOW
def moveZeroes(nums):
    for num in nums[::-1]:
        if num==0:
            nums.remove(num)
            nums.append(0)
    return nums
moveZeroes([0,1,0,3,12])


# Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

# You may return any answer array that satisfies this condition.

# Example 1:

# Input: [3,1,2,4]
# Output: [2,4,3,1]
# The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

def sortArrayByParity(A):
    for i in range(len(A)):
        if A[i]%2==0:
            A.insert(A[i])
            del A[i+1]
    return A

# SLOW
def sortArrayByParity(self, A: List[int]) -> List[int]:
    i = len(A)-1
    while i >= 0:
        if A[i]%2!=0:
            A.append(A[i])
            del A[i]
        i-=1
    return A

def sortArrayByParity(A):
    for i in range(len(A)):
        if A[i]%2==0:
            A.insert(0, A[i])
            del A[i+1]
    return A


sortArrayByParity([3,1,2,4])



#
