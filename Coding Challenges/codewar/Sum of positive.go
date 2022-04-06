package kata

func PositiveSum(numbers []int) int {
  sum := 0
  for _, n := range numbers {
    if n>0 {
      sum+=n
    }
  }
  return sum
}

func PositiveSum(numbers []int) int {
	sum := 0
   for i :=0; i<len(numbers);i++ {
      if numbers[i] > 0 {
        sum += numbers[i]
      }
    }
	return sum
  }