
function bubbleSort(array) {
    let swapHappened = 0;
    let i = 0;
    while (swapHappened >= 0) {
      while (i < array.length - 1) {
        if (array[i + 1] < array[i]) {
          let x = array[i + 1];
          array[i + 1] = array[i];
          array[i] = x;
          swapHappened++;
        }
        i++;
      }
      if (swapHappened > 0) {
        i = 0;
        swapHappened = 0;
      } else {
        return array;
      }
    }
  }
  bubbleSort([12, 6, 3, 7, 13, 8]);
