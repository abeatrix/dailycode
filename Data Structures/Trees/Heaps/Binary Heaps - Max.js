class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
        // if(element>this.values[parent]) {
        //     this.values.push(this.values[parents])
        //     this.values[parents] = element;
        // }
    }

    bubbleUp(){
        let i = this.values.length-1;
        const element = this.values[i];
        while(i>0){
            let parenti = Math.floor((i-1)/2);
            let parent = this.values[parenti];
            if(element <= parenti) break;
            this.values[parenti] = element;
            this.values[i] = parent;
            i = parenti;
        }
    }

    // remove the root>replace with the most recently added>adjust(sink down / buuble down / extra-min/max)
    extraMax(){
        let max = this.values[0],
            end = this.values.pop();
        if(this.values.length>0){
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown(){
        let i = 0,
            n = this.values.length,
            e = this.values[0];
        while(true) {
            let li = 2*i+1,
                ri = 2*i+1,
                l, r,
                swap = null;
            if(li < n){
                l = this.values[li];
                if(l > e) swap = li;
            }
            if(ri < n){
                r = this.values[ri];
                if((swap === null && r > e) || (swap!=null && r>l)) {
                    swap = ri;
                }
            }
        }
    }

}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.extraMax();
