class Solution {
    solve(s) {
        let ans = [], count = 0, f=0;
        for(let i = 0; i<s.length; i++){
            if(s[i]==="(") count++
            else count --
            if(count === 0) {
                ans.push(s.slice(f, i+1).toString())
                f = i+1
            }
        }
        return ans
    }
}
"()()(()())"
