/*
Compress String
Given a string lowercase alphabet s, eliminate consecutive duplicate characters from the string and return it.

That is, if a list contains repeated characters, they should be replaced with a single copy of the character. The order of the elements should not be changed.

Constraints

0 ≤ n ≤ 100,000 where n is the length of s
Example 1
Input
s = "aaaaaabbbccccaaaaddf"
Output
"abcadf"
 */


class Solution {
    solve(s) {
        let current, res="";
        for(let l of s){
            if(l!=current) {
                current = l;
                res+=l;
            };
        }
        return res;
    }
}


/*

Python

def solve(s):
        c=""
        r=""
        for l in s:
            if c!=l:
                c=l
                r+=l
        return r

solve("aaaaaabbbccccaaaaddf")

*/
