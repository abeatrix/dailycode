// 40. implement Bubble Sort
// two loops
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

function bubbleSort(arr) {
    // your code here
    let swapped=true, len=arr.length-1;
    while(swapped){
        swapped = false;
        for(let i=0; i<len; i++){
            if(arr[i]>arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                swapped = true;
            }
        }
    }
    return arr;
}

// one loop - doesn't scale
function bubbleSort(arr) {
    let swapped=true, i=0, len=arr.length-1;
    while(i<len){
        if(arr[i]>arr[i+1]){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            swapped = true;
        }
        i++;
        if(i==len && swapped) {
            i=0;
            swapped=false;
        } else if(i==len && !swapped) return arr;
    }
}

bubbleSort([4,2,100,99,10000,-1, 99, 2])
bubbleSort([12, 6, 3, 7, 13, 8]);

