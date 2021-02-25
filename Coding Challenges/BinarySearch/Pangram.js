/*

Pangram
Given a string s, representing a sentence, return whether every letter (case-insensitive) of the alphabet is used at least once.

Constraints

0 ≤ n ≤ 100,000 where n is the length of s
Example 1
Input
s = "A quick brown fox jumps over the lazy dog"
Output
true
Example 2
Input
s = "The jay, pig, fox, tiger and my wolves quack!"
Output
false
Explanation
This sentence is missing a "z"

*/

// regEx
class Solution {
    solve(s) {
        s = s.toLowerCase().replace(/[^A-Z0-9]/ig, "")
        s = new Set(s)
        return([...s].length===26)
    }
}

// [^a-zA-Z0-9]\s/g says match any character that is not a number or letter followed by a space.
