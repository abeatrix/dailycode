
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */


function curry(fn) {
    // your code here
    return function curried(...args){
        //if the args length matches the requirement
        if(args.length>=fn.length) return fn(...args)
        // else bind the args to wait until it matches
        else return function(...newArgs){
            return curried(...args, ...newArgs);
        }
    }
}

// Alt
function curry(fn) {
    // your code here
    return function curried(...args){
        //if the args length matches the requirement
        if(args.length>=fn.length) return fn.apply(this, args)
        // else bind the args to wait until it matches
        else return curried.bind(this, ...args)
    }
}