// HARD

var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2);
    let len = nums1.length;
    if(len<2) return nums1;
    nums1.sort((a,b)=>a-b);
    let mid = Math.floor(len/2);
    if(len%2==0){
        return (nums1[mid]+nums1[mid-1])/2
    } return nums1[mid];
};

// Runtime: 128 ms, faster than 90.23% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 45.6 MB, less than 33.76% of JavaScript online submissions for Median of Two Sorted Arrays.