var gameOfLife = function(board) {
    let rowLen = board.length-1; // check how many rows are there
    let colLen = board[0].length-1; // check how many cols are there
    let nearby = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    let dead = [], live = [];
    for(let i=0; i<rowLen; i++){
        for(let j=0; j<colLen; j++){
            let cell = 0;
            for(let [x, y] of nearby){
                let r = i+x, c = j+y;
                if((r>=0 && r<rowLen) && (c>=0 && c<colLen) && (board[r][c]==1)) cell+=1;
            }
            if(board[i][j]) {
                if (cell < 2 || cell >3) dead.push([i, j])
            } else if (cell == 3) live.push([i, j])
        }
    }
    dead.forEach(d=>board[d[0]][d[1]] = 0)
    live.forEach(l=>board[l[0]][l[1]] = 1)
};

gameOfLife([[1,1],[1,0]])


gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])
