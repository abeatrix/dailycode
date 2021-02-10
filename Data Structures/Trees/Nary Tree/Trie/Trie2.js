
class Trie{
    constructor() {
        this.children = new Map();
    }

    insert(word){
        let current = this;
        for(let i=0; i<word.length; i++){
            let char = word[i];
            if(!current.children[char]){
                current.children[char] = new Trie();
            }
            current = current.children[char];
        }
        current.isWord = true;
        return current;
    }

    search(word){
        let current = this;
        for(let i=0; i<word.length;i++){
            let char = word[i];
            if(!current.children[char]){
                return false;
            }
            current = current.children[char];
        }
        return current.isWord === true;
    }

    startWith(prefix){
        let current = this;
        for(var i=0; i<prefix.length; i++){
            let char = prefix[i];
            if(!current.children[char]){
                return false;
            }
            current = current.children[char];
        }
        return true;
    }

    hasCharFrom(prefix){
        let current = this;
        for(var i=0; i<prefix.length; i++){
            let char = prefix[i];
            if(!current.children[char]){
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

let trie = new Trie();
trie.insert("hello");
trie.search("hello");
