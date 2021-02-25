// 6ms, 98%
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


// 10ms, 92%
class Solution {
    solve(words) {
        let ans = words[0].toLowerCase()
        for(let i=1; i<words.length;i++){
            words[i] = words[i].toLowerCase();
            ans+= words[i].charAt(0).toUpperCase()+words[i].substring(1)
        }
        return ans

    }
}

// 12ms, 85%
class Solution {
    solve(words) {
        let ans = words[0].toLowerCase()
        for(let i=1; i<words.length;i++){
            ans+= words[i].charAt(0).toUpperCase()+words[i].substring(1).toLowerCase();
        }
        return ans

    }
}

// 21ms, 13%
class Solution {
    solve(words) {
        let ans = words[0].toLowerCase()
        for(let i=1; i<words.length;i++){
            words[i] = words[i].toLowerCase().split("")
            words[i][0] = words[i][0].toUpperCase()
            words[i] = words[i].join("")
            ans+=words[i]
        }
        return ans

    }
}
