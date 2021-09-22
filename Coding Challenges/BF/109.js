function pow(base, power){
    // your code here
    if(power===0) return 1;
    if(power===1) return base;
    let ans = base, i=Math.abs(power);
    while(--i){
        ans*=base
    }
    if(power<0) return 1/ans;
    return ans;
}