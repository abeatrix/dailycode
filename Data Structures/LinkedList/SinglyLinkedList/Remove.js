// remove - removing a node from the linked list at a specific position
/*
1. if the index is less than zero or greater than the length, return undefined
2. if the index is the same as the length-1, pop
3. if the shift is 0, shift
4. otherwise use the get method, access the node at the index-1
5. set the next property on that node to be the next of the next node
6. decrement the length
7. return the value of the node removed
*/

class Node{
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
        var newNode = new Node (val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
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
    shift(val){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.head === this.tail) this.tail = null;
        return currentHead;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    remove(index){
        if(index<0||index > this.length) return undefined;
        if(index===this.length-1) return this.pop();
        if(index===0) return this.shift();
        let prevNode = this.get(index-1);
        let nodeToRemove = prevNode.next;
        prevNode.next = nodeToRemove.next;
        this.length--;
        return nodeToRemove;
    }

}

var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.remove(2) // 3
