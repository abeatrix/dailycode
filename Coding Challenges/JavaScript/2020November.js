// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
// The maximum number of consecutive 1s is 3.

var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let maxCount = 0
    for (let i=0; i < nums.length; i++){
        if (nums[i]==1) {
            count++
        } else {
            if(maxCount < count){
                maxCount = count
                count = 0
            } else {
                count = 0
            }
        }
    }
    if(maxCount < count){
        return count}
    else {
        return maxCount
    }
};

findMaxConsecutiveOnes([1,1,0,1,1,1])


var findMaxConsecutiveOnes = function(nums) {
    let sum = 0
    let max = 0
    for(num of nums){
        sum = sum * num + num;
        if *(sum>max){max-sum;}
    }
    return max
};

findMaxConsecutiveOnes([1,1,0,1,1,1])

// Given an array nums of integers, return how many of them contain an even number of digits.
// Example 1:
// Input: nums = [12,345,2,6,7896]
// Output: 2
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).

var findNumbers = function(nums) {
    let count = 0
    for (num of nums){
        if(num.toString().length%2==0){
            count++
        }
    }
    return count
};


// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

var sortedSquares = function(A) {
    let B = []
    A.forEach((num)=> {
        B.push(num*num)
    })
    return B.sort(function(a, b){return a-b})
};
sortedSquares([-7,-3,2,3,11])



var duplicateZeros = function(arr) {
    let i = 0
    const len = arr.length
    while(i<len){
        if(arr[i]==0){
            arr.splice(i, 0, 0)
            arr.pop()
            i++
        }
        i++
    }
    return arr
};

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
/* Note:
The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6] */

var merge = function(nums1, m, nums2, n) {
    nums1.splice(-n)
    nums1 = nums1.concat(nums2)
    return nums1.sort(function(a, b){return a-b})
};
merge([1,2,3,0,0,0],3, [2,5,6],3)

var merge = function(nums1, m, nums2, n) {
    if(n!=0) nums1.splice(-n)
    nums1.push(...nums2)
    return nums1.sort((a, b) => a - b)
};

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m)
    nums1.push(...nums2)
    nums1.sort((a, b) => a - b)
};


var removeElement = function(nums, val) {
    nums.filter(num=>num!=val)
};


// var removeElement = function(nums, val) {
//     nums.forEach((num, i)=>{
//         if(num==val){
//             nums.splice(i, 1)
//         }
//     })
// };


// """ Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length. """

var removeElement = function(nums, val) {
    nums.filter(num=>num!=val)
};


var removeElement = function(nums, val) {
    nums.forEach((num, i)=>{
        if(num==val){
            nums.splice(i, 1)
        }
    })
};

var removeElement = function(nums, val) {
    let i = nums.length
    while(i>=0){
        if(nums[i]==val){
            nums.splice(i, 1)
            i++
        }
        i--
    }
};

/* Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. */

var removeDuplicates = function(nums) {
    let unique = new Set(nums)
    nums.splice(-nums.length)
    nums.push(...unique)
  };

  removeDuplicates([0,0,1,1,1,2,2,3,3,4])

  var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length; i++){
      while(nums[i]==nums[i+1]){
        nums.splice(i+1, 1)
      }
    }
  };

  removeDuplicates([0,0,1,1,1,2,2,3,3,4])

/*   Check If N and Its Double Exist
  Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M). */

  var checkIfExist = function(arr) {
    arr.sort()
    for (let i=0; i<arr.length; i++) {
      if (arr[i]!=0 && (arr.includes(arr[i]*2) || arr.includes(arr[i]/2) )) {
        return true
      } else if (arr[i]==0 && arr[i+1]==0){
          return true
      }
    }
    return false
};

checkIfExist([-2,0,10,-19,4,6,-8])

var checkIfExist = function(arr) {
    let hold = [];
    for (let num of arr) {
        if(hold.includes(num*2) || hold.includes(num/2)) {
            return true;
        } else {
            hold.push(num)
        }
    }
    return false;
};
checkIfExist([-2,0,10,-19,4,6,-8])

