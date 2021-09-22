function romanToInteger(str){
    let num = [1000,500,100,50,10,5,1];
    let roman = ['M','D','C','L','X','V','I'];
    let sum = 0;
    let lastCheck = 0;
    for(let c of str){
        let i = roman.indexOf(c);
        if(num[i]>lastCheck) sum+= num[i]-lastCheck-lastCheck
        else sum+= num[i]
        lastCheck = num[i]
    }
    return sum;
}

romanToInteger('CXXIII') // 123
romanToInteger('MCMXCIX') // 1999
romanToInteger('MMMCDXX') // 3420

// 4 = 1+5 = -1+5
// 9 = 1+10 =-1+10