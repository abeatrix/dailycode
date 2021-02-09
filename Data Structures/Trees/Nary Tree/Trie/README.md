# Trie
Trie, also called prefix tree, is a special form of a Nary tree.

## properties
- a trie is used to store strings typically
- the root node is associated with an empty string
- each Trie node represents a string (a prefix)
- each node might have several children nodes while the paths to different children nodes represent different characters
- the strings the child nodes represent will be the origin string represented by the node itself plus the character on the path
- all the descendants of a node have a common prefix of the string associated with that node
- trie is widely used in various applications, such as autocomplete, spell checker, etc
