// hash table

var firstMissingPositive = function(nums) {
    let map = new Map();
    //if(!nums.includes(1)) return 1
    for (let n of nums) map.set(n, 1)
    for (let i =1; i<=nums.length+1; i++){
        if (!map.has(i)) return i;
    }
}

// array
var firstMissingPositive = function(nums) {
    for (let i =1; i<=nums.length+1; i++){
        if (!nums.includes(i)) return i;
    }
}

