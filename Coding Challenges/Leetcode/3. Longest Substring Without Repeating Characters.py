class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        a = []
        count = 0
        for i in s:
            if i in a:
                a=a[a.index(i)+1:]
            a+=[i]
            if len(a)>count:
                count = len(a)
        return count
