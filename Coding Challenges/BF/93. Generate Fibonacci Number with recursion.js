// please modify code below to make it work for large number like `fib(1000)`
// recursion should still be used

function fib(n, memo = []){
    if (n === 0) return 0
    if (n === 1) return 1
    if(!memo[n]) memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

// TIMEOUT VERSION
const fib = (n) => {
    if (n === 0) return 0
    if (n === 1) return 1
    return fib(n - 1) + fib(n - 2)
  }
  
  fib(10) // 55
  fib(1000) // timeout