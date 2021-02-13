
function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let x = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > x) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = x;
    }
  }

  insertionSort([12, 6, 3, 7, 13, 8]);
