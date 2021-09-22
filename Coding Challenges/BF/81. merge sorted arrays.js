function merge(arrList){
    // let arr = arrList.flat();
    let arr = arrList.reduce((acc, val) => acc.concat(val), []);
    // insertion sort
    for(let i=0; i<arr.length; i++){
        let r = arr[i], l = i-1;
        while(l>=0 && array[l]>r){
            arr[l+1]=arr[l];
            l=l-1;
        }
        arr[l+1]=x;
    }
}