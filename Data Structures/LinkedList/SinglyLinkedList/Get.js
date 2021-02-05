// Get - Retrieving a node by it's position in the Linked List
/*
1. This function should accept an index
2. If the index is less than zero or greater than or equal to the length of the list, return null
3. Loop through the list until you reach the index and return the node at that specific index
TIPS: use counter
*/

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
        let currentNode = this.head;
        while (index>0){
            currentNode = currentNode.next
            index--;
        }
        return currentNode;
    }

    // instructor's
    // get(index){
    //     if(index<0 || index >= this.length) return null;
    //      let counter=0;
    //     let current = this.head;
    //     while (counter!=index){
    //         current = current.next
    //         counter++;
    //     }
    //     return current;
    // }

}

const list = new SinglyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.get('1');
