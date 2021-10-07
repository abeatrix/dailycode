// 163. integer to roman numerals
function integerToRoman(n) {
    // your code here
    let vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let roms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let ans = '';
    for(let i in vals) {
        ans += roms[i].repeat(n/vals[i]);
        n = n%vals[i];
    }
    return ans
}
  
function integerToRoman(num) {
    const n = [1000, 500, 100, 50, 10, 5, 1]
    const l = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
    let ans = '';
    for(let i=0; i<n.length;i+=2){
        let d = Math.floor(num/n[i])
        num = num%n[i];
        if(d==4) {
            ans+=l[i]+l[i-1]
        } else if (d==9){
            ans+=l[i]+l[i-2]
        } else {
            if(d>4) ans+=l[i-1]+l[i].repeat(d-5);
            else ans+=l[i].repeat(d);
        }
    }
    return ans;
}

function integerToRoman(num) {
    let map = {1000: 'M',500: 'D',100:'C',50:'L',10:'X',5:'V',1:'I'}
    let ans = '';
    let arr = Object.keys(map).reverse()
    for(let i=0; i<arr.length;i+=2){
        let n =arr[i];
        let d = Math.floor(num/n)
        num = num%n;
        if(d==4) {
            ans+=map[n]+map[n*5]
        } else if (d==9){
            ans+=map[n]+map[n*10]
        } else {
            if(d>4) ans+=map[n*5]+map[n].repeat(d-5);
            else ans+=map[n].repeat(d);
        }
    }
    return ans;
}

function integerToRoman(num) {
    let map = {1000: 'M',500: 'D',100:'C',50:'L',10:'X',5:'V',1:'I'};
    let ans = '';
    let digit = 1000;
    while(digit>=1){
        let cur = Math.floor(num/digit);
        if(cur==9) ans+= map[digit]+map[digit*10]
        else if(cur==4) ans+= map[digit]+map[digit*5]
        else if(cur>=5) ans+= map[digit*5]+map[digit].repeat(cur-5)
        else ans+= map[digit].repeat(cur)
        num = num%digit;
        digit = digit/10;
    }
    return ans;
}

integerToRoman(3420)


integerToRoman(123)
// 'CXXIII'

integerToRoman(1999)
// 'MCMXCIX'

integerToRoman(3420)
// 'MMMCDXX'