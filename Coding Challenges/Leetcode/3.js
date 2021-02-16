var lengthOfLongestSubstring = function(s) {
    let d = [], f = [];
    for(let i in s){
        if( !f.includes(s[i]) ) f.push(s[i]);
        else {
            if(d.length < f.length) d = f;
            f = f.slice(f.indexOf(s[i])+1)
            f.push(s[i])
        }
    }
    return f.length > d.length ? f.length : d.length;
}
lengthOfLongestSubstring("pwwkew")

var lengthOfLongestSubstring = function(s) {
    let start = 0, maxLen = 0, charList = {};
    for(let i in s){
        if(charList[s[i]] && start <= charList[s[i]]) start = parseInt(charList[s[i]])+1
        else { i-start+1>maxLen ? maxLen = i-start+1 : null; }
        charList[s[i]] = i;
    }
    return maxLen;

};
lengthOfLongestSubstring("pwwkew")  //3
lengthOfLongestSubstring("abcabcbb") //3
