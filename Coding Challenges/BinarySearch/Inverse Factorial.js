/*
Inverse Factorial
The factorial of a number n is defined as n! = n * (n - 1) * (n - 2) * ... * 1.

Given a positive integer a, return n such that n! = a. If there is no integer n that is a factorial, then return -1.

Constraints

0 < a < 2 ** 31
Example 1
Input
a = 6
Output
3
Explanation
3! = 6
 */

class Solution {
    solve(a) {
        let i = 1, r=1;
        while(r<=a){
            r*=i
            if(r===a) return i
            else i++
        }
        return -1
    }
}

//Your code took 1 millisecond — faster than 97.54% in JavaScript
