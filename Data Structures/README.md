# DS Study Note

## Big Os of Data Stucture
A data “structure” is like a container that stores data in a specific, organized layout. 

### stacks:
- insertion - O(1)
- removal - O(1)
- searching - O(N)
- Access - O(N)

### queus:
- insertion - O(1)
- removal - O(1)
- searching - O(N)
- Access - O(N)


### BST
- Insertion - O(log n)
- Searching - O(log n)
- Not guaranteed

### Hash Table
- Insertion - O(1)
- Deletion - O(1)
- Access - O(1)

### Adjacency Matrix
- V - number of vertices
- E - number of edges
- Add Vertex - O(|V^2|)
- Add Edge - O(1)
- Remove Vertex - O(|V^2|)
- Remove Edge - O(1)
- Query - O(1)
- Storage - O(|V^2|)

### Adjacency List
- Add Vertex - O(1)
- Add Edge - O(1)
- Remove Vertex - O(|V|+|E|)
- Remove Edge - O(|E|)
- Query - O(|V|+|E|)
- Storage - O(|V|+|E|)
