
/**
 * @param {Node} head
 * @return {boolean}
 */
 function hasCircle(head) {
    // your code here
    let map = new Map();
    let current = head;
    while(current){
        if(map.has(current)) return true;
        map.set(current,true);
        current = current.next;
    }
    return false;
}