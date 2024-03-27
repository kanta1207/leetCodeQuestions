function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  // Initialize character counts
  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);
  const aCharCode = 'a'.charCodeAt(0);

  // Count characters for the first window based on s1's length
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - aCharCode]++;
    s2Count[s2.charCodeAt(i) - aCharCode]++;
  }

  // Compare the character counts for each window of s2 with s1's count
  for (let i = 0; i <= s2.length - s1.length; i++) {
    if (arraysEqual(s1Count, s2Count)) return true; // Directly compare arrays

    // Slide the window: update counts for next window
    if (i < s2.length - s1.length) {
      s2Count[s2.charCodeAt(i) - aCharCode]--;
      s2Count[s2.charCodeAt(i + s1.length) - aCharCode]++;
    }
  }

  return false;
}

// Helper function to compare two arrays for equality
function arraysEqual(a: number[], b: number[]): boolean {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
