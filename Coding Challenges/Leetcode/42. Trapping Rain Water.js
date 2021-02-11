var trap = function(height) {
    height.forEach((h,i) => height[i] = [h, h, h])
    for(let i=height.length-2;i>=0;i--){
        if( height[i][1] < height[i+1][1] ) {
          height[i][1] = height[i+1][1]
        }
    }
    for(let i=1;i<height.length;i++){
        if( height[i][2] < height[i-1][2] ) {
          height[i][2] = height[i-1][2]
        }
    }
    height.forEach((h,i) => {
      let diff = Math.min(height[i][1],height[i][2])
      height[i] = Math.max(0, diff-height[i][0])
    })
    if(height.length) return height.reduce((a,b)=>a+b)
    return height
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])
trap([])
