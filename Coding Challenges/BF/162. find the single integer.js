var findSingle = function(arr) {
    let map = new Map();
    for(let i=0; i<arr.length; i++){
      if(!map.has(arr[i])) map.set(arr[i], 0);
      else map.delete(arr[i]);
    }
    console.log([...map][0][0]);
};
findSingle([10, 2, 2 , 1, 0, 0, 10])

var findSingle = function(arr) {
    let sumAll=0, sum=0, map=new Map();
    for(let i=0; i<arr.length; i++){
      sumAll+=arr[i]
      if(!map.has(arr[i])) map.set(arr[i], 0);
      else sum+=arr[i];
    }
    return sumAll-sum*2
};



findSingle([10, 2, 2 , 1, 0, 0, 10])
