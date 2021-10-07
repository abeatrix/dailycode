// 107. Find the largest difference

function largestDiff(arr){
    if(arr.length<2) return 0;
    let min = Infinity, max = -Infinity;
    for(let n of arr){
        min = Math.min(n, min)
        max = Math.max(n, max)
    }
    return Math.abs(min-max)
}


largestDiff([-1, 2,3,10, 9])
// 11,  obviously Math.abs(-1 - 10) is the largest

largestDiff([])
// 0

largestDiff([1])
// 0