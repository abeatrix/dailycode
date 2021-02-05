// Stack is a Last in frist out (LIFO) data structure
// the last element added to the stack will be the first element removed from the stack
/*
Stacks are a LIFO data Structure where the last value is always first one out
Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing ( remember pages you have visited and go back/forward) and many more
they are not a built in data structure in javascript, but are relatively simple to implement
Insertion and removal can be done in O(1)
*/


// array implmenetation - use pop() & push() or unshift() & shift
const stack = []
stack.push('a')
stack.push('b')
stack.push('c')
stack.pop()


// LINKED LIST Implementation
/*
FOR PUSH (aka unshift in linked list)
1. the function should accept a value
2. create a new node with that value
3. if there are no nodes in the stack ,set the first and last property to be the newly created ndoe
4. if there is at least one node, create a variable that stores the current first property on the stack
5. reset the first property to be the newly created node
6. set the next property on the node to be the previously created variable
7. increment the size of the stack by 1

FOR POP (aka shift in linked list)
1. if there are no nodes in the stack, return null
2. create a temporary variable to store the first property on the stack
3. if there is only 1 node, set the first and last property to be null
4. if there is more than one node, set the first property to be the next property on the current first
5. decrement the size by 1
6. return the value of the node removed
*/
class Node {
    constructor(val){
        this.val;
        this.next;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
            return ++this.size;
        }
    }
    pop(){
        if (!this.first) return null;
        const temp = this.first;
        if(this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}
