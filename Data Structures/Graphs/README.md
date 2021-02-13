# Graph
A graph is a collection of nodes, which store data, and edges, which represent relationships or connections between nodes.
- a collection of nodes + connections between nodes
- consists of a finite (and possibly mutable) set of vertices or nodes or points
- together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph

## Terms
- Vertex
    - a node
- Edge
    - connection between nodes
- Weighted/Unweighted
    - values assigned to distances between vertices
- Directed/Undirected
    - directions assigned to distanced between vertices

### Adjacency Matrix vs List
- List
    - Can take up less space in sparse graphs
    - Faster to iterate over all edges
    - Can be slower to look up specific edge
- Matrix
    - Take up more spaces in sparse graphs
    - slower to iterate over all edges
    - Faster to look up specific edge


## DEPTH FIRST TRAVERSAL - Recursive
- accept a node
- Create a list to store the end result, to be returned at the very end
- Create an object to store visited vertices
- Create a helper function which accepts a vertex
    - return early if the vertex is empty
    - place the vertex it accepts into the visited object and push that vertex into the result array
    - loop over all of the values in the adjacencyList for that vertex
    - if any of those values have not been visited recursively, invoke the helper function with that vertex
- Invoke the helper function with the starting vertex
- return result array
```
DFS(v):
    if v is empty
        return (this is base case)
    add v to results list
    mark v as visited
    for each neighbor in vertex's neighbors:
        if neighbor is not visited:
            recursively call DFS on neighbor
```

## DEPTH FIRST TRAVERSAL - Iterative
- accept a node
- Create a stack to help use keep track of vertices (use a list/array)
- Create a list to store the end result to be returned at the end
- Create an object to store visited vertices
- Add the starting vertex to the stack and mark it visited
- While the stack has something in it:
    - Pop the next vertex from the stack
    - If that vertex hasn't been visited yet:
        - Mark it as visited
        - Add it to the result list
        - Push all of its neighbors into the stack
```
DFS-iterative(start):
    let S be a stack
    S.push(start)
    while S is not empty
        vertex = S.pop();
        if vertex is not labeled as discovered:
            visit vertex (add to result list)
            label vertex as discovered
            for each of vertex's neighbors, N do S.push(N)
```
## Breadth First Graph TRAVERSAL
- accept a starting vertex
- create a queue and palce the starting vertex in it
- create an array to store the node visited
- mark the starting vertex as visited
- loop as long as there is anything in the queue
- remove the first vertex from the queue and push it into the array that stores nodes visited
- loop over each vertex in the adjacency list for the vertex you are visitng
- if it is not inside the object that stores nodes visited mark it as visited, and enqueue the vertex
- once you have finished looping, return the array of visited nodes

# Directed Acyclic Graph (DAG)
- a graph with directed edges and no cycles
- DIRECTED EDGES are required
- By definition, all tress are DAGs since they do not contain cycles
- The `Single Source Shortest Path (SSSP)` problem can be solved efficiently on a DAG in O(V+E) time.
    -- due to the fact that the node can be ordered in a `topological ordering` via topsort and processed sequebntially

## Topological sort
- For stuations that can be modelled as a graph with directed edges, where some events must oocur before others
    - school class prerequistites
    - Program dependencies
    - Event scheduling
    - Assembly instructions
    - etc
- for problems that required ordering

### A topological ordering
- an ordering of the nodes in a directed graph where for each directed edge from node A to node B, node A appears before node B in the ordering
- The topological sort algorithm can find a topological ordering in O(V+E) time
- topological orderings are NOT unique
-  Directed Acyclic Graphs (DAG) is the only type of graph which has a vliad top-ordering
    - These are graphs with directed edges and no cycles
- a graph which contains a cycle, cannot have a valid ordering, and cannot use top sort
- by definition all rooted trees have a topological ordering since they do not contain any cycles

### Topological Sort Algorithm
- DFS recursion call stack
    1. Pick an unvisited node
    1. Beginning with the selected node, do a DFS, exploring only unvisited nodes
    1. On the recursive callback of the DFS,  add the current node to the top-ordering in reverse order.

### pseudocode
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

# Execute Depth First Search (DFS)
function dfs(at, V, visitedNodes, graphs):
    V[at] = true
    edges = graph.getEdgesOutFromNode(at)
    for edge in edges:
        if V[edge.to] == false;
            dfs(edge.to, V, visitedNodes, graph)
    visitedNodes.add(at)
```
```
# optimization
function topsort(graph):
    N = graph.numberOfNodes();
    V = [false, ..., false] # Length N
    ordering = [0, ..., 0] # Length N
    i = N - 1 # Index for ordering array

    for(at=0; at < N; at++>):
        if V[at] === false:
            i = dfs(i, at, V, ordering, graph)
    return ordering

# Execute Depth First Search (DFS)
function dfs(i, at, V, ordering, graphs):
    V[at] = true
    edges = graph.getEdgesOutFromNode(at)
    for edge in edges:
        if V[edge.to] == false;
            dfs(i, edge.to, V, ordering, graph)
    ordering[i] = at
    return i - 1
```
