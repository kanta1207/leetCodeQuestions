/**
 *
 * @see {@link https://leetcode.com/problems/single-number/}
 */
function singleNumber(nums: number[]): number {
  let value = 0;
  for (let num of nums) {
    value = value ^ num;
  }
  return value;
}
