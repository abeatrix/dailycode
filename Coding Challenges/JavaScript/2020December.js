// 12-21

/* Hacker Rank Insertion Sort - Part 1
Insert element into sorted list
Given a sorted list with an unsorted number  in the rightmost cell, can you write some simple code to insert  into the array so that it remains sorted? */

function main(n, arr) {
  const x = arr[n - 1];
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] >= x) {
      if (arr[i - 1] <= x || i == 0) {
        arr[i] = x;
        console.log(arr.join(" "));
        break;
      } else arr[i] = arr[i - 1];
    }
    console.log(arr.join(" "));
  }
}
main(5, [2, 4, 6, 8, 0]);

// Compare to left value
function main(n, arr) {
  let i = n - 1;
  while (i) {
    let x = arr[i];
    if (arr[i - 1] > x) {
      arr[i] = arr[i - 1];
      arr[i - 1] = x;
    } else {
      break;
    }
    console.log(arr.join(" "));
    i--;
  }
}
main(5, [2, 4, 6, 8, 3]);

// Insertion Sort - Part 2
/* In this challenge, print the array after each iteration of the insertion sort, i.e., whenever the next element has been inserted at its correct position. Since the array composed of just the first element is already sorted, begin printing after placing the second element. */
function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  let i = 0;
  while (i < n - 1) {
    let x = arr[i + 1];
    if (arr[i] > x) {
      arr[i + 1] = arr[i];
      arr[i] = x;
      let j = i;
      while (arr[j] < arr[j - 1]) {
        arr[j] = arr[j - 1];
        arr[j - 1] = x;
        j--;
      }
    }
    console.log(arr.join(" "));
    i++;
  }

  insertionSort2(n, arr);
}
// TO TEST
function main(n, arr) {
  let i = 0;
  while (i < n - 1) {
    let x = arr[i + 1];
    if (arr[i] > x) {
      arr[i + 1] = arr[i];
      arr[i] = x;
      let j = i;
      while (arr[j] < arr[j - 1]) {
        arr[j] = arr[j - 1];
        arr[j - 1] = x;
        j--;
      }
    }
    console.log(arr.join(" "));
    i++;
  }
}
main(7, [3, 4, 7, 5, 6, 2, 1]);

//12-22
// 739. Daily Temperatures

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  for(let i=0; i<T.length; i++){
    let count = 1
    while(T[i+count]<=T[i]){
      count++
    }
    if (i+count>T.length-1){
      T[i] = 0
      } else T[i] = count
  }
  return T
};
dailyTemperatures([89,62,70,58,47,47,46,76,100,70])


// maxDepth of a Binary Tree
var maxDepth = function(root) {
  if(root.lenght<3) return root.lenght
  else return Math.ceil(Math.log2(root.length))
};
maxDepth([3,2,3])


// Big Sorting
function bigSorting(unsorted) {
  let swapped = true;
      while(swapped){
          swapped = false;
          for (let i = 0; i<unsorted.length; i++){
              if(unsorted[i] > unsorted[i+1]){
                  let x = unsorted[i];
                  unsorted[i] = unsorted[i+1]
                  unsorted[i+1] = x
                  swapped = true
              }
          }
      }
      return unsorted
  }
  bigSorting([6, 31415926535897932384626433832795, 1, 33, 107, 3, 5])

  function bigSorting(unsorted) {
    return unsorted.sort((a, b) => {
        if (a.length == b.length) {
            return a > b ? 1 : -1;
        }

        return a.length - b.length;
    });
}

bigSorting([6, 31415926535897932384626433832795, 1, 33, 107, 3, 5])

//1365. How Many Numbers Are Smaller Than the Current Number - Easy
//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
var smallerNumbersThanCurrent = function(nums) {
  let res = []
    for(let i of nums){
        let count = 0
        for(let j=0; j<nums.length; j++){
            if (nums[j] < i){
                count++
            }
        }
        res.push(count)
    }
    return res
};

