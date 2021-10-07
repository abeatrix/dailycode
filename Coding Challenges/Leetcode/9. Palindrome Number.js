/**
 * @param {number} x
 * @return {boolean}
 */

 var isPalindrome = function(x) {
    x = x.toString()
    let result = '';
    for (let i=x.length-1; i>=0; i--){
        result+=x[i]
    }
    return result === x;
    
};

var isPalindrome = function(x) {
    if (x < 0) return false;
    let number = x;
    let result = 0;
    while (Math.floor(number) > 0) {
        result = Math.floor(result * 10 + (number % 10));
        number = Math.floor(number / 10);
    }
    return result === x;
    
};

var isPalindrome = function(x) {
    x=x.toString()
    let i=0, len=x.length-1;
    while(i<len-i){
        console.log(x[i])
        if(x[i]!=x[len-i])return false
        i++
    }
        return true;
};