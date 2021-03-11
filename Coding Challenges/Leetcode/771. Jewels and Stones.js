/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let map = new Map(), count=0;
    for(let j of jewels){
        map.set(j)
    }
    for(let s of stones){
        if(map.has(s)) count++
    }
    return count
};