/**
 * @returns { {count: number}}
 */
function createCounter(){
    return new Counter();
}

class Counter {
    constructor(){
        this.val = 0;
    }

    get count(){
        return this.val++
    }
}
const counter = createCounter()
counter.count
counter.count

// OR 
function createCounter(){
    let times = 0;
    return {
        get count(){
            return times++;
        }
    }
}

const counter = createCounter()
counter.count