/*
Rookie Mistake
You’re given a string s containing letters of three types, R, B, and ..

R represents your current position, B represents a blocked position, and . represents an empty position. In one step, you can move to any adjacent position to your current position, as long as it is empty. Can you reach either the leftmost position or the rightmost position?

Return true if you can reach either the leftmost or the rightmost position, or false if you cannot.

Constraints

n ≤ 100,000 where n is the length of s
Example 1
Input
s = "......B....R.............."
Output
true
Explanation
We can reach the rightmost position since it's not blocked.


*/

class Solution {
    solve(s) {
        let l, r, m;
        for(let i of s){
            if(i === "R") m = true;
            if(!m && i==="B") l = true;
            if(m && i==="B") r = true;
        }
        if(l&&r) return false;
        else return true
    }
}

// Your code took 22 milliseconds — faster than 71.05% in JavaScript
