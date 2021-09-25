/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
 function binarySearch(arr, target){
    // your code here
    let l = 0, r=arr.length-1;
    while(l<=r){
        let m = Math.floor((l+r)/2)
        if(arr[m]===target) return m;
        else if(arr[m]<target) l=m+1
        else r=m-1;
    }
    return -1
}

binarySearch([1,2,3,4, 100, 1000, 10000], 4)