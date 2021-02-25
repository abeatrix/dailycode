
/*
Base 3 to Integer
Given a string s representing a number in base 3 (consisting only of 0, 1, or 2), return its decimal integer equivalent. This should be implemented directly without using a built-in function.

Example 1
Input
s = "10"
Output
3

*/

class Solution {
    solve(s) {
        return parseInt(s, 3)
    }
}

/*
class Solution:
    def solve(self, s):
        return sum(int(s[i]) * 3 ** (len(s) - i - 1) for i in range(len(s)))

        */
