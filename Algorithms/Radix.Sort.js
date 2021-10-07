// Radix Sort Pseudocode
/* 
- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop from k=0 up to this largest number of digits
- For each iteration of the loop:
    - Create buckets for each digit (0 to 9)
    - place each number in the corresponding bucket based on its kth digit
- Replace our existing array with values in our bucket, starting with 0 and going up to 9
- return list at the end
*/


/*
HELPERS
In order to implement radix sort, it's helpful to build a few helper function first:
 */

// getDigit(num, place) - returns the digit in num at the given place value 
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/* getDigit(12345, 0) // first digit 5
getDigit(12345, 1) // 4
getDigit(12345, 2) // 3
getDigit(12345, 3) // 2
getDigit(12345, 4) // 1
getDigit(12345, 4) // 0 */
// return the number of digits in num
function digitCount(num) {
    if(num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}
// Given an array of numbers, return the number of digits in the largest numbers in the list
function mostDigits(nums) {
    let maxDigits = 0;
    for(let i=0; i<nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

function radixSort(arr) {
    let most = mostDigits(arr);
    for(let k=0; k<most; k++) {
        let buckets = Array.from({length: 10}, () => [])
        for(let num of arr) {
            buckets[getDigit(num, k)].push(num)
        }
        arr = [].concat.(...buckets)
        // arr = [].concat.apply([], buckets)
    }
    return arr
}
radixSort([44,32,521, 1])

/* 
RADIX SORT BIG O
Time Complexity (Best) = O(nk)
Time Complexity (Average) = O(nk)
Time Complexity (Worst) = O(nk)
Space Complexity = O(n+k)
n = length of array
k = number of digits(average)
*/