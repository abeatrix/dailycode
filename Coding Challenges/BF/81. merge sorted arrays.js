function merge(arrList) {
    // your code here
    let arr = arrList.flat();
    // insertion sort
    for(let i=0; i<arr.length; i++){
      let r = arr[i], l = i-1;
      while(l>=0 && arr[l]>r){
        arr[l+1]=arr[l];
        l=l-1;
      }
      arr[l+1]=r;
    }
    return arr;
  }

function merge(arrList) {
    // your code here
    let arr = arrList.reduce((acc, val) => acc.concat(val), []);
    for(let i=0; i<arr.length; i++){
      let r = arr[i], l = i-1;
      while(l>=0 && arr[l]>r){
        arr[l+1]=arr[l];
        l=l-1;
      }
      arr[l+1]=r;
    }
    return arr;
  }

//radix sort
function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function merge(arrList) {
// your code here
let arr = arrList.flat();
let max = 0;
for(let n of arr) {
  max = Math.max(n, max)
}
max = max.toString().length
for(let i=0; i<max; i++){
  let buckets = Array.from({length: 10}, ()=>[])
  for(let n of arr){
    buckets[getDigit(n, i)].push(n)
  }
  arr = [].concat(...buckets)
}
return arr;
}