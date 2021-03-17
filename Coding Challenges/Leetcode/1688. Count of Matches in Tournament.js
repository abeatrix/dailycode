/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n) {
    let sum = 0;
    while(n!=1){
        if(n%2==0){
            sum+=n/2;
            n=n/2;
        } else {
            sum+=(n-1)/2;
            n=(n-1)/2+1;
        }
    }
    return sum;
};

//Runtime: 68 ms, faster than 98.71% of JavaScript online submissions for Count of Matches in Tournament.
