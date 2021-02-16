var uniquePaths = function(m, n) {
    let map = new Array(n).fill(1)
    for(let i=1; i<m;i++){
        for(let j=1; j<n;j++){
            map[j] += map[j-1]
        }
    }
    return map[n-1]
};

uniquePaths(3,7)
