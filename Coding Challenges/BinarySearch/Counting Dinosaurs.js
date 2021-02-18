class Solution {
    solve(animals, dinosaurs) {
        let map = new Map();
        for(let l of dinosaurs){
            map.set(l)
        }
        dinosaurs = 0;
        for(let l of animals){
            if(map.has(l)) dinosaurs++;
        }
        return dinosaurs
    }
}
