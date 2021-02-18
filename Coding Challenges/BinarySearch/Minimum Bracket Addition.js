class Solution {
    solve(s) {
        let a = 0, b =0;
        for(let i=0;i<s.length;i++){
            if(s[i]==="(") b++
            else b--
            if(b<0){
                a++, b++;
            }
        }
        return a+b;
    }
}
solve(")))((")
solve(")))(()")
