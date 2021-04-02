// Medium

var rotate = function(matrix) {
  for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix.length; j++){
      matrix[j].splice(matrix[j].length-i,0, matrix[i][j])
    }
    matrix[i].splice(0, matrix.length)
  }
};

// Runtime: 76 ms
// Memory Usage: 38.8 MB
