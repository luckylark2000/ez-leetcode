function shuffle(nums: number[], n: number): number[] {
  let arr1 = nums.slice(0, n);
  let arr2 = nums.slice(n, 2 * n);

  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(arr1[i]);
    res.push(arr2[i]);
  }
  return res;
}

/**
 * 优化1
 */
function shuffle1(nums: number[], n: number): number[] {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(nums[i]);
    res.push(nums[n + i]);
  }
  return res;
}

/**
 * 优化2,简洁，但是不高效
 */
function shuffle2(nums: number[], n: number): number[] {
  return nums.slice(0, n).flatMap((v, i) => [nums[i], nums[n + i]]);
}

console.log(shuffle2([1, 2, 3, 4], 2));
