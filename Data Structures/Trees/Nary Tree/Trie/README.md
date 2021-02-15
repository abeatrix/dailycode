# Trie
- A trie (pronounced like “try” and short for “retrieval”), also called prefix tree, is a special form of a Nary tree.
- almost always store alphabetical data.
- The value stored in a node is a single letter, and the references are pointers to other letters that make up a word.
- it is a type of tree in which nodes aren’t limited to only left and right pointers
- each node can store a list of “child” nodes that all represent possible paths forward through the trie
- Like a tree, a trie starts with an empty root node that points to child nodes.
- Each subsequent child node contains two types of data:
    - A value.
    - References to other nodes, usually stored in an array.

## properties
- a trie is used to store strings typically
- the root node is associated with an empty string
- each Trie node represents a string (a prefix)
- each node might have several children nodes while the paths to different children nodes represent different characters
- the strings the child nodes represent will be the origin string represented by the node itself plus the character on the path
- all the descendants of a node have a common prefix of the string associated with that node
- trie is widely used in various applications, such as autocomplete, spell checker, etc


## Where Tries Stop
- A trie can stop at the end of a chain if there are no more nodes for it to visit
- it can also return a word before it reaches the end; we just have to tell it where to stop.
- What if we were looking for the word “pick” in the trie below? It’s there, but our current code wouldn’t know how to return it. To make the return, we’d add the isWord property to the “K” in “pick” so that the trie knows this is a complete word and it can return there.
- isWord tells the trie which paths create valid words. We’d add the property to the “K” but not the “C” before it, as that’s not a valid English word.
