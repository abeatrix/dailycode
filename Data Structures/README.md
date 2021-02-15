# DS Study Note

## Big Os of Data Stucture
- A data “structure” is like a container that stores data in a specific, organized layout. 
- A Logarithm is the power to which a number must be raised in order to get some other number.
- For example, the base ten logarithm of 100 is 2, because ten raised to the power of two is 100:
```log 100 = 2``` < = > ```10^2 = 100```

## Chart
<img src="./assets/bigOchart.png">

### Stacks:
- insertion - O(1)
- removal - O(1)
- searching - O(N)
- Access - O(N)

### Queus:
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

### Binary Heaps
- Insertion - O(log N)
- Removal - O(log N)
- Search - O(N)

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
