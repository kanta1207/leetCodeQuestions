/**
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * Easy
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

function containsDuplicate(nums: number[]): boolean {
  const hash = {};
  const isDuplicate = nums.some((num) => {
    if (!hash[num]) {
      hash[num] = 'Exist';
      return false;
    }
    return !!hash[num];
  });

  return isDuplicate;
}

// Time complexity: O(n)
// Space complexity: O(n)
