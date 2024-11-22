function countBalancedSplits(s) {
  const n = s.length;

  // Helper to initialize a count object for brackets
  const initializeCount = () => ({
      '(': 0, ')': 0, '[': 0, ']': 0, '?': 0
  });

  // Helper to check if a count object represents a balanced sequence
  const isBalanced = (count) => {
      const openClosePairs = Math.min(count['('], count[')']);
      const squarePairs = Math.min(count['['], count[']']);
      const remainingOpen = count['('] - openClosePairs + count['['] - squarePairs;
      const remainingClose = count[')'] - openClosePairs + count[']'] - squarePairs;
      return Math.abs(remainingOpen - remainingClose) <= count['?'];
  };

  // Step 1: Build prefix (left) and suffix (right) counts
  const left = Array(n).fill(null).map(() => initializeCount());
  const right = Array(n).fill(null).map(() => initializeCount());

  // Populate `left`
  for (let i = 0; i < n; i++) {
      if (i > 0) left[i] = { ...left[i - 1] };
      left[i][s[i]]++;
  }

  // Populate `right`
  for (let i = n - 1; i >= 0; i--) {
      if (i < n - 1) right[i] = { ...right[i + 1] };
      right[i][s[i]]++;
  }

  // Step 2: Count valid splits
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
      if (isBalanced(left[i]) && isBalanced(right[i + 1])) {
          count++;
      }
  }

  return count;
}

// Example
const s = "[?][??]";
console.log(countBalancedSplits(s)); // Output: 2
