class Solution {
    solve(a, b) {
        a = a.concat(b)
        return a.sort((a, b)=> a-b)
    }
}

class Solution {
    solve(a, b) {
        b.forEach(num=>a.push(num));
        b = [];
        if(!b.length) b.push(a.pop())
        while(a.length){
            let num = a.pop(), i=0;
            while(num>=b[i]){
                i++
            }
            b.splice(i, 0, num)
        }
    }
}

// insertionSort - run time
class Solution {
    solve(a, b) {
        b.forEach(num=>a.push(num));
        for(let i=0; i<a.length; i++){
            let x = a[i];
            let j = i-1;
            while(j>=0 && a[j]>x){
                a[j+1] = a[j];
                j=j-1
            }
            a[j+1]=x;
        }
        return a;
    }
}
