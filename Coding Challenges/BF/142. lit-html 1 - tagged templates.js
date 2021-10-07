//142. lit-html 1 - tagged templates

function html(str, ...data) {
    // your code here
    let res = '';
    for(let s of str) {
        res += s;
        if(data.length) res+= data.shift();
    }
    return res;
}

  // render the result from html() into the container
function render(result, container) {
    // your code here
    container.innerHTML = result;
}