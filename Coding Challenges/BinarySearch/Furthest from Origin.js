class Solution {
    solve(s) {
        let i = 0, count=0;
        for(let l of s){
            if(l==="L") i--
            else if(l==="R") i++
            else {
                count++
            }
        }
        while(count--){
            if(i>0) i++
            else i--
        }
        return Math.abs(i)
    }
}

solve("?R")//2
