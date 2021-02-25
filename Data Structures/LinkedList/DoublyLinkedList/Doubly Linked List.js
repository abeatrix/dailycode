class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // adding a node to the end of the doubly linked list
    push(val){
        let newNode = new Node(val);
        if(!this.length)  {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){

    }

    shift(){}

    unshift(){}
}

let list = new Node(12)
list.push(13)
