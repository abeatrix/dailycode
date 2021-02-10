var findNumOfValidWords = function(words, puzzles) {
    words.forEach((w,i)=> words[i] = [...new Set(w)].sort())
    puzzles.forEach((p,i)=> { puzzles[i] = [...new Set(p)] })
    let tree = new Trie();
    words.forEach(w=> tree.insert(w))
    puzzles.forEach( (p,i)=> { puzzles[i] = tree.BFS(p) })
    return puzzles
}

class Node{
    constructor(key){
        this.key = key;
        this.parent = null;
        this.children = {};
        this.end = 0;
    }

    getWord(){
        let output = [];
        let node = this;
        while(node.key){
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
            if( i == word.length-1 ) node.end++;
        }
    }

    BFS(puzzle){
        let node = this.root,
            counter = 0,
            queue = [];
        queue.push(this.root);
        while (queue.length){
            node = queue.shift();
            for(let child in node.children){
                if(puzzle.includes(child)){
                    if(node.children[child].end) {
                        if((node.children[child].getWord()).includes(puzzle[0])) counter+=node.children[child].end
                    }
                    queue.push(node.children[child])
                }

            }
        }
        return counter;
    }

}


findNumOfValidWords(["apple","pleas","please"],["aelwxyz","aelpxyz","aelpsxy","saelpxy","xaelpsy"])// 0,1,3,2,0
findNumOfValidWords(["kkaz","kaaz","aazk","aaaz","abcdefghijklmnopqrstuvwxyz","kkka","kkkz","aaaa","kkkk","zzzz"], ["kazxyuv"]) // 6

//findNumOfValidWords(["aaaa","asas","able","ability","actt","actor","access"], ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"])
