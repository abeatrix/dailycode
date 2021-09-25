/**
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
    // your code here
    let map = new Map();
    for(let c of str) {
        if(!map.has(c)) map.set(c,0)
        else return c;
    }
    return null
}

firstDuplicate('abca')
// 'a'

firstDuplicate('abcdefe')
// 'e'

firstDuplicate('abcdef')
// null