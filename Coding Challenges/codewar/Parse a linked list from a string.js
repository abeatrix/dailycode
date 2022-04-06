// Parse a linked list from a string
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}


function parse(string) {
    // Write your code here
      const str = string.split(" -> ")
      let head = null, tail = null;
      for(let s of str){
          const v = parseInt(s);
          if(isNaN(v)) return head;
          const node = new Node(v);
          if(!head) head = node;
          if(tail) tail.next = node;
          tail = node
      }
      return head
}

parse("0 -> 1 -> 4 -> 9 -> 16 -> null")

// Other solutions
const parse = string => string.split(' -> ').slice(0, -1).reduceRight((a, b) => new Node(Number(b), a), null);

function parse(string) {
    return string==="null" ? null : new Node(parseInt(string), parse(string.slice(string.indexOf("->")+3)))
}

function parse(string) {
    return string==='null'?null:new Node(+string.match(/\d+/)[0],parse(string.replace(/\d+ -> /,"")))
}