/*
SET
1. Acceots a key and a value
2. Hashes the key
3. Stores the key-value pair in the hash table array via seperate chaining
GET
1. Accepts a key
2. Hashes the key
3. Retreive value
4. if no key is found, return undefined
KEYS - Loop through the hash table array and returns an array of keys in table
1.
VALUES - Loops through the hash table array and returns an array of values in the table
*/
class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i=0; i<Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0)-96;
            total = (total*WEIRD_PRIME+value)%this.keyMap.length;
        }
        return total;
    }

    set(k, v){
        let i = this._hash(k);
        if(!this.keyMap[i]) this.keyMap[i] = [];
        this.keyMap[i].push([k,v]);
    }

    get(key){
        let i = this._hash(key);
        if(this.keyMap[i]) {
            for(let [k, v] of this.keyMap[i]){
                if(k === key) return v
            }
        }
        return undefined;
    }

    keys(){
        let list = [];
        for(let i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]) {
                for(let j=0;j<this.keyMap[i].length;j++){
                    if(!list.includes(this.keyMap[i][j][0])) {
                        list.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return list;
    }

    values(){
        let list = [];
        for(let i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]) {
                for(let j=0;j<this.keyMap[i].length;j++){
                    if(!list.includes(this.keyMap[i][j][1])) {
                        list.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return list;
    }
}

let ht = new HashTable(17);
ht.set("maroon","123")
ht.set("yellow","234");
ht.set("olive","are ok");
ht.set("salmon","are fine")
ht.set("lightcoral","pizza")
ht.set("mediumvioletred","pizza")
ht.set("pulm","456")
ht.get("maroon")
ht.values()
