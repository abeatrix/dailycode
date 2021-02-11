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
            console.log(v)
            if(!v) return;
            visited[v] = true;
            res.push();
            adjacencyList[v].forEach(neighbor => {
                if(!visited[neighbor]) return dfs(neighbor);
            })
        })(start)

        return res;
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
g.dfsRe("A")
