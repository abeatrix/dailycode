
/* Longest Alliteration
Given a list of lowercase alphabet strings words, return the length of the longest contiguous sublist where all words share the same first letter.

Constraints

0 ≤ n ≤ 100,000 where n is the length of words
Example 1
Input
words = ["she", "sells", "seashells", "he", "sells", "clams"]
Output
3
Explanation
["she", "sells", "seashells"] all share the first letter s. */

class Solution {
    solve(words) {
        let first, count=0, ans=0;
        for(let w of words){
            if(!first) first=w[0]
            if(w[0]===first) count++
            else{
                if(count>ans) ans=count
                first=w[0]
                count=1
            }
        }
        if(count>ans) ans=count
        return ans
    }
}

//Your code took 2 milliseconds — faster than 99.03% in JavaScript
