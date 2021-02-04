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
        if(index<0 || index > this.length) return false
        if(index === this.length) return this.push(val);
        if(index===0) return this.unshift(val)
        const newNode = new Node(val);
        let prev = this.get(index-1);
        let indexNode = prev.next;
        prev.next = newNode;
        newNode.next = indexNode;
        this.length++
        return true
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
