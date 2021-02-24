//Dijkstra with Binary Heap Priority Queue

class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }

    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = []

        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } if(smallest || distances[smallest]!==Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate<distances[nextNode.node]){
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

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

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
graph.Dijkstra("A", "E");



