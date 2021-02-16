# Study Note

## Big-O Complexity Chart
<img src="./assets/bigOchart.png"

## Dynamic Programming
- a method for solving a complex problem by breaking it down into a collection of simpler subproblems
- solving each of those subproblems just once, and storing their solutions
- only work on problems with
    - optimal substructure
        - if an optimal solution can be constructed from opimal solutions of its subproblems
    - overlapping subproblems
        - if it can be broken down into subproblems which are reused serveral times.
            - fibonacci swquence (every number after the first two is the sum of the two preceding ones)

## Dijkstra's Algorithm (Graph)
- native priority queue
- binary heap priority queue
- one of the most famous and widely used algorithm
- Finds the SHORTEST path between two certices on a weighted graph
    - "what's the fastest way to get from point A to point B"

### Edsger Dijkstra
- a Dutch programmer, physicist, essayist
- advanced the field of Computer Science to an academic discipline

### Walkthrough / Steps
1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
1. Once we've moved to the node we're going to visit, we look at each of it's neighbors
1. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
1. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node

### Pseudocode
1. This function should accept a starting and ending vertex
1. create an object (distance) and set each key to be every vertexi n the adjacency list with value of infinity, except for the starting vertex which should have a value of 0
1. After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
1. Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
1. Start looping as long as there is anying in the priority queue
    1. dequeue a vertex from the priority queue
    1. If that vertex is the same as the ending vertex - done!
    1. otherwise loop through each value in the adjacency list at that vertex
        1. calculate the distance to the vertex from the starting vertex
        1. if the distance is less than what is currently stored in our distances object
            1. update the distances object with new lower distance
            1. update the previous object to contain that vertex
            1. enqueue the vertex with the total distance from the start node

## Topological Sort Algorithm (Graph)
- For stuations that can be modelled as a graph with directed edges, where some events must oocur before others
    - school class prerequistites
    - Program dependencies
    - Event scheduling
    - Assembly instructions
    - etc
- for problems that required ordering

### A Topological Ordering
- an ordering of the nodes in a directed graph where for each directed edge from node A to node B, node A appears before node B in the ordering
- The topological sort algorithm can find a topological ordering in O(V+E) time
- topological orderings are NOT unique
-  Directed Acyclic Graphs (DAG) is the only type of graph which has a vliad top-ordering
    - These are graphs with directed edges and no cycles
- a graph which contains a cycle, cannot have a valid ordering, and cannot use top sort
- by definition all rooted trees have a topological ordering since they do not contain any cycles

### Walkthrough / Steps
- DFS recursion call stack
    1. Pick an unvisited node
    1. Beginning with the selected node, do a DFS, exploring only unvisited nodes
    1. On the recursive callback of the DFS,  add the current node to the top-ordering in reverse order.

### Pseudocode
```
# Assumption: graph is sotred as adjancency list
function topsort(graph):
    N = graph.numberOfNodes();
    V = [false, ..., false] # Length N
    ordering = [0, ..., 0] # Length N
    i = N - 1 # Index for ordering array

    for(at=0; at < N; at++>):
        if V[at] === false:
            visitedNodes = []
            dfs(at, V, visitedNodes, graph)
            for nodeId in visitedNodes:
                ordering[i] = nodeId
                i = i-1
    return ordering
```

