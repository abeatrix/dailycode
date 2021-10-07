function lastIndex(arr, target){
    let l = 0, r = arr.length;
    while(r>l) {
        let m = Math.floor((l+r)/2)
        if(arr[m]<=target) l=m+1
        else r=m-1;
    }
    if(arr[l] === target) return l
    if(arr[l-1] === target) return l-1
    return -1
}
lastIndex([1,2,3,4,4,4,5], 4) //5
lastIndex([1,1,1], 1) // 2