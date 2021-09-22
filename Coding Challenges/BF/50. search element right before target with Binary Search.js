// 50. search element right before target with Binary Search(possible duplicate array)
function elementBefore(arr, target){
    // your code here
    let l = 0, r = arr.length;
    while(l<r){
        let m = Math.floor((l+r)/2)
        if(arr[m]>=target) r=m;
        else l=m+1;
    }
    return arr[r-1]!=target? arr[r-1] : undefined;
}