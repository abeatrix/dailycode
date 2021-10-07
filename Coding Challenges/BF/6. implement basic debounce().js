
/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
    // your code here
    let timer;
    return(...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{func(args)}, wait)
    }
}