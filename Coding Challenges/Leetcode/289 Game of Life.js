var gameOfLife = function(board) {
    for(let i=0, bLen=board.length-1; i<=bLen;i++){
        for (let j=0, rLen=board[i].length-1; j<=rLen; j++){
            let nearbyLive = 0;
            // top row
            if(i-1>=0) {
                if(j-1>=0 && board[i-1][j-1]>0) nearbyLive++;
                if(board[i-1][j]>0) nearbyLive++;
                if(j+1<=rLen && board[i-1][j+1]>0) nearbyLive++;
            }
            // bottom row
            if(i+1<=bLen) {
                if(j-1>=0 && board[i+1][j-1]>0) nearbyLive++;
                if(board[i+1][j]>0) nearbyLive++;
                if(j+1<=rLen && board[i+1][j+1]>0) nearbyLive++;
            }
            // current row
            if(j-1>=0 && board[i][j-1]>0) nearbyLive++;
            if(j+1<=rLen && board[i][j+1]>0) nearbyLive++;

            if(board[i][j]===0) {
                if(nearbyLive===3) board[i][j] = -1 // currently dead but will become alive next gen
            } else {
                if (nearbyLive<2 || nearbyLive>3) board[i][j] = 2;
            }
        }
    }
    board.forEach(w => {
        w.forEach((c, i) => {
            if(c===-1) w[i] = 1;
            if(c===2) w[i] = 0;
        })
    })
    return board;

};
gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])

// use helper
var gameOfLife = function(board) {
    for(let i=0, len=board.length; i<len;i++){
        rowHelper(board[i], i, len, rowLen=board[i].length)
    }

    function rowHelper(row, rowNum, bl, rl){
        // check if current row lane is equal to first or last row
        // if first row
        if(rowNum==0) findNearby()
        // if last row
        else if(rowNum == bl-1)
        else

    }

    function findNearby(){

    }
};

// use predefined board positions
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
