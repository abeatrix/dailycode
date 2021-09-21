function range(from, to) {
    let res = [];
    // your code here
    while(from<=to){
        res.push(from++)
    }
    return res;
}

// using a generator function
function * range(from, to) {
    // your code here
    while(from<=to){
        yield from++
    }
}