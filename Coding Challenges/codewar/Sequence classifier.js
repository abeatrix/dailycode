// Sequence classifier
function sequenceClassifier(arr){
    //your code here
    let up = false, down =false, repeated = false;
    
    if(arr.length<2) return 5;

    for(let i=1; i<arr.length; i++){
      if(arr[i]>arr[i-1]) {
        up=true
      } else if (arr[i]<arr[i-1]) {
        down=true
      } else {
        repeated=true
      }
    }

    if(up&&!down) return !repeated ? 1 : 2 // increasing or notdecreasing
    if(!up&&down) return !repeated ? 3 : 4// decreasing or notincreasing
    return !up&&!down&&repeated ? 5 : 0 // constant or unordered
  }