// 138. Intersection of two sorted arrays
// using pointers
function intersect(arr1, arr2) {
    // your code here
    let p1=0,p2=0,ans=[],len1=arr1.length,len2=arr2.length;
    while(p1<len1 && p2<len2){
        if(arr1[p1]>arr2[p2]) p2++
        else if(arr2[p2]>arr1[p1]) p1++
        else {
            ans.push(arr1[p1]);
            p1++;
            p2++;
        }
    }
    return ans;
}

// using map
function intersect(arr1, arr2){
    // your code here
    let map = new Map(), ans = [];
    for(let n of arr1){
        if(!map.has(n)) map.set(n, 1)
        else {
            let v = map.get(n)+1;
            map.set(n, v)
        }
    }
    for(let n of arr2){
        if(map.has(n)) {
            let v = map.get(n)-1
            ans.push(n)
            if(v<1) map.delete(n)
            else map.set(n, v)
        }
    }
    return ans;
}
intersect([1,2,2,3,4,4],[2,2,4,5,5,6,2000]) // [2,2,4]