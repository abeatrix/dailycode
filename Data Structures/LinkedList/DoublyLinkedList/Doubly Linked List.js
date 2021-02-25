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
        if(!this.head) return undefined
        let removed = this.tail;
        if(this.length===1) this.head=null, this.tail=null;
        else {
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length--
        return removed;
    }

    shift(){
        if(!this.length) return undefined;
        let removed = this.head;
        if(this.length===1) this.head=null, this.tail=null;
        this.head = removed.next;
        this.head = prev = null;
        removed.next = null;
        this.length--;
        return removed;
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index<0 || index>=this.length) return null;
        let count, current;
        if(index<=this.length/2){
            count = 0, current = this.head;
            while(count!=index){
                current = current.next;
                count++;
            }
            return current;
        } else {
            count = this.length-1, current = this.tail;
            while(count!=index){
                current = current.prev;
                count--
            }
            return current;
        }
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode!=null){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(){
        if(index<0||index>this.length) return false;
        if(index===0) return !!this.unshift(val);
        if(index===this.length) return !!this.push(val);
        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // removedNode.prev.next = removedNode.next
        // removedNode.next.prev = removedNode.prev
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

}

let list = new DoublyLinkedList();
list.push("A")
list.push("B")
list.push("C")
