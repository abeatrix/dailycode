// using hash table

var findDuplicate = function(paths) {
    let map = new Map();
    paths.forEach((p, i) => {
        p = p.split(" ");
        let root = p.shift();
        while(p.length){
            let file = p.shift().split("(");
            let content = file[1].slice(0, -1)
            if(!map.has(content)) map.set(content, [])
            map.get(content).push(root+'/'+file[0])
        }
    });
    return [...map.values()].filter(n=>n.length>1) // return groups with more than 1 files in each content groups
};

findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"])


var findDuplicate = function(paths) {
    let map = new Map();
    paths.forEach((p, i) => {
        paths[i] = p.split(" ")
        let root = paths[i].shift();
        while(paths[i].length){
            let file = paths[i].shift().split("(");
            let content = file[1].slice(0, -1)
            if(!map.has(content)) map.set(content, [])
            map.get(content).push(root+'/'+file[0])
        }
    });
    return [...map.values()].filter(n=>n.length>1) // return groups with more than 1 files in each content groups
};

findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"])
