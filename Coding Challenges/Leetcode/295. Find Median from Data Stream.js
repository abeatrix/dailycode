/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.nums.length === 0) this.nums.push(num);
    else {
        let start = 0;
        let end = this.nums.length;
        while (start < end){
            let mid = Math.floor((start+end)/2);
            if (num > this.nums[mid]) start = mid+1;
            else end = mid;
        }
        this.nums.splice(start,0,num);
    }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const mid = Math.floor(this.nums.length/2);
    return (this.nums.length%2===0) ? (this.nums[mid-1]+this.nums[mid])/2 : this.nums[mid];
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
