class Solution {
    solve(nums) {
        let map = new Map()
        nums.forEach(n=>{
            if(!map.has(n)) map.set(n, 0);
            let d = map.get(n)
            map.set(n, d+1)
        })
        map = [...map.values()].filter(n=>n>1)
        let ans = 0
        map.forEach(n=>{
            ans+=(n-1)/2*n
        })
        return ans
    }
}
