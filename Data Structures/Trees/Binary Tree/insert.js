/*
- Created a new node
- Starting at the root
-- Check if there is a root, if not - the root now becomes that new node!
-- if there is a root, check if the value of the new node is greater than or less than the value of the root
-- if it is greater
--- Check to see if there is a node to the right
---- If there is , move to that node and repeat these steps
---- If there is not, add that node as the right property
-- if it is less
--- Check to see if there is a node to the left
---- If there is , move to that node and repeat these steps
---- If there is not, add that node as the left property
*/

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(val===current.val) return undefined;
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
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root = new Node(15);
tree.root.right = new Node(7);
tree.root.left.right = new Node(9);
