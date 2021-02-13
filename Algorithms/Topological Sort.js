class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(v){
        if(!this.adjacencyList[v]) this.adjacencyList[v]=[]
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v=>v!==v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=>v!==v1);
    }

    removeVertex(v){
        while(this.adjacencyList[v].length){
            const x = this.adjacencyList[v].pop();
            this.removeEdge(x, v);
        }
        delete this.adjacencyList[v]
    }
    // DFS using Recursive
    dfsRe(start){
        let res = [],
            visited = {},
            adjacencyList = this.adjacencyList;

        (function dfs(v){
            if(!v) return;
            visited[v] = true;
            res.push(v);
            adjacencyList[v].forEach(neighbor => {
                if(!visited[neighbor]) return dfs(neighbor);
            })
        })(start)

        return res;
    }

    //DFS using Iterative
    dfsIt(start){
        let stack=[start],
            res = [],
            visited = {},
            current;

        visited[start] = true;
        while(stack.length>0) {
            current = stack.pop();
            res.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return res;
    }

    bfs(start){
        let queue = [start], //FIFO
            res = [],
            visited = {},
            current;
        // mark the starting node as visited
        visited[start] = true;
        while(queue.length){
            current = queue.shift();
            res.push(current);

            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            })
        }

        return res;
    }

    topSort(v){
        // create a stack to keep track of all nodes in sorted orders
        let stack = [];
        let visited = new Set();

        // call helper for every univisited node
        this.adjacencyList[v].forEach(node => {
            if(!visited.has(node)) {
                this.topHelper(node, visited, stack);
            }
        })
        // return false if graph is not a DAG
        if(!stack) return true;
        else return false;
    }

    topHelper(node, visited, stack){
        // mark the starting node as visited
        visited.add(node)
        // check for dependents, edge is node -> n
        this.adjacencyList[node].forEach(n => {
            if(!visited.has(n)) {
                this.topHelper(n, visited, stack)
            }
        })
        // after visiting all dependencies, add node to stack
        stack.push(node);
    }

}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
g.topSort("A");
