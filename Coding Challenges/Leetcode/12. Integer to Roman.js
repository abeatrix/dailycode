var intToRoman = function(num) {
    let roman = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    };
    let a = "", b = 1;
    
    while(num>0){
        let d = Math.floor(num%10);
        if(d==4 || d==9) a=roman[b]+roman[d*b+b]+a
        else if(d==1 || d>=5) a=roman[d*b]+a
        else if(d<5) a=roman[b]*d+a
        else a=roman[5*b]+roman[1*b]*(d-5)+a
        d = d/10
        b *= 10
    }
    
    return a
};

intToRoman(1994)