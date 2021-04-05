/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for(let s of strs){
        let w = s.split("").sort().join("");
        if(!map.has(w) ) map.set(w, [s])
        else map.get(w).push(s)
    }
    return [...map.values()]
};

//medium
