function firstNonRepeatingLetter(s) {
    // Add your code here
    for(let i=0;i<s.length;i++){
      let code = s.charCodeAt(i)
      let opp = s.lastIndexOf(String.fromCharCode(code < 65 ? code + 32 : code - 32))
      if(s.indexOf(s[i]) === s.lastIndexOf(s[i]) && s.indexOf(s[i]) >= opp){
        return s[i]
      }
    }
    return ""
  }