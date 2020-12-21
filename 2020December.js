// Hacker Rank
/* Insertion Sort - Part 1
Insert element into sorted list
Given a sorted list with an unsorted number  in the rightmost cell, can you write some simple code to insert  into the array so that it remains sorted? */

  function main(n, arr){
    const x = arr[n-1]
      for (let i = n-1; i>=0; i--){
          if (arr[i] >= x){
              if(arr[i-1] <=x || i==0) {
                arr[i]=x
                console.log(arr.join(" "))
                break
              } else arr[i] = arr[i-1]
          }
          console.log(arr.join(" "))
      }
    }
    main(5, [2,4,6,8,0])


// Compare to left value
function main(n, arr){
    let i = n-1
    while (i){
      let x = arr[i]
      if (arr[i-1]>x){
        arr[i] = arr[i-1]
        arr[i-1] = x
      } else{
        break
      }
      console.log(arr.join(" "))
      i--
    }
  }
  main(5, [2,4,6,8,3])
