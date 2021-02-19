
var HitCounter = function() {
    this.map = new Map();
    this.count = 1;
};

HitCounter.prototype.hit = function(timestamp) {
    this.map.set(this.count, timestamp)
    this.count++;
};

HitCounter.prototype.getHits = function(timestamp) {
    let minsAgo = timestamp - 300;
    let res = [...this.map.values()].filter(t => t>minsAgo )
    return res.length;
};


/**
["HitCounter","hit","hit","hit","hit","getHits"]
[[],[1],[1],[1],[300],[300]] // 4


["HitCounter","hit","hit","hit","getHits","hit","getHits","getHits"]
[[],[1],[2],[3],[4],[300],[300],[301]]
 */
