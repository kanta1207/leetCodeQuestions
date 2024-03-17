/**
 *
 * @see {@link https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/}
 */
function removeDuplicates(nums: number[]): number {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (map[currentNum] === 2) {
      nums.splice(i, 1);
      i--;
    } else if (map[currentNum] === undefined) map[currentNum] = 1;
    else map[currentNum]++;
  }
  return nums.length;
}
