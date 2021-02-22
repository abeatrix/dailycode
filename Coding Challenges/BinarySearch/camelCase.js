class Solution {
    solve(words) {
        let word;
        let result = words[0].toLowerCase();
        for(let i = 1; i < words.length; i++){
            word = words[i];
            result += capitalize(word);
        }
        return result;


        function capitalize(str){
            return str.charAt(0).toUpperCase() + (str.slice(1, str.length)).toLowerCase();
        }
    }
}

class Solution {
    solve(words) {
        let out = words[0].toLowerCase()
        for (let i = 1; i < words.length; i++){
            out += words[i].charAt(0).toUpperCase()
                + words[i].slice(1).toLowerCase()
        }
        return out
    }
}

solve(["java", "beans"]
)
