// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript
// t (maximum sum of distances, integer >= 0)
// k (number of towns to visit, k >= 1)
// ls (list of distances, all distances are >=0 and has at least 1 element)

function chooseBestSum(t, k, ls) {
    // your code
    let count = 0;
    function travel(towns, added) {
        if (added.length === k) {
            const sum = [...added].reduce((a, b) => a + b)
            if( (sum > count && sum <= t) || sum == t){
                count = sum
            }
            return [...added]
        }
        if (!towns.length) return []
        let townsLeft = towns.slice(1)
        let newAdded = [...added]
        newAdded.push(towns[0])
        
        return [...travel(townsLeft, newAdded), ...travel(townsLeft, added)]
    }
    travel(ls, [])
    return count ? count : null;
}

chooseBestSum(174, 3, [50, 55, 57, 58, 60]) // 173
chooseBestSum(163, 3, [50, 55, 57, 58]) // 163
chooseBestSum(174, 3, [50]) // null

