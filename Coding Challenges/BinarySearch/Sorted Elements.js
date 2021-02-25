class Solution {
    solve(nums) {
        let o = [...nums], count=0;
        nums = nums.sort((a,b)=>a-b)
        o.forEach((n,i)=>{
            if(n===nums[i]) count++
        })
        return count;
    }
}
