class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    find(val){
        if(this.root===null) return false;
        var current = this.root,
            found = false;
        while(current && !found) {
            if(val < current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            } else {
                return true
            }
        }
        return false
    }

    insert(val){
        let newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode
                        return this;
                    } else {
                        current = current.left
                    }
                } else if (val > current.val){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    BFS() {
        let node = this.root,
            data = [],
            queue = [];
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder(){
        let data = [];
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder(){
        let data = [], current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(current);
        return data;
    }

}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.BFS()
