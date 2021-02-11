// SIMPLE
/*
problems:
1. only hashes string
2. not constant time - scale with size of input - linear in key length
3. could be more random
*/
function hash(key, arrayLen){
    let total = 0;
    for(let char of key){
        let value = char.charCodeAt(0)-96
        total = (total + value)%arrayLen;
    }
    return total;
}
hash('red', 10)

// REFINED by using prime number for hashing
function hash(key , arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i=0; i<Math.min(key.length, 100);i++){
        let char = key[i];
        let value = char.charCodeAt(0)-96;
        total = (total*WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}
