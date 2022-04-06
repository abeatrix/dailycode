function validateBattlefield(field) {
    // write your magic here
    const flat = field.flat();
    const sum = flat.reduce((a,v) => a + v ,0)
    if(sum!==4*1+3*2+1*4+2*3) return false
    for(let i=0; i<flat.length; i++){
        if(flat[i]){
            if(flat[i+1] + flat[i-1] + flat[i-10] +flat[i+10] > 2) {
                return false
            }
        }
    }
}
validateBattlefield(
    [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])


class Ships {
    constructor() {
        this.battleship = new Ship("battleship", 4, 1)
        this.cruisers = new Ship("cruisers", 3, 2)
        this.submarines = new Ship("battleship", 1, 4)
        this.destroyers = new Ship("battleship", 2, 3)
    }
}

class Ship {
    constructor(name, size, number){
        this.name = name;
        this.size = size;
        this.number = number;
    }
}

