/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
    solve(node) {
        let current = node
        let d = ""
        while(current){
            d+=current.val
            current = current.next
        }
        return parseInt(d, 2)
    }
}
