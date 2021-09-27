
/**
 * @param {any} proto
 * @return {object}
 */

class Constructor {
    constructor(proto){
        this.__proto__ = proto;
    }
}
function myObjectCreate(proto) {
    // your code here
    let obj = new Constructor(proto.prototype || proto);
    return obj;
}

// Alternatives
function myObjectCreate(proto) {
    // your code here
    function Constructor(){}
    Constructor.prototype = proto.prototype || proto
    return new Constructor();
}

function myObjectCreate(proto) {
// your code here
if (typeof proto !== 'object' || !proto) throw "error";
let con = { __proto__: proto};
return con
}