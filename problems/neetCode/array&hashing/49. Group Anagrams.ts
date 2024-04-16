/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * Medium
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 */

function groupAnagrams(strs: string[]): string[][] {
  const hash = {};
  for (let str of strs) {
    // Turn the string into an array of characters, sort it by alphabetical order, and join it back into a string.
    const sortedStr = str.split('').sort().join('');
    if (!hash[sortedStr]) {
      hash[sortedStr] = [str];
    } else {
      hash[sortedStr].push(str);
    }
  }

  return Object.values(hash);
}

// Time complexity: O(n * m * log(m)) where n is the number of strings in the input array and m is the length of the longest string.
// Space complexity: O(n * m)
