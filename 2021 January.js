// Leetcode Top Interview Questions

// Day 2: Loops
// https://www.hackerrank.com/challenges/js10-loops/problem?h_r=next-challenge&h_v=zen

function vowelsAndConsonants(s) {
    const a = [...s]
    const x = []
    a.forEach(c => 'aeiou'.includes(c)?console.log(c): x.push(c));
    x.forEach(c => console.log(c))
}

vowelsAndConsonants('javascriptloops')

// Day 7: Regular Expressions I
// https://www.hackerrank.com/challenges/js10-regexp-1/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
let re =  /^([aeiou]).*\1$/;

//1$ checks that the last character matches the first captured charcter

//Day 3: Try, Catch, and Finally
function reverseString(s) {
    if(typeof(s)!='string'){
        console.log('s.split is not a function')
        console.log(s)
    }
    else{
      console.log(s.split("").reverse().join(""))
    }
}
reverseString("123")

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
var containsDuplicate = function(nums) {
    let sorted = nums.sort((a,b)=>a-b)
    for(let i=0; i<sorted.length; i++){
        if (nums[i]==nums[i+1])return true
    }
    return false
};

var containsDuplicate = function(nums) {
    return nums.length > new Set(nums).size
};

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
var rotate = function(nums, k) {
    let i=0
  while(i<k){
    nums.unshift(nums.pop());
    i++;
  }
};

var rotate = function(nums, k) {
    let a = nums.slice(nums.length-k, nums.length)
    let b = nums.slice(0, nums.length-1-k)
    return a.concat(b)
};

// Best Time to Buy and Sell Stock II
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
var maxProfit = function(prices) {
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        if(prices[i+1] > prices[i]) {
        sum += prices[i+1] - prices[i];
        }
    }
  return sum;
};

// Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    for(let i=nums.length-1; i>0; i--){
        if(nums[i]==nums[i-1]){
            nums.splice(i, 1)
        }
    }
    return nums.length
};


//
var singleNumber = function(nums) {
    nums.sort()
    for(let i=0;i<nums.length;i+=2){
        if(nums[i]!=nums[i+1]) return nums[i]
    }
}

var singleNumber = function(nums) {
    let x = new Set(nums)
    let y = ([...x].reduce((a, b) => a + b))
    let sum = nums.reduce((a, b) => a + b)
    return  y*2-sum
};

var singleNumber = function(nums) {
    for(let i = 1; i<nums.length; i++){
        nums[i] = nums[i] ^ nums[i-1]
    }
    return nums[n-1]
};

singleNumber([4,1,2,1,2,2])

// Move Zeroes
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/
var moveZeroes = function(nums) {
    for(let i=nums.length; i>=0; i--){
        if(nums[i]===0){
            nums.splice(i, 1)
            nums.push(0)
        }
    }
    return nums
};

// Two Sum
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        let x = target-nums[i]
        if(nums.slice(i+1, nums.length).includes(x)) {
          return [i, nums.lastIndexOf(x)]
        }
  }
};

// Plus One
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
var plusOne = function(digits) {
    let i = digits.length-1
    while(true){
        digits[i] = parseInt(digits[i])+1
        if(digits[i] == 10){
        digits[i] = 0
        if(i==0) {
            digits.unshift(1)
            return digits
            }
        } else return digits
        i--
    }
};
