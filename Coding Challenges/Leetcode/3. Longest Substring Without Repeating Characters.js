var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;
    let i=0,j=0,count=0;
    let map = new Map();
    while(i<s.length){
      let l = s[i];
      while(map.has(l)){
        map.delete(l)
        j=j+1
      }
      map.set(s[i])
      count = Math.max(count, i-j+1)
      i=i+1
    }
    return count
};
