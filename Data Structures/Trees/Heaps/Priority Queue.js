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
            if(element.priority <= parent.priority) break;
            this.values[parenti] = element;
            this.values[i] = parent;
            i = parenti;
        }
    }

    dequeue(){
        let max = this.values[0],
            end = this.values.pop();
        if(this.values.length>0){
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown(){
        let i = 0,
            n = this.values.length,
            e = this.values[0];
        while(true) {
            let li = 2*i+1,
                ri = 2*i+1,
                l, r,
                swap = null;
            if(li < n){
                l = this.values[li];
                if(l.priority > e.priority) {
                    swap = li
                };
            }
            if(ri < n){
                r = this.values[ri];
                if((swap === null && r.priority > e.priority) || (swap!=null && r.priority > l.priority)) {
                    swap = ri;
                }
            }
            if(swap === null) break;
            this.values[i] = this.values[swap];
            this.values[swap] = e;
            i = swapl;
        }
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gunshot wound", 5);
ER.enqueue("high fever", 2);
ER.dequeue();
