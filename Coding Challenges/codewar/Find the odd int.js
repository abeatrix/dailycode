function findOdd(A) {
    let map = new Map()
    let ans = new Set();
    //happy coding!
    for(let c of A){
      let count = map.get(c)+1 || 1
      map.set(c, count)
      if(count % 2 !== 0){
        ans.add(c)
      } else {
        ans.delete(c)
      }
    }
    return [...ans][0]
}

// Alt
function findOdd(A) {
    //happy coding!
    return A.reduce((a, b) => a ^ b);
}