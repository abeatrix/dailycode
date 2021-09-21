function validate(str) {
    // your code here
    let stack = [];
    let p = {"{":"}","(":")","[":"]"};
    for(let c of str){
        if(p[c]) stack.push(c);
        else if(stack.length){
            if(p[stack.pop()]!=c)return false;
        }else return false;
    }
    return stack.length === 0;
}

validate('{}[]()') 
// true

validate('{[()]}') 
// true

validate('{[}]') 
// false, they are not in the right order

validate('{}}') 
// false, last `}` is not paired with `{`