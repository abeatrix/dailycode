/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let R=0, L=0, count=0;
    for(let l of s){
        if(l=="R")R++
        else L++
        if(R==L)count++, L=0, R=0;
    }
    return count;
};