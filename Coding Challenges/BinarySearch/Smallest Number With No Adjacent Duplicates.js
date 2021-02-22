class Solution {
    solve(s) {
        let b = s.split("")
        for(let i=0;i<b.length;i++){
            if(b[i]==="?"){
                if(b[i-1]!=1 && b[i+1]!=1){
                    b[i] = 1
                } else if ( b[i-1]!=2 && b[i+1]!=2) {
                    b[i] = 2
                } else b[i] = 3
            }
        }
        return b.join("")
    }
}

//in 32ms in javascript — faster than 100.00%
