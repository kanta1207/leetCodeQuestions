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
