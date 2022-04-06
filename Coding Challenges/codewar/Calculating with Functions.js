const curry = (f, n) => f ? f(n) : n;
const zero = f => curry(f, 0);
const one = f => curry(f, 1);
const two = f => curry(f, 2);
const three = f => curry(f, 3);
const four = f => curry(f, 4);
const five = f => curry(f, 5);
const six = f => curry(f, 6);
const seven = f => curry(f, 7);
const eight = f => curry(f, 8);
const nine = f => curry(f, 9);
const plus = a => b => Math.floor(a + b);
const minus = a => b => Math.floor(b - a);
const times = a => b => Math.floor(a * b);
const dividedBy = a => b => Math.floor(b / a);

// Non arrow functions
function curry(args, num) return args.length ? args[0](num) : num
function zero() return curry(arguments, 0)
function one() return curry(arguments, 1)
function two() return curry(arguments, 2)
function three() return curry(arguments, 3)
function four() return curry(arguments, 4)
function five() return curry(arguments, 5)
function six() return curry(arguments, 6)
function seven() return curry(arguments, 7)
function eight() return curry(arguments, 8)
function nine() return curry(arguments, 9)
function plus(num2) return function (num1) return Math.floor(num1 + num2)
function minus(num2) return function (num1) return Math.floor(num1 - num2)
function times(num2) return function (num1) return Math.floor(num1 * num2)
function dividedBy(num2) return function (num1) return Math.floor(num1 / num2)