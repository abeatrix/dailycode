// Number Pairs
function getLargerNumbers(a, b) {
    const newArray = []
    for (i in a) {
      newArray.push(a[i]>=b[i] ? a[i] : b[i])
    }
    return newArray;
  }