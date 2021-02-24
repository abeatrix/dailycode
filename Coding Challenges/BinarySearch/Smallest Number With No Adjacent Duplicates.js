class Solution {
    solve(s) {
        let b = s.split("")
        for(let i=0;i<b.length;i++){
            if(b[i]==="?"){
                if(b[i-1]!=1 && b[i+1]!=1){
                    b[i] = 1
                } else if ( b[i-1]!=2 && b[i+1]!=2) {
                    b[i] = 2
                } else b[i] = 3
            }
        }
        return b.join("")
    }
}

//in 32ms in javascript — faster than 100.00%

function solve(s) {
    let map = new Map();
    let res = []
    map.set(s[0], 0)
    for(let i=0;i<s.length;i++){
      if(!map.has(s[i])) {
          let c = map.get(s[i-1])
          res.push(c)
          res.push(s[i-1])
          map.clear()
          map.set(s[i], 0)
      }
      let d = map.get(s[i])
      map.set(s[i], d+1)
    }
}
solve("aaaabbbccdaa")
solve("aaaabbbccdaa")