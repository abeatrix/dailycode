// Insert - adding a node to the linked list at a specific position
/* if the index is less than zero of greater than the length, return false
if the index is the same as the length, push a new node to the end of the list
if the index is 0, unshift a new node to the start of the list
Otherwise, using the get method, access the node at the index -1
*/

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
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
        let current = this.head
        while(index>0){
            current = current.next;
            index--
        }
        return current;
    }
}


const list = new SinglyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.get('1');
