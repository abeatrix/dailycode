class Solution {
    solve(s0, s1) {
        if(s0.length!=s1.length) return false
        let map = {};
        for(let l of s0){
            if(!map[l]) map[l] = 0;
            map[l]++
        }
        for(let l of s1){
            if(!map[l]) map[l] = 0;
            map[l]++
        }
        for (let num in map){
            if(map[num]%2!=0) return false
        }
        return true
    }
}


// gab's
class Solution {
    solve(s0, s1) {

        if(s0 == s1) return true

        let s0Map = {}
        for(const char of s0){
            s0Map[char] = (s0Map[char] || 0) + 1
        }

        let s1Map = {}
        for(const char of s1){
            s1Map[char] = (s1Map[char] || 0) + 1
        }

        for(const char of s1){
            if(s0Map[char] != s1Map[char]){
                return false
            }
        }

        return true
    }
}
