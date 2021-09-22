/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const n = [1000, 500, 100, 50, 10, 5, 1]
    const l = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
    
    let ans = "", i = 0;
    
    while(i<n.length){
        let d = Math.floor(num/n[i]);
        num = num%n[i]
        if (d==4) {
            ans += l[i]+l[i-1]
        } else if (d==9) {
            ans += l[i]+l[i-2]
        } else {
            if (d>4) ans += l[i-1]+l[i].repeat(d-5)
            else ans += l[i].repeat(d)
        }
        i+=2
    }
    return ans
};

var intToRoman = function (num) {
    const letters = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let ans = '';
    Object.entries(letters).forEach(([r, n]) => {
        ans += r.repeat(Math.floor(num / n));
        num %= n;
    });
    return ans;
}
