/*
Interval Intersection
Given a two-dimensional integer list intervals of the form [start, end] representing intervals (inclusive), return their intersection, that is, the interval that lies within all of the given intervals.

You can assume that the intersection will be non-empty.

Constraints

1 ≤ n ≤ 100,000 where n is the length of intervals
Example 1
Input
intervals = [
    [1, 100],
    [10, 50],
    [15, 65]
]
Output
[15, 50]
Explanation
Consider the ranges [1, 100], [10, 50], [15, 65] on a line. The range [15, 50] is the only interval that is included by all of them.
 */

class Solution {
    solve(intervals) {
        let s = 0, e = 0;
        for(let i of intervals){
            if(!e) e= i[1]
            if(!s) s= i[0]
            if(i[1]<e) e=i[1]
            if(i[0]>s) s=i[0]
        }
        return [s, e]
    }
}

// Your code took 4 milliseconds — faster than 81.13% in JavaScript
