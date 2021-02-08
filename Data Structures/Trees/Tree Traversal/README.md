# Traversing a Binary Tree
Traversing a binary tree means moving along multiple paths in the tree.
When you search for a node, insert a new one, or evaluate the size of a tree, you’re “traversing” it = checking every node in a tree structure.
Like a normal binary tree, we can traverse a BST in preorder, inorder, postorder or level-order.
- inorder traversal in BST will be in ascending order = most frequent used traversal method of a BST
- Not ideal
    - Do it iteratively with a while loop and currentNode pointer to move through the tree until you find what you’re looking for
- Ideal
    - Recursion is the best method for calculating multiple paths or possibilities

## search operations
There are two ways that you’ll end up traversing a binary tree — breadth-first or depth-first. They’re two different search operations that move through a tree in different ways. ```breadth-first search``` vs ```depth-first search```

### Breadth-First Search
In breadth-first search, we start by going wide. We visit each node that’s connected to the root node before moving down to the next level of nodes. Then, we’ll check each node connected to those nodes, move down a level, and so on. Breadth-first search tries to stay as close to the root node as possible before moving on to subsequent parts of the graph.
- when planning your next move during a chess game, if you are thinking of all posible moves you could move next that's breadth-first thinking
```
            10
    6               15
3       8       null    20
Order = [10,6,15,3,8,20]
```
- to move horizontally before vertically

#### Steps - Iteratively
- create a queue (this can be an array) and a variable to store the values of nodes visited (FIFO)
- Place the root node in the queue
- Loop as long as there is anything in the queue
    - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    - If there is a left property on the node dequeued - add it to the queue
    - If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

```
            10
    6               15
3       8       null    20
queue = [3, 8, 20]
visited = [10,6,15]
move from queue to visited
queue = []
visited = [10,6,15,3,8,20]
return visited when done
```

### Depth-First Search
In depth-first search, we start by going deep. First we visit the root node, then one of its child nodes, and so on until we reach the end of the tree. We then return to the root and visit the next related node and all of the related nodes until we can’t go any further, and then circle back up. Depth-first search tries to get as far away from the starting point as possible, as soon as possible, before it hits a dead end and has to start over.
- when planning your next move during a chess game, if you pick one move and figure out how far it could take you that's depth-first thinking

##### Depth-First Search - Pre-Order
```
From parent to child, left to right

            10
    6               15
3       8       null    20

Order = [10,6,3,8,15,20]
```

##### Depth-First Search - Post-Order
```
From child to parent, left to right

            10
    6               15
3       8       null    20

Order = [3,8,6,20,15,10]
```

##### Depth-First Search - In-Order
```
            10
    6               15
3       8       null    20

Order = [3,6,8,10,15,20]
```
