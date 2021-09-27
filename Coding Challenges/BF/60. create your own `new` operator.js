/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
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

// alt
function myNew(constructor, ...args) {
    // your code here
    let con = Object.create(constructor.prototype || constructor.prototype, args);
    let obj = constructor.apply(con, args);
    if(typeof obj ==='object') return obj;
    else return con;
}

const myNew = (constructor, ...args) => {
    // 1. A new object is created, inheriting from constructor's prototype.
    var that = Object.create(constructor.prototype);
  
    // 2. The constructor function is called with the specified arguments,
    //    and with this bound to the newly created object.
    var obj =  constructor.apply(that, args);
    
    // 3. The object (not null, false, 3.1415 or other primitive types) returned by the constructor function becomes the result of the whole new expression.
    //    If the constructor function doesn't explicitly return an object, 
    //    the object created in step 1 is used instead (normally constructors don't return a value, but they can choose to do so if they want to override the normal object creation process).
    if(obj && typeof obj === 'object')
    {
      return obj;
    }
    else
    {
      return that;
    }
  }