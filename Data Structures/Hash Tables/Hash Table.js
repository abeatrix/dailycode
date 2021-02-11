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

    set(key, val){
        let i = this._hash(key);
        if(!this.keyMap[i]) this.keyMap[i] = [];
        this.keyMap[i].push(val);
    }

    get(key){
        let i = this._hash(key);
        if(!this.keyMap[i]) return undefined;
        return this.keyMap[i]
    }
}

let ht = new HashTable();
ht.set("hello world","goodbye")
ht.set("dogs","are cool");
ht.set("dogs","are ok");
ht.set("cats","are fine")
ht.set("I love","pizza")
ht.get("dogs")
