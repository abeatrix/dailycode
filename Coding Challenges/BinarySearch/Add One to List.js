class Solution {
    solve(nums) {
        let i=nums.length-1;
        while(i>=0){
            nums[i] = nums[i]+1>9 ? 0 : nums[i]+1
            if(nums[i]!=0) return nums
            i--
        }
        if(nums[0]===0) nums.unshift(1)
        return nums
    }
}
function solve(matrix) {
    matrix = [...matrix[0], ...matrix[1]]
    ans = []
    for(let i=0;i<matrix.length;i++){
      if(i-1=0) matrix[i] = matrix[i]+ans[0]
      else{
        matrix[i] = ans.reduce((a,b)=>a+b)
      }
      ans.push(matrix[i])
    }
    let a = matrix.slice(0,2)
    let b = matrix.slice(2)
    return [a, b]
}
solve([[2, 3],[5, 7]])
solve([     [],     [] ])
