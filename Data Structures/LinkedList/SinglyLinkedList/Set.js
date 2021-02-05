// SET - Changing the value of a node based on it's position in the Linked List

/* this function should accept a value and an index
use your get function to find the specific node
if the node is not found, return false
if the node is found, set the value of that node to be the value passed to the function and return true */

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index<0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter!=index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){
        const foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // without get
    // set(index, val){
    //     if(!index<0 || index >= this.length) return false;
    //     let current = this.head;
    //     while(counter!=index){
    //         current = current.next;
    //         counter++
    //     }
    //     current.vale = val;
    //     return true;
    // }
}
