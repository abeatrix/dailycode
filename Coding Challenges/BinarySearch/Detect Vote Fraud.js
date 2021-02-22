class Solution {
    solve(votes) {
        let map = new Map();
        for(let v of votes){
            if(!map.has(v[1])) map.set(v[1])
            else return true
        }
        return false
    }
}
