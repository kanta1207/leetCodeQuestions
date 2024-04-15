/**
 *
 * 1 Two Sum
 * https://leetcode.com/problems/two-sum/
 * Easy
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 */
function twoSum(nums: number[], target: number): number[] {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hash[diff] !== undefined) {
      return [hash[diff], i];
    }
    hash[nums[i]] = i;
  }

  return [];
}

// Time complexity: O(n)
// Space complexity: O(n)
