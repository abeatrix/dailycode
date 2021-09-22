//51. search element right after target with Binary Search(possible duplicate array)
function elementAfter(arr, target){
    // your code here
    let l = 0, r = arr.length;
    while(l<r){
        let m = Math.floor((l+r)/2)
        if(arr[m]<=target) l = m + 1;
        else r = m;
    }
    return arr[l-1] == target ? arr [l] : undefined;
}


function elementAfter(arr, target){
    let l = 0, r = arr.length;
    while(l<r){
        if(arr[l]>target) r--;
        else l++;
    }
    return arr[l-1] == target ? arr [l] : undefined;
}

elementAfter([1,2,3,4,4,4,4, 100, 1000, 10000], 4)