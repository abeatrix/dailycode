function spinWords(string){
    //TODO Have fun :)
    const words = string.split(' ')
    let ans = []
    for(let w of words){
        ans.push(w.length > 4 ? w.split('').reverse().join('') : w)
    }
    return ans.join(' ')
  }
  
  spinWords('This is another test')