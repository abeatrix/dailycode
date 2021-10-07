
/**
 * @param {string} str
 * @return {string}
 */
 function longestUniqueSubstr(s) {
    // your code here
      let start = 0, map = new Map(), ans = [0, 0], maxLen = 0;
      for(let i=0; i<s.length; i++){
        if(!map.has(s[i])) map.set(s[i], i);
        else {
          start = map.get(s[i])+1
          map.set(s[i], i)
        }
        if(i-start > maxLen) {
            maxLen = i-start
            ans = [start, i]
          }
      }
      return s.slice(ans[0], ans[1]+1);
  
  }