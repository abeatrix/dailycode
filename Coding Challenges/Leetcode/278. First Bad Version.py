class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        low = 1
        high = n
        
        while low < high:
            mid = high + (low - high) // 2
            # Mid is bad, move down
            if isBadVersion(mid) == True:
                high = mid
            else:
                low = mid + 1
                
        return low