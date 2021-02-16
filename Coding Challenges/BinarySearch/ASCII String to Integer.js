class Solution {
    solve(s) {
        s = s.split(/[^0-9]/)
        s = s.filter(l=> l!="" )
        if(!s.length) return 0
        else {
          s = s.reduce((a,b) => parseInt(a)+parseInt(b) )
        }
        return parseInt(s)
    }
}
