var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    let res;
    res = (l1.val <= l2.val) ? l1 : l2;
    res.next = (l1.val <= l2.val) ? mergeTwoLists(l1.next, l2) : mergeTwoLists(l1, l2.next);
    return res;
};