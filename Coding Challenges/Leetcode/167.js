var twoSum = function(numbers, target) {
    let l = 0, r=numbers.length-1;
    while(l<r){
        if(target-numbers[r]===numbers[l]) return [l+1, r+1];
        else if(numbers[r]+numbers[l]>target) r--;
        else l++;
    }
};
