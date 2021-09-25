class NodeStore {
    /**
    * @param {Node} node
    * @param {any} value
    */
   constructor(){
     this.map = []; //this.map ={}
     this.nodeKey = Symbol();
   }
 
   set(node, value) {
     node[this.nodeKey] = Symbol();
     if(!this.map[node[this.nodeKey]]) this.map[node[this.nodeKey]]=value;
   }
   /**
    * @param {Node} node
    * @return {any}
    */
   get(node) {
    return this.map[node[this.nodeKey]];
   }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
   has(node) {
     return !!this.map[node[this.nodeKey]];
   }
 }