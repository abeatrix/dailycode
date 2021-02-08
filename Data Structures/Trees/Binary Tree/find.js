/*
- Finding a  node
- Starting at the root
-- Check if there is a root, if not - done
-- if there is a root, check if the value of the new node is the value we are looking for
-- if not, check if the value is greater than or less than the value of the root
-- if it is greater
--- Check to see if there is a node to the right
---- if there is, move to that node and repeat these steps
---- if there is not, we're done searching!
-- If it is less
--- Check to see if there is a node to the left
---- if there is, move to that node and repeat these steps
---- if there is not, we're done searching
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
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.find(11)
