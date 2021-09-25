function pipe(funcs) {
    // your code here
  return (val) =>{
        return funcs.reduce((acc, func)=>{
      return func(acc);
        },val)
    }
}

// loop over the array then return then return it


// const pipe = (fns) => (x) => fns.reduce((y, fn) => fn(y), x)