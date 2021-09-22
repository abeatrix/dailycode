function invert(node) {
    // your code here
    if(!node) return null;
    let newRight = node.left
    node.left = invert(node.right)
    node.right = invert(newRight);
    return node;
  
}

function invert(node){
    if(!node) return null;
    [node.left, node.right] = [invert(node.right), invert(node.left)]
    return node;
}
