function solve(matrix) {
    let ans = matrix[0];
        let len = matrix.length-1, i=1
        while(i<len){
            ans.push(matrix[i][i])
            i++
        }
        matrix[len].forEach(n=>ans.push(n))

        return ans.reduce((a,b)=>a+b)
    }
solve([
    [1, 0, 1, 1, 0, 0],
    [1, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 1],
    [0, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 1, 1]
])
