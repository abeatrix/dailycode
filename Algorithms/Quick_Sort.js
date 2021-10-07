function quickSort(arr, left=0, right=arr.length-1){
    if(left<right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex-1, right);
    }
    return arr;
}
quickSort([3,5,2,1,4])