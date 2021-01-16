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

// HackerRank
function compareTriplets(a, b) {
    let result = [0, 0]
    for(let i=0; i<a.length; i++){
        if(a[i]>b[i])result[0]++
        else if (b[i]>a[i]) result[1]++
    }
  return result
}

// A Very Big Sum
// https://www.hackerrank.com/challenges/a-very-big-sum
function aVeryBigSum(ar) {
    const sum = (num1, num2) => num1+num2;
    return ar.reduce(sum)
}
function aVeryBigSum(ar) {
    let sum = 0
    ar.forEach(num => sum+=num)
    return sum
}

// Diagonal Difference
// https://www.hackerrank.com/challenges/diagonal-difference
function diagonalDifference(arr) {
    // Write your code here
    let len = arr.length-1, sumX=0, sumY=0;
    for(let i=0; i<=len; i++){
        sumX+=arr[i][i]
        sumY+=arr[i][len-i]
    }
    return Math.abs(sumX-sumY)
}


// plusMinus
//https://www.hackerrank.com/challenges/plus-minus
function plusMinus(arr) {
    let ans = [0, 0, 0], len = arr.length;
    for(let i=0; i<len; i++){
      if(arr[i]===0) ans[2]=(parseFloat(ans[2])+parseFloat(1/len))
      else if(arr[i]<0) ans[1]=(parseFloat(ans[1])+parseFloat(1/len))
      else ans[0]=(parseFloat(ans[0])+parseFloat(1/len))
    }
    return ans.forEach(num=>console.log(num.toFixed(6)))
  }

//

//staircase
//https://www.hackerrank.com/challenges/staircase
function staircase(n) {
    for(let i=0; i<n; i++){
        console.log( (' '.repeat(n-i-1))+'#'.repeat(i+1) )
    }
}

// Mini-Max Sum

function miniMaxSum(arr) {
    arr.sort()
    console.log (arr.slice(0, 4).reduce((a, b) => a+b) + ' ' + arr.slice(1, 5).reduce((a, b) => a+b))

}

//https://www.hackerrank.com/challenges/birthday-cake-candles
function birthdayCakeCandles(candles) {
    // Write your code here
    for(let i=candles.length, max=Math.max(...candles); i>=0; i--){
        if(candles[i]!=max) candles.splice(i, 1)
    }
    return candles.length
}

//Time Conversion
function timeConversion(s) {
    /*
     * Write your code here.
     */

    if(s.slice(-2) === 'AM' || s.slice(0, 2)=="12") {
        if(s.slice(0, 2)=="12" && s.slice(-2) === 'AM') return('00'+s.slice(2, 8))
        else return (s.slice(0, 8))
    }
    else return((parseInt(s.slice(0, 2))+12)+s.slice(2, 8))
}


// JS 10day Challenge - Factorial
// https://www.hackerrank.com/challenges/js10-function/problem
// recursive
function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

// HackerRank 10day JS Challenge - Factorial
// https://www.hackerrank.com/challenges/js10-function/problem
// recursive
function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

function factorial(n){
    let x = n
    for(let i=n-1; i>0; i--){
        x=x*i
    }
    return x
}

// HackerRank 10day JS Challenge - Factorial
//https://www.hackerrank.com/challenges/js10-throw
function isPositive(a) {
    if(a<0) throw({message: 'Negative Error'});
    else if(a===0) throw ({message: 'Zero Error'});
    return 'YES'
}

// HackerRank 10day JS Challenge - Day 5: Inheritance
// https://www.hackerrank.com/challenges/js10-inheritance/problem
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
The Prototype Property
The drawback of internally defining the getInformation function is that it recreates that function every time we create a new Fruit object. Fortunately, every function in JavaScript has something called a prototype property, which is empty by default. We can think of a function's prototype as an object blueprint or paradigm; when we add methods and properties to the prototype, they are accessible to all instances of that function. This is especially useful for inheritance (discussed below).
*/
Rectangle.prototype.area = function(){
    return (this.w * this.h);
}

class Square extends Rectangle {
    constructor(w) {
        super(w,w)
    }
}


// HackerRank 10day JS Challenge - Day 8: Create a Button
// https://www.hackerrank.com/challenges/js10-create-a-button
//button.js
let clickMeButton = document.createElement('button');
let counter = 0
clickMeButton.id = 'btn';
clickMeButton.innerHTML = counter;
document.body.appendChild(clickMeButton);

btn.onclick = () => {
    counter++
    btn.innerHTML = counter
}

//Or
let counter = 0
btn.innerHTML = counter;

btn.onclick = () => {
    counter++
    btn.innerHTML = counter
}

// Day 1: Let and Const
// https://www.hackerrank.com/challenges/js10-let-and-const/problem
function main() {
    const PI = Math.PI
    let r = parseFloat(readLine());

    // Print the area of the circle:
    console.log(PI*(r*r))

    // Print the perimeter of the circle:
    console.log(2*PI*r)
    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

// HackerRank 10day JS Challenge - Day 8: Buttons Container
//https://www.hackerrank.com/challenges/js10-buttons-container
// button .JS
let container = document.createElement('div')
container.id = 'btns'
document.body.appendChild(container);

let i=1
while(i<10){
    let btn = document.createElement('button')
    btn.id = 'btn'+i;
    btn.innerHTML = i;
    btns.appendChild(btn);
    i++
}

btn5.onclick = () => {
    let diff = [3,-1,-1,3,0,-3,1,1,-3]
    let nums = []
    for(let i=1; i<10; i++){
        let btni = document.getElementById('btn'+i)
        nums.push(btni.innerHTML)
    }
    for(let i=1; i<10; i++){
        let btni = document.getElementById('btn'+i)
        btni.innerHTML = nums[i-1+diff[i-1]]
    }
}

