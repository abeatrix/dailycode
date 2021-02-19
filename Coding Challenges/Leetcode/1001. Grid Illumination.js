class LightMap{
    constructor(){
        this.bulbs = new Map();
        this.rows = {};
        this.cols = {}
        this.up = {}
        this.down = {}
    }

    lightUp(lights){
        for(let l of lights){
            let r = l[0], c = l[1];
            if(!this.bulbs.has(l.toString())){
                this.bulbs.set(l.toString())
                this.rows[r] = this.rows[r]+1 || 1;
                this.cols[c] = this.cols[c]+1 || 1;
                this.up[r+c] = this.up[r+c]+1 || 1;
                this.down[r-c] = this.down[r-c]+1 || 1;
            }
        }
    }

    checkLight(lights){
        let ans = []
        for(let l of lights){
            let r =l[0], c=l[1];
            if(this.rows[r]>0 || this.cols[c]>0 || this.up[r+c]>0 |this.down[r-c]>0) {
                this.findSource(l[0], l[1])
                ans.push(1)
            } else ans.push(0)
        }
        return ans
    }

    findSource(x, y){
        let nearBy = [[x-1,y+1], [x-1,y], [x-1,y-1], [x,y+1], [x,y], [x,y-1], [x+1, y+1], [x+1,y], [x+1,y-1]];
        for(let n of nearBy){
            if(this.bulbs.has( n.toString() )){
                this.bulbs.delete( n.toString() )
                this.lightOut(n[0], n[1])
            }
        }
    }

    lightOut(r, c){
        this.rows[r] = this.rows[r]-1;
        this.cols[c] = this.cols[c]-1;
        this.up[r+c] = this.up[r+c]-1;
        this.down[r-c] = this.down[r-c]-1;
    }
}
var gridIllumination = function(N, lamps, queries) {
    let map = new LightMap();
    map.lightUp(lamps)
    return map.checkLight(queries)
};

gridIllumination(6,[[2,5],[4,2],[0,3],[0,5],[1,4],[4,2],[3,3],[1,0]], [[4,3],[3,1],[5,3],[0,5],[4,4],[3,3]])
gridIllumination(5, [[0,0],[0,1],[0,4]],[[0,0],[0,1],[0,2]]) // 1,1,0
gridIllumination(5, [[0,0],[1,0]],[[1,1],[1,1]])
gridIllumination(5, [[0,0],[4,4]],[[1,1],[1,0]])

// better solutions
var gridIllumination = function(N, lamps, queries) {
    let row = new Map()
    let col = new Map()
    let up = new Map()
    let down = new Map()
    let map = new Map()
    let nearby = [[0,0],[0,1],[1,0],[1,1],[-1,-1],[0,-1],[-1,0],[-1,1],[1,-1]]
    for (let [r,c] of lamps){
        increase(row, r)
        increase(col, c)
        increase(up, r+c)
        increase(down, r-c)
        map.set(N*r+c, true)
    }
    let count = 0
    let result = new Array(queries.length).fill(0)
    for (let [r,c] of queries){
        if (row.get(r) > 0 || col.get(c) > 0 || up.get(r+c) > 0 || down.get(r-c) > 0){
            result[count] = 1
        }
        for (let [i,j] of nearby){
            let newr = r+i
            let newc = c+j
            if (map.get(N*newr+newc)){
                decrease(row, newr)
                decrease(col, newc)
                decrease(up, newr+newc)
                decrease(down, newr*newc)
                map.delete(N*newr+newc)
            }
        }
    count++
    }
    return result
};

function increase(map, key){
    if (map.get(key)){
        map.set(key, map.get(key)+1)
    } else {
        map.set(key, 1)
    }
}
function decrease(map, key){
        map.set(key, map.get(key)-1)
}
gridIllumination(5, [[0,0],[0,1],[0,4]],[[0,0],[0,1],[0,2]])
