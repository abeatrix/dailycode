var isAlienSorted = function(words, order) {
    words.forEach((w,i) => {
        w = w.split("")
        let newWord = ""
        for(let l of w){
            newWord+=String.fromCharCode(order.indexOf(l)+97)
        }
        words[i]=newWord
    })
    return !!words.reduce((w, i) => w && i >= w && i)
};

isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz")

isAlienSorted(["word","world","row"],"worldabcefghijkmnpqstuvxyz")

isAlienSorted(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz")