var smallerNumbersThanCurrent = function(nums) {
  var x = nums.slice().sort((a, b) => a - b)

  return nums.map(it => x.indexOf(it))
};

smallerNumbersThanCurrent([8,1,2,2,3])

// USING BUBBLE SORT
var smallerNumbersThanCurrent = function(nums) {
  let ans=new Array(nums.length).fill(0); //create new array with same length filled with 0s
  for(let i=0;i<nums.length-1;i++){
      for(let j=i+1;j<nums.length;j++){
          if(nums[i]>nums[j])ans[i]++;
          if(nums[i]<nums[j])ans[j]++;
      }
  }
  return ans;
};

// 1588. Sum of All Odd Length Subarrays - EASY
// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

var sumOddLengthSubarrays = function(arr) {
  var x = 1
  let sum = 0
  while (x <= arr.length){
    for (let i = 0; i < arr.length; i++){
      if (i+x<=arr.length){
        sum += arr.slice(i, i+x).reduce((a, b) => a + b, 0)
      }
    }
    x +=2
  }
  return sum
};

const sumOddLengthSubarrays = (arr, sum = 0) => {
  const n = arr.length;

  //Generate the prefix sum array
  const prefix = Array(n+1).fill(0);
  for (let i = 0; i < n; i++)
      prefix[i+1] = prefix[i]+arr[i];

  //Loop through all odd-length sequences and add sums to answer, then return
  for (let i = 0; i < n; i++)
      for (let j = i+1; j < n+1; j+=2)
          sum += (prefix[j]-prefix[i]);
  return sum;
};

//12-23
// 912. Sort an Array - Given an array of integers nums, sort the array in ascending order. - Medium
/* Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5] */
// using merge sort...

var sortArray = function(nums) {
  if (nums.length<2) return nums
  const m = Math.floor(nums.length/2), l = nums.slice(0, m), r = nums.slice(m);

  return merge(sortArray(l), sortArray(r));

  function merge(l, r){
      let sorted = [];

      while(l.length && r.length){
          if(l[0]<r[0]) sorted.push(l.shift())
          else sorted.push(r.shift())
      }
      return sorted.concat(l.slice().concat(r.slice()));
  }

};

sortArray([5,2,3,1])

//built in function
var sortArray = function(nums) {
  return nums.sort((a, b) => a-b)
};

//bubble sort
var sortArrayBubbleSort = function(nums) {
  for (let i = 1, len = nums.length; i < len; i++ ) {
    for (let j = 0; j < len - i; j++) {
      if (nums[j] > nums[j+1]) {
        // swapping using diff
        nums[j]     = nums[j] + nums[j + 1]
        nums[j + 1] = nums[j] - nums[j + 1]
        nums[j]     = nums[j] - nums[j + 1]
        // swapping using destructuring
        // [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
  }
  return nums
};

//bubble sort with swap tracker
var sortArray = function(nums) {
  let swapped = true;
  for (let i = 1; i < nums.length && swapped; i++ ) {
    swapped = false
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j+1]) {
        swapped = true;
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
  }
  return nums
};

// Selection Sort
var sortArray = function(nums) {
  for (let i = 0; i < nums.length; i++ ) {
    let mini = i
    for (let j = i+1; j < nums.length; j++) {
      if(nums[mini] > nums[j]) mini=j
    }
    [nums[mini], nums[i]] = [nums[i], nums[mini]];
  }
  return nums
};


// Quick Sort -
var sortArray = function(nums, first = 0, last = nums.length-1) {
  if (first>=last) return nums

  let pivot = nums[last]
  let count = first-1
  for (let i = first; i<last; i++){
    if(nums[i] < pivot) {
      count++
      [nums[i], nums[count]] = [nums[count], nums[i]]
    }
  }
  count++
  [nums[last], nums[count]] = [nums[count], nums[last]]
  sortArray(nums, first, count-1)
  sortArray(nums, count+1, last)
  return nums
};

sortArray([5,2,3,1])
