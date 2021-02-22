class Solution {
    solve(s0, s1, n) {
        if(n <= 1) return;
        let result = "";
        solve(s0, s1, n-2) + solve(s0, s1, n-1)
        return result
    }
}

