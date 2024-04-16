/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * Medium
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 */

function groupAnagrams(strs: string[]): string[][] {
  const hash = {};
  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (!hash[sortedStr]) {
      hash[sortedStr] = [str];
    } else {
      hash[sortedStr].push(str);
    }
  }

  return Object.values(hash);
}
