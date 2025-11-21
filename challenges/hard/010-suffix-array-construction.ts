/**
 * CHALLENGE: Suffix Array Construction
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - String algorithms
 * - Suffix arrays
 * - Sorting algorithms
 * - String comparison
 *
 * Problem:
 * Construct suffix array of a string. Suffix array contains indices
 * of all suffixes sorted in lexicographical order.
 *
 * Requirements:
 * - Return array of starting indices
 * - Sorted by lexicographical order of suffixes
 * - O(n log n) time complexity preferred
 * - Handle edge cases (empty string)
 *
 * Example:
 * buildSuffixArray("banana");  // [5, 3, 1, 0, 4, 2]
 * // Suffixes: "a", "ana", "anana", "banana", "na", "nana"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type SuffixIndex = number;
type SuffixArray = SuffixIndex[];

interface SuffixData {
  index: SuffixIndex;
  suffix: string;
}

function buildSuffixArray(text: string): SuffixArray {
  // Implementation here
  return [];
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = buildSuffixArray("banana");
  console.assert(JSON.stringify(result1) === JSON.stringify([5, 3, 1, 0, 4, 2]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = buildSuffixArray("abcab");
  console.assert(JSON.stringify(result2) === JSON.stringify([2, 0, 3, 1, 4]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
