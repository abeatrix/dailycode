// Undirected Graph
/*
ADD VERTEX
write a method called addVertex which acccepts a name of vertex
it should add a key to the adjancency list with the name of the vertex and set its value to be an empty array
g.addVertex("Tokyo") => { "Tokyo": [] }

ADD EDGE
- accept two vertices, v1, v2
- find in the adjacency list the key of v1 and push v2 to the array
- find in the adjacency list the key of v2 and push v1 to the array

REMOVE EDGE
- take two vertices , v1, v2
- reassign key of v1 to be an array that does not contain v2
- reassign key of v2 to be an array that does not contain v1

REMOVE VERTEX
- accept a vertex to remove
- loop as long as there are any other vertices in the adjancency list for that vertex
- call remove edge inside the loop with the vertex we are removing + any values in teh adjaceny list for that vertex
 */
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
        this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1)
        this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1), 1)
    }

    removeEdgeCS(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v=>v!==v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=>v!==v1);
    }

    removeVertex(v){
        for(let i of this.adjacencyList[v]){
            this.removeEdge(i, v)
        }
        delete this.adjacencyList[v]
    }

    removeVertexCS(v){
        while(this.adjacencyList[v].length){
            const x = this.adjacencyList[v].pop();
            this.removeEdge(x, v);
        }
        delete this.adjacencyList[v]
    }
}

let g = new Graph();
g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addVertex("Aspen")
g.addEdge("Dallas", "Tokyo")
g.addEdge("Dallas", "Aspen")
g.removeVertex("Tokyo")
g
