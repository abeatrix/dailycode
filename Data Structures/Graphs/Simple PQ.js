class PriorityQueue {
    constructor() {
        this.values = [];
    };

    enqueue(val, priority) { //priority = distance
        this.values.push({val, priority});
        this.sort();
    };

    dequeue(){
        return this.values.shift();
    };

    sort() { //O(N*log(N))
        this.values.sort((a,b) => a,priority - b.priority);
    };
}

let q = new PriorityQueue();
q.enqueue("B", 3);
q.enqueue("C", 5);
q.enqueue("D", 5);
q.enqueue("Q", 5);
q.values;
