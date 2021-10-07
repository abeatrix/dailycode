function firstIndex(arr, target){
    // your code here
    let l = 0, r = arr.length;
    while(r>l) {
        let m = Math.floor((l+r)/2);
        if(arr[m]>=target) r = m-1;
        else l = m+1;
    }
    return arr[l] === target ? l : -1;
}