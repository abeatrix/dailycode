func twoSum(nums []int, target int) []int {
    hmap := make(map[int]int)
    for i, n := range nums {
        if x, y := hmap[target-n]; y{
            return []int{x, i}
        }
        hmap[n] = i
    }
    return []int{}
}
