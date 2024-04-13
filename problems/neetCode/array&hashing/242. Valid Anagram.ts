/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 * Easy
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const hash = {};

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1;
    hash[t[i]] = hash[t[i]] ? hash[t[i]] - 1 : -1;
  }

  return Object.values(hash).every((v) => v === 0);
}

// Time complexity: O(n)
// Space complexity: O(n)
