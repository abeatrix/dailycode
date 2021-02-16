var replaceWords = function(dictionary, sentence) {
    let trie = new Trie();
    for(let word of dictionary){
        trie.insert(word)
    }
    sentence = sentence.split(" ");
    sentence.forEach((w,i) => {
      if(trie.BFS(w)) sentence[i] = trie.BFS(w);
      })
    return sentence.join(" ");
};

class Node {
    constructor(val){
            this.val = val;
            this.parent = null;
            this.children = {};
            this.isWord = false;
        }
}

class Trie {
    constructor(){
        this.root = new Node(null);
    }

    insert(word){
        let node = this.root;
        for(let i=0; i<word.length; i++){
            if(!node.children[word[i]]){
                node.children[word[i]] = new Node(word[i]);
                node.children[word[i]].parent = node;
            }
            node = node.children[word[i]];
            if(i==word.length-1) node.isWord = true;
        }
    }

    BFS(word){
        let node = this.root, queue = [], fullWord = "", i=0;
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            for(let child in node.children){
                if(child == word[i]){
                    fullWord+=child;
                    i++;
                    if(node.children[child].isWord) return fullWord;
                    queue.push(node.children[child]);
                    break;
                }
            }
        }
        return false;
    }
}



replaceWords(["e","k","c","harqp","h","gsafc","vn","lqp","soy","mr","x","iitgm","sb","oo","spj","gwmly","iu","z","f","ha","vds","v","vpx","fir","t","xo","apifm","tlznm","kkv","nxyud","j","qp","omn","zoxp","mutu","i","nxth","dwuer","sadl","pv","w","mding","mubem","xsmwc","vl","farov","twfmq","ljhmr","q","bbzs","kd","kwc","a","buq","sm","yi","nypa","xwz","si","amqx","iy","eb","qvgt","twy","rf","dc","utt","mxjfu","hm","trz","lzh","lref","qbx","fmemr","gil","go","qggh","uud","trnhf","gels","dfdq","qzkx","qxw"]
"ikkbp miszkays wqjferqoxjwvbieyk gvcfldkiavww vhokchxz dvypwyb bxahfzcfanteibiltins ueebf lqhflvwxksi dco kddxmckhvqifbuzkhstp wc ytzzlm gximjuhzfdjuamhsu gdkbmhpnvy ifvifheoxqlbosfww mengfdydekwttkhbzenk wjhmmyltmeufqvcpcxg hthcuovils ldipovluo aiprogn nusquzpmnogtjkklfhta klxvvlvyh nxzgnrveghc mpppfhzjkbucv cqcft uwmahhqradjtf iaaasabqqzmbcig zcpvpyypsmodtoiif qjuiqtfhzcpnmtk yzfragcextvx ivnvgkaqs iplazv jurtsyh gzixfeugj rnukjgtjpim hscyhgoru aledyrmzwhsz xbahcwfwm hzd ygelddphxnbh rvjxtlqfnlmwdoezh zawfkko iwhkcddxgpqtdrjrcv bbfj mhs nenrqfkbf spfpazr wrkjiwyf cw dtd cqibzmuuhukwylrnld dtaxhddidfwqs bgnnoxgyynol hg dijhrrpnwjlju muzzrrsypzgwvblf zbugltrnyzbg hktdviastoireyiqf qvufxgcixvhrjqtna ipfzhuvgo daee r nlipyfszvxlwqw yoq dewpgtcrzausqwhh qzsaobsghgm ichlpsjlsrwzhbyfhm ksenb bqprarpgnyemzwifqzz oai pnqottd nygesjtlpala qmxixtooxtbrzyorn gyvukjpc s mxhlkdaycskj uvwmerplaibeknltuvd ocnn frotscysdyclrc ckcttaceuuxzcghw pxbd oklwhcppuziixpvihihp")

replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery")
replaceWords(["a","b","c"], "aadsfasf absbs bbab cadsfafs")
