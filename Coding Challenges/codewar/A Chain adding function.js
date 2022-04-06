function add(n){
    const fn = function(x) { return add(n+x); };
    fn.valueOf = function() { return n; };
    return fn;
  }