# BINARY HEAPS
- a tree structure
- VERY similar to a binary search tree but with diff rules
    - no orders
    - no relationships
- Two types of heaps
    - Max Heaps
        - parent nodes are always larger than child nodes
    - Min Heaps
        - parent nodes are always smaller than child nodes
- store in array / set

## Purpose
- Binary Heaps are used to implement Priority Queues, which are very commonly used data Structures
- often use with graph traversal algorithms

## Priority Queue
- A data structure wher each element has a priority. Elements with higher priorities are served before elements with lower priorities.

## PQ - Steps
1. write a min binary heap - lower number means higher priority
1. each node has a val and a priority
    1. use priority to build the heap
1. enqeueu method accepts a val and priorty
    1. makes a new node
    1. put it in the right spot based off its priority
1. dequeue method removes root element
    1. returs it
    1. rearranges heap using priority

## Max Heaps and Min Heaps
- Each parent has at most two child nodes
- the value of each parent node is always greater than its child nodes
- NO guarantees between silbling nodes in Max Heaps
- as compact as possible
- all children of each nodes are as full as they can be
- left children are filled out first

## Traversal
- to find children
    - for any index of an array n
        - the left child is stored at 2n+1
        - the right child is stored at 2n+2
- to find parent
    - for any child node at index n
        parents is at index (n-1)/2

## Max Heaps
1. push the value into the values property on the heap
1. Bubble Up:
    1. create a variable called index which is the length of the values property -1
    1. create a variable called parentIndex which is the floor of (index-1)/2
    1. keep looping as long as the values element at parentIndex is less than the values element at the child index
        1. swap the value off the values element at the parentIndex with the value of the eleemnt property at the child index
        1. Set the index to be the parentIndex and start over

# Removing
1. Swap the first value in the value property with the last one
1. pop from the values property, so you can return the value at the end
1. Have the new root 'sink down' to the correct spot
    1. parent index starts at 0 (root)
    1. find index of the left child: 2*i+1
    1. find index of the right child: 2*i+2
    1. if the left or right child is greater than the element, swap. if both left and right children are larger, swap with the largest child.
    1. the swapped the child index is now the new parent index
    1. keep loopng and swapping until none of their children is larger
    1. return the old root
