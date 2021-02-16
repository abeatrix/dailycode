class Solution {
    solve(num) {
        num = num.toString();
        let start = 0, end = num.length-1, mid = Math.floor(end/2);
        if (end < 2 && num[start]!=num[end]) return false
        while(start!=mid){
            if(num[start]!=num[end]) return false
            start++, end--
        }
        return true
    }
}
