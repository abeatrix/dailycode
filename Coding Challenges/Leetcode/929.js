var numUniqueEmails = function(emails) {
    emails.forEach((value,i) => emails[i] = value.replace(/\+.+(?=@)|\.(?=.+@)/gi, ''));
    return new Set(emails).size;
};

var numUniqueEmails = function(emails) {
    let map = new Map();
    let count = 0;
    for(let e of emails){
      let x = e.split("@")
      let domain = x[1]
      x[0] = x[0].split("+")[0]
      x[0] = x[0].replace(/\./g, "")
      if(!map.has(domain)) map.set(domain, new Set())
      map.get(domain).add(x[0])
      }
      let x = [...map.values()]
      for (let i of x){
        count+= i.size
      }
      return count;
};
