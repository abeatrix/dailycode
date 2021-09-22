function lastIndex(arr, target){
    // your code here
    let l=0, r=arr.length-1;
    while(l<r){
        let m = Math.floor(l+(r-l)/2)
        if(arr[m]<=target) l=m+1;
        else r = m-1;
    }
    return arr[l-1]===target ? l : -1;
}

lastIndex([1,2,3,4,4,4,5], 4) //5
lastIndex([1,1,1], 1) // 2