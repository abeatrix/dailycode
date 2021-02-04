// Insert - adding a node to the linked list at a specific position
/*
1. if the index is less than zero of greater than the length, return false
2. if the index is the same as the length, push a new node to the end of the list
3. if the index is 0, unshift a new node to the start of the list
4. Otherwise, using the get method, access the node at the index -1
5. set the next property on that node to be the new node
6. set the next property on the new node to be the previous next
7. increment the length
8. return true
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
    push(val){
        var newNode = new Node (val);
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
    // my solution
    // insert(index, val){
    //     let newNode = new Node(val)
    //     if(index<0 || index > this.length) return false
    //     else if (index===0){
    //         this.head.next = this.head;
    //         this.head = newNode;
    //     } else {
    //         const foundNode = this.get(index-1);
    //         let oldNode = foundNode.next
    //         foundNode.next = newNode
    //         newNode.next = oldNode
    //     }
    //     this.length++;
    //     return true
    // }
}


const list = new SinglyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.insert(1, 'b')
list.get(1)
