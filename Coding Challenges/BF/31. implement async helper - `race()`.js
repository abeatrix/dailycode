/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */

function race(funcs){
    // your code here
    return function(cb){
        let processed = false;
        funcs.forEach((f) => {
            f((e, d) => {
                if(!processed) {
                    processed = true;
                    cb(e,d)
                }
            })
        })
    }
}

function race(funcs){
    // your code here
    return function(cb){
        let processed = false;
        funcs.forEach((f) => {
            f((e, d) => {
                if(!processed) {
                    processed = true;
                    cb(e,d)
                }
            })
        })
    }
}

// Function returning a function:
function counter() {
    var count = 0;
    return function(x) {
        console.log(count++);
        if(count==1) count=x
    }
}
  
counter()(5);
