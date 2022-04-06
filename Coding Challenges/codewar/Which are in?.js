function inArray(array1,array2){
    //...
    let len1 = array1.length-1, len2 = array2.length-1, p1 =0, p2=0, ans = [];
    while(p1<=len1){
      if(array2[p2].includes(array1[p1]) || p2 === len2){
        if(array2[p2].includes(array1[p1])){ans.push(array1[p1])}
        p1++
        p2=0
      } else {
        p2++
      }
    }
    return ans.sort()
  }