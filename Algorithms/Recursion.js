//Recursion
// write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(n) {
  if (n === 0) return 0;
  else return n + recursiveRange(n - 1);
}

// Fibonacci sequence using Recursion
function fib(n) {
  if (n <= 2) return 1;
  else return fib(n - 1) + fib(n - 2);
}
fib(4);

//Recursion
// Write a recursive function that accepts a string and returns the string in reverse
function reverse(s) {
  // add whatever parameters you deem necessary - good luck!
  let res = "",
    n = s.length - 1;

  function re() {
    if (n < 0) {
      return res;
    } else {
      res += s[n];
      n--;
      return re();
    }
  }
  return re();
}
// without helper function
function reverse(s) {
  let res = "";

  if (s.length === 0) return res;
  else res += s.slice(-1);

  res += reverse(s.slice(0, -1));
  return res;
}

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// write a recursive function that returns true if the string passed to it is a palindrome; otherwise it returns false
function isPalindrome(s) {
  if (s.length <= 1) return true;
  if (s[0] === s.slice(-1)) return isPalindrome(s.slice(1, -1));
  return false;
}
isPalindrome("amanaplanacanalpanama");

// write a recursive function that acceptes an array and a callback. The function returns true if a single value in the array returns true when apssed to the callback. Otherwise it returns false.
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// my solution
function someRecursive(arr, func) {
  if (arr.length === 0) return false;
  if (!func(arr[0])) return someRecursive(arr.slice(1), func);
  return true;
}

//Recursion
//write a recursive function that accepts an array of arrays and return a new array with all values flattened.
// my solution with while loop
function flatten(arr) {
  let final = [],
    i = 0;

  while (i < arr.length) {
    if (arr[i].length) final = final.concat(flatten(arr[i]));
    else final.push(arr[i]);
    i++;
  }

  return final;
}

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);

function flatten(arr) {
  let final = [];

  for (let i = 0; i < arr.length; i++) {
    // if arr[i] is an array
    if (arr[i].length) final = final.concat(flatten(arr[i]));
    else final.push(arr[i]);
  }

  return final;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

//Recursion
// given an array of strings, capitalize the first letteer of each string
function capitalizeFirst(arr) {
  let answer = [];

  if (arr.length === 0) return answer;
  else {
    let word = arr[0].charAt(0).toUpperCase() + arr[0].substring(1);
    answer.push(word);
  }
  answer = answer.concat(capitalizeFirst(arr.slice(1)));
  return answer;
}

capitalizeFirst(["car", "taco", "banana"]);
