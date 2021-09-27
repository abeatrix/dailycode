/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
	// your code here
	return function(x){
		return funcs.reduce((acc, func) => func(acc), x);
	}
}

function pipe(funcs) {
    // your code here
  return (val) =>{
        return funcs.reduce((acc, func)=>{
      return func(acc);
        },val)
    }
}

// loop over the array then return then return it

// y = pre value, x = new value
// const pipe = (funcs) => (x) => funcs.reduce((y, func) => func(y), x)