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
