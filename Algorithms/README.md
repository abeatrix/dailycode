# Study Note

A Logarithm is the power to which a number must be raised in order to get some other number.
For example, the base ten logarithm of 100 is 2, because ten raised to the power of two is 100:
```log 100 = 2``` < = > ```10^2 = 100```

## Big-O Complexity Chart
O(log n), O(1) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)

## Graph Algorithm

### Dijkstra's Algorithm
- native priority queue
- binary heap priority queue
- one of the most famous and widely used algorithm
- Finds the SHORTEST path between two certices on a weighted graph
    - "what's the fastest way to get from point A to point B"

### Edsger Dijkstra
- a Dutch programmer, physicist, essayist
- advanced the field of Computer Science to an academic discipline

### Topological Sort Algorithm
- For stuations that can be modelled as a graph with directed edges, where some events must oocur before others
    - school class prerequistites
    - Program dependencies
    - Event scheduling
    - Assembly instructions
    - etc
- for problems that required ordering

#### A topological ordering
- an ordering of the nodes in a directed graph where for each directed edge from node A to node B, node A appears before node B in the ordering
- The topological sort algorithm can find a topological ordering in O(V+E) time
- topological orderings are NOT unique
-  Directed Acyclic Graphs (DAG) is the only type of graph which has a vliad top-ordering
    - These are graphs with directed edges and no cycles
- a graph which contains a cycle, cannot have a valid ordering, and cannot use top sort
- by definition all rooted trees have a topological ordering since they do not contain any cycles

#### Steps
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

