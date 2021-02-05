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
    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
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
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this;
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
    set(index, val){
        const foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    shift(val){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.head === this.tail) this.tail = null;
        return currentHead;
    }
    insert(val){
        if(index<0 || index > this.length) return false;
        if(index === this.length) return this.push(val);
        if(index===0) return this.unshift(val);
        const newNode = new Node(val);
        let prev = this.get(index-1);
        let indexNode = prev.next;
        prev.next = newNode;
        newNode.next = indexNode;
        this.length++;
        return true;
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
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;
        for(let i=0;i<this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
