class Node{
    constructor(key){
        this.key = key; // character in sequence
        this.parent = null;
        this.children = {}; // hash of children
        this.end = false;
    }

    getWord(){
        let output = [];
        let node = this;

        while(node!=null){
            output.unshift(node.key);
            node = node.parent;
        }

        return output.join('');
    }
}

class Trie{
    constructor() {
        this.root = new Node(null);
    }

    insert(word){
        let node = this.root;
        for(let i=0; i<word.length; i++){
            if(!node.children[word[i]]){
                node.children[word[i]] = new Node(word[i]);
                node.children[word[i]].parent = node;
            }
            node = node.children[word[i]];
            if( i == word.length-1 ) node.end = true;
        }
    }

    contains(word){
        let node = this.root;
        for(let i=0; i<word.length; i++){
            if(node.children[word[i]]) node = node.children[word[i]];
            else return false;
        }
        return node.end;
    }
    // returns every word with given prefix
    // time complexity: O(p + n), p = prefix length, n = number of child paths
    find(prefix){
        let node = this.root;
        let output = [];

        for(let i=0; i<prefix.length; i++){
            if(node.children[prefix[i]]) node = node.children[prefix[i]];
            else return output;
        }
        // find all the words in the node recursively
            //recursive function to find all the words in the given node

        let findAllWords = function (node, arr){
            //base case
            if(node.end) arr.unshift(node.getWord());

            // loop through each children, call recursive function
            for(let child in node.children) {
                findAllWords(node.children[child], arr);
            }
        }

        findAllWords(node, output);
        return output;
    }
}

let trie = new Trie();
trie.insert("hello")
trie.insert("bye")
trie.contains("bye")
trie.find("hell")
