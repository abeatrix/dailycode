var findNumOfValidWords = function(words, puzzles) {
    words.forEach((w,i)=> words[i] = [...new Set(w)])
    puzzles.forEach((p,i)=> { puzzles[i] = [ p[0], [...new Set(p)] ] })
    for(let p of puzzles) {
        for(let w of words) {
            if(w.includes(p[0])){
                if(p[1].includes(w)) console.log('tes')
            }
        }
    }
}

findNumOfValidWords(["aaaa","asas","able","ability","actt","actor","access"], ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"])

// SLOW - Time Limit Exceeded for Long Test Cases
var findNumOfValidWords = function(words, puzzles) {
    let answer = []
    for(let i=0; i<puzzles.length; i++){
        let counter = 0;
        for(let j=0; j<words.length; j++){
            let sortedWord = words[j].split("");
            let x = 0;
            if(sortedWord.includes(puzzles[i][0])){
                while(x<sortedWord.length){
                    if(puzzles[i].includes(sortedWord[x])) x++;
                    else break;
            }
            if(x === sortedWord.length) counter++
            }
        }
        answer.push(counter)
    }
    return answer;
};
findNumOfValidWords(["aaaa","asas","able","ability","actt","actor","access"], ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"])
