
class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let i = this.values.length-1;
        const element = this.values[i];
        while(i>0){
            let parenti = Math.floor((i-1)/2);
            let parent = this.values[parenti];
            if(element.priority >= parent.priority) break;
            this.values[parenti] = element;
            this.values[i] = parent;
            i = parenti;
        }
    }

    dequeue(){
        let min = this.values[0],
            end = this.values.pop();
        if(this.values.length>0){
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown(){
        let i = 0,
            n = this.values.length, // length
            e = this.values[0]; // element
        while(true) {
            let leftChildIdx = 2*i+1,
                rightChildIdx = 2*i+2,
                leftChild, rightChild,
                swap = null;
            if(leftChildIdx < n){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority > e.priority) {
                    swap = leftChildIdx
                };
            }
            if(rightChildIdx < n){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < e.priority) || (swap!=null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[i] = this.values[swap];
            this.values[swap] = e;
            i = swap;
        }
    }
}


let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
ER.dequeue();
ER;
