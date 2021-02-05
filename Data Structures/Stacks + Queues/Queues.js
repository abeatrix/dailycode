// Queues  - FIFO first in first out data stucture
// the first element entered first will be removed first from the stack
// usage: background task, uploading resources, printing / task processing


// Build queue with array - push() then shift() OR unshift() then pop();


class Node {
    constructor(val){
        this.val;
        this.next;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;
        let firstNode = this.first;
        if(this.first===this.last) this.last = null;
        this.first = this.first.next;
        this.size--
        return firstNode.val;
    }
}
