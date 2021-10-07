
/**
 * @param {number[]} arr
 */
// trying to avoid running two loops
 function insertionSort(arr) {
    // your code here
    let i=1,p=0,len=arr.length;
    while(i<len){
        if(arr[i-p]<arr[i-p-1] && i-p>0){
            [arr[i-p], arr[i-p-1]] = [arr[i-p-1], arr[i-p]]
            p++
        } else {
            i++;
            p=0;
        }
    }
    return arr;
}

insertionSort([3, 2, 1]); //1,2,3
insertionSort([1]); //1
