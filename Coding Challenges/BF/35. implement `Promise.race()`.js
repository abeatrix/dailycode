
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
    // your code here
    let handled = false;
    return new Promise((res, rej) => {
        promises.forEach(promise =>
            promise.then(data => {
                if(!handled){
                    res(data)
                    handled = true
                }
            })
            .catch(err=>{
                if(!handled){
                    rej(err)
                    handled = true
                }
            })
        )
    })
}

function race(promises) {
    // your code here
    let handled = false;
    const myPromise = new Promise((res, rej) => {
        promises.forEach(promise => promise.then((data) => {
            if(!handled){
                res(data)
                handled = true
            }
        }, (error) => {
            if(!handled){
                rej(error)
                handled = true;
            }
        }))
    })
    return myPromise;
}