// Convert string to camel case
function toCamelCase(str){
    const words = str.split(/_|-/);
    let ans = words[0];
    for(let i=1;i<words.length;i++){
      ans += words[i][0].toUpperCase()+words[i].slice(1)
    }
    return ans;
  }