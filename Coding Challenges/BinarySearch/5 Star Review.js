class Solution {
    solve(reviews, threshold) {
        let s=0, n=0;
        for(let pair of reviews) {
            s+=pair[0];
            n+=pair[1];
        }
        if(s/n >= threshold/100) return 0
        else{
            let p = threshold/100
            let ans = (n*p-s)/(1-p)
            return Math.ceil(ans.toFixed(2))
        }
    }
}
solve([[0, 5]],29)
solve([[1, 5]],45)
solve([[0, 3]],80)
