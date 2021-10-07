
/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
function flattenThunk(thunk) {
    // your code here
    return (callback) => {
        const cb = (error, func) => {
            if(typeof func === 'function') return func(cb);
            return callback(error, func)
        }
        thunk(cb)
    }
}