/**

 * There is a special keyboard with all keys in a single row.

Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.



Example 1:

Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
Output: 4
Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
Total time = 2 + 1 + 1 = 4.

 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    let steps = []
    for(let l of word){
        steps.push(keyboard.indexOf(l))
    }
    word=steps[0]
    for(let i=1; i<steps.length; i++){
        word+=Math.abs(steps[i-1]-steps[i])
    }
    return word
};


// op
var calculateTime = function(keyboard, word) {
    let time = 0;
    let start = 0;
    for (let letter of word) {
        time+=(Math.abs(start - keyboard.indexOf(letter)));
        start = keyboard.indexOf(letter);
    }
    return time;
};