/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < A[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 */

var validMountainArray = function(arr) {
    let turned = false
    if(arr.length<3 || arr[0]>arr[1]) return false
    for (let i = 0; i<arr.length-1; i++){
        if (arr[i]<arr[i+1]){
            if(turned) return false
        } else if (arr[i]>arr[i+1]) {
            if(!turned) turned = true
        } else return false
    }
    return turned
};
validMountainArray([0,1,2,3,4,5,6,7,8,9])



var replaceElements = function(arr) {
    let temp = [...arr]
    arr.forEach((num, i) => {
        let max = Math.max(...temp)
        let imax = temp.indexOf(max)
        arr.splice(i, 1, max)
        if(max == temp[1]){
          temp.splice(imax, 1, 0)
        }
        temp.splice(0, 1)
    })
    arr.splice(-1, 1, -1)
    return arr
};
replaceElements([17,18,5,4,6,1])

var replaceElements = function(arr) {
    arr.push(-1)
    for(let i = arr.length-2; i>0; i-- ){
        if(arr[i-1] < arr[i])
            arr[i-1]=arr[i];
    }
    arr.shift()
    return arr
}

/* Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0] */

var moveZeroes = function(nums) {
    let i = nums.length
    while (i>=0){
      if (nums[i]===0){
      nums.splice(i, 1)
      nums.push(0)
      }
      i--
    }
  };
moveZeroes([0,1,0,3,12])

var moveZeroes = function(nums) {
    for(let i =0; i<=nums.length;i++){
      let num = nums[i];
      if (num == 0 ){
        nums.push(0);
        nums.splice(i, 1)
        i--
      }
    }
};

// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.
// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


var sortArrayByParity = function(A) {
    let len = A.length
    let i = 0
    while(i != len) {
        if(A[i]%2!=0){
            A.push(A[i])
            A.splice(i, 1)
            i--
            len--
        }
        i++
    }
    return A
};
sortArrayByParity([3,1,2,4])


// SLOW
var sortArrayByParity = function(A) {
    A.forEach((num, i)=>{
         if(num%2==0){
            A.unshift(num)
            A.splice(i+1, 1)
         }
     })
     return A
 };
 sortArrayByParity([3,1,2,4])


//   IN PLACE
var sortedSquares = function(A) {
    for (let i=0; i<A.length; i++) {
        A[i] = A[i]**2
    }
    return A.sort(function(a, b){return a-b})
};


var sortArrayByParity = function(nums) {
    let len = nums.length
    for(let i =0; i<=len;i++){
      let num = nums[i];
      if (num == 0 ){
        nums.push(0);
        nums.splice(i, 1)
        len--
      }
    }
};
/*
Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

 */

var heightChecker = function(heights) {
    let A = [...heights].sort(function(a,b){return a-b})
    let count = 0
    for(let i=0; i<heights.length; i++){
        if (A[i]!=B[i]){
            count++
        }
    }
    return count
};

const heightChecker = (heights) => {
    let count = 0;
    let sorted = [...heights].sort((a, b)=> {
        return a - b;
    })
    for ( let i = 0; i < heights.length; i++) {
        let num = heights[i];
        let sortedNum = sorted[i];
        if (sortedNum !== num) {
            count++;
        }
    }
    return count;
}



var thirdMax = function(nums) {
    let A = new Set(nums)
    let sorted = Array.from(A).sort(function(a,b){return a-b})
    if(sorted.length>=3){return sorted[sorted.length-3]}
    else{return sorted[sorted.length-1]}
};

thirdMax([3, 2, 1])


var findDisappearedNumbers = function(nums) {
    let sorted = nums.sort(function(a,b){return a-b})
    let max = sorted.length
    let missing = []
   for (let i = max; i>0; i--) {
        if (nums[i] != i){
          if(!(nums.includes(i))){
            missing.push(i)
          }
        }
    }
    return missing
};

var findDisappearedNumbers = function(nums) {
    let sorted = nums.sort(function(a,b){return a-b})
    let missing = []
    for (let i = 1; i< sorted.length; i++){
        if (nums[i]-1 != nums[i-1] && nums[i]!=nums[i-1]){
            let diff = nums[i]-nums[i-1]-1
            while (diff > 0) {
              missing.push(nums[i]-diff)
              diff--
            }
        } else if (sorted.length < 3 && nums[i]==nums[i-1]){
            if(nums[i]==1){
              missing.push(nums[i]+1)
            } else {
              missing.push(nums[i]-1)
            }
        }
    }
    return missing
};

