// Reverse - reversing the linked list in place
/*
1. Swap the head and tail
2. Create a variable called next
3. Create a variable called prev
4. Create a variable called node and initialize it to the head property
5. Loop through the list
6. Set next to be the next property on whatever node is
7. Set the next property on the node to be whatever prev is
8. Set prev to be the value of the node variable
9. Set the node variable to be the value of the next variable
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
    print(){
        const arr = [];
        const current = this.head;
        while(current){
            arr.push(current.val)
            current=current.next;
        }
        console.log(arr);
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

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.reverse();
