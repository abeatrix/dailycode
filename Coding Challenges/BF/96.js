function countOne(num) {
    // your code here
    let count = 0;
    while(num>0){
        count+=num%2;
        num=Math.floor(num/2);
    }
    return count;
}