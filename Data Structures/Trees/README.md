# Trees

## Introduction
Trees are an important hierarchical data structure.
- There are many type of trees
- They’re made up of nodes, where data is stored, and edges, which represent the connections between the data.
- Binary trees and tries are more advanced node-based structures that store data hierarchically from top to bottom
- Nodes in a binary tree or trie can point to more than one nodes.
- Nodes in a binary tree have a left property that points to a lesser value or a right property that points to a greater value.
- A trie is a type of tree that can only store alphabetical data.
- Each node stores a letter value and points forward to other nodes that make up words.
- A tree is a frequently-used data structure to simulate a hierarchical tree structure.
- Each node of the tree will have a root value and a list of references to other nodes which are called child nodes.
- From graph view, a tree can also be defined as a directed acyclic graph which has N nodes and N-1 edges.
- Each tree has a unique start node called the root node
- Each node in a tree can only have one parent node. This is what gives trees their hierarchical structure.
- There’s only ever one path from a given node back to the root.
- Edges in a tree are sometimes referred to as branches.
- Nodes at the end of a tree that have no child nodes are called leaves.
- The length of the longest path from a leaf to the root is the tree’s height.

### Binary Trees
A binary tree is a species of tree with one defining feature: Each node has at most two branches.
- Data is sorted
- Each node, except for the root, will have three properties:
    - The value, which describes the data in the node.
    - The left property, which points to a node with a lesser value than the current node.
    - The right property, which points to a node with greater value than the current node.
The left and right properties can also be set to null if the node has no child elements.
