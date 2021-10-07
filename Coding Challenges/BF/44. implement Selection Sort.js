// 44. implement Selection Sort

/**
 * @param {number[]} arr
 */
 function selectionSort(arr) {
    // your code here
    let min=0, len=arr.length, i=0, pointer=1;
    while(i<len && len>1){
        if(arr[pointer]<arr[min]) min=pointer;
        pointer++;
        if(pointer===len){
            [arr[i], arr[min]] = [arr[min], arr[i]]
            i++;
            pointer=i;
            min=i;
        }
    }
    return arr;
}