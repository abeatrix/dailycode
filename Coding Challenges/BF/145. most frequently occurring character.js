/**
 * @param {string} str
 * @returns {string | string[]}
 * */
 
function count(str) {
    // your code here
    let map = new Map(), max=0, ans;
    for(let c of str){
        if(!map.has(c)) map.set(c,0);
        //   map.set(c, (map.get(c) || 0)+1);
        let v = map.get(c)+1
        map.set(c, v);
        if(v>max){
            max = v;
            ans = c;
        } else if (v===max){
            if(!Array.isArray(ans)) ans=[ans]
            ans.push(c)
        }
    }
    return ans;
}

count('abbccc')
count('abbcccddd')