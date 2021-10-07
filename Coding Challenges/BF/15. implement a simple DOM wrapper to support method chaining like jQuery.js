// 15. implement a simple DOM wrapper to support method chaining like jQuery

function $(el){
    return new El(el);
}

class El {
    constructor(el){
        this.el = el;
    }

    css(propertyName, value){
        this.el.style[propertyName] = value;
        return this;
    }
}

// OR

function $(el){
    return {
        css(propertyName, value){
            el.style[propertyName] = value;
            return el;
        }
    }
}