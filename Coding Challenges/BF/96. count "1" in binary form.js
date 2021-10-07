function countOne(num) {
    // your code here
    let count = 0;
    while(num>0){
        count+=num%2;
        num=Math.floor(num/2);
    }
    return count;
}


/**
 * @param {number} num - integer
 * @return {number} count of 1 bit
 */
function countOne(num) {
    // your code here
    let nums = num.toString(2).split('');
    return nums.filter(n=>n==='1').length
}