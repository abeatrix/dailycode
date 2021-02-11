// Using hash - 90ms
var uniqueLetterString = function(S) {
    let map = new Map(), count = 0, res = 0;
    for(let i=0; i<S.length; i++){
      if(!map.has(S[i])) map.set(S[i], [-1, -1]);
        let pos = map.get(S[i]);
        // pos[0] = position prev last seen
        //pos[1] = position last seen
        // count = count + (current - last seen) - (last seen - prev seen)
        count += (i - pos[1]) - (pos[1] - pos[0]);
        // update positions = move last seen to prev last seen position, and last seen to current position
        map.set(S[i], [pos[1], i])
        res += count;
    }
    return res;
};
uniqueLetterString("ABC")

// Using array - 76ms
var uniqueLetterString = function(S) {
    let map = new Array(26).fill([-1,-1]);
    let count =0, res =0;
    for(let i=0; i<S.length; i++){
        let c = S[i].charCodeAt()-65, pos = map[c];
        count += (i - pos[1]) - (pos[1] - pos[0]);
        map[c] = [pos[1], i];
        res += count;
    }
    return res;
};
uniqueLetterString("ABA")


// Someone's Solution
var uniqueLetterString = function(s) {
    const contribute = Array(26).fill(0);
    const lastPos = Array(26).fill(0);
    let res = 0, cur = 0;
    for (let i = 0;i < s.length;i++) {
        let charIdx = s[i].charCodeAt(0) - 65;
        cur -= contribute[charIdx];
        contribute[charIdx] = i - (lastPos[charIdx] - 1);
        cur += contribute[charIdx];
        lastPos[charIdx] = i + 1
        res += cur;
    }
    return res;
};
