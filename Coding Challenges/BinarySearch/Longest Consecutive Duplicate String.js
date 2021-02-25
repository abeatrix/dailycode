class Solution {
    solve(s) {
        let max=0, count=0;
        for(let i=0; i<s.length;i++){
            if(s[i]!=s[i-1]&&i!=0) count=0;
            count++
            if(count>max) max = count
        }
        return max
    }
}
