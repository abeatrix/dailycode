function bandNameGenerator(str) {
    // Happy coding
    const len = str.length-1
    return str[0].toUpperCase()!==str[len].toUpperCase() ? `The ${str[0].toUpperCase()}${str.substr(1)}`
  : str[0].toUpperCase()+str.substr(1)+str.substr(1)
  }

  // Alt
  function bandNameGenerator(str) {
    // Happy coding
    const len = str.length-1
    if(str[0].toUpperCase()!==str[len].toUpperCase()){
      return `The ${str[0].toUpperCase()}${str.substr(1)}`
    } else {
      return str[0].toUpperCase()+str.substr(1)+str.substr(1)
    }
  }