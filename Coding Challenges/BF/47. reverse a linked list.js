// 47. reverse a linked list

const reverseLinkedList = (list) => {
    // your code
    let newList=null, next=null;
    while(list){
        next = list.next;
        list.next = newList;
        newList = list;
        list = next;
    }
    return newList;
}