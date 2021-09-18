function compare(v1, v2) {
  if (v1 == v2) return 0
  const a = v1.split('.'), b = v2.split('.');
  for(let i=0; i<3; i++){
    let a1=parseInt(a[i]), b1=parseInt(b[i]);
    if(a1>b1) return 1
    else if(a1<b1) return -1
  }
}
