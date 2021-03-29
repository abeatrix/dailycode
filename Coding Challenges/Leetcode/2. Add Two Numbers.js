/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let ans = []
    let c = ListNode;
    let c1 = l1;
    let c2 = l2;
    while(c1.val || c2.val){
        let v = c1.val+c2.val
        c.val = v
        ans.push(c)
        c1 = l1.next
        c2 = l2.next
    }
    return ans
};