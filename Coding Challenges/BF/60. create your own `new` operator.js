/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
function myNew(constructor, ...args) {
    let con = Object.create(constructor.prototype);
    return constructor.apply(con, args) || con;
}
// alt 0
const myNew = (constructor, ...args) => {
    // your code here
    let con = {__proto__: constructor.prototype}
    let obj = constructor.apply(con, args);
    return obj || con;
}
// alt 1
function myNew(constructor, ...args) {
    // your code here
    let con = Object.create(constructor.prototype);
    let obj = constructor.apply(con, args);
    if(typeof obj ==='object') return obj;
    else return con;
}

// alt 2 using new
class Constructor {
    constructor(prototype){
        this.__proto__ = prototype;
    }
}
function myNew(constructor, ...args) {
    // your code here
    // create new object with inheriting from constructor's prototype
    let con = new Constructor(constructor.prototype);
    // bound the args with the new object
    let obj = constructor.apply(con, args);
    if(typeof obj ==='object') return obj;
    else return con;
}
// alt 3
function myNew(constructor, ...args) {
    // your code here
    function construct() {
        let con = Object.create(constructor.prototype);
        this.apply(con, args)
        return con;
    }
    return construct();
}