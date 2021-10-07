function findTwo(arr) {
    // your code here
    let map = new Map();
    for(let i in arr){
        if(map.has(0-arr[i])) return [map.get(0-arr[i]), i];
        map.set(arr[i], i)
    }
    return null;
}