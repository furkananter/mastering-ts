/**
 * CHALLENGE: Palindrome Partitioning
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Backtracking
 * - Palindrome checking
 * - Recursion
 * - String partitioning
 *
 * Problem:
 * Partition string into all possible palindrome substrings.
 * Return all possible partitions.
 *
 * Requirements:
 * - Use backtracking
 * - Check if substring is palindrome
 * - Generate all partitions
 * - Return array of arrays
 *
 * Example:
 * partition("aab");
 * // [["a","a","b"], ["aa","b"]]
 * partition("a");
 * // [["a"]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function partition(s: string): string[][] {
  // TODO: Implement palindrome partitioning using backtracking
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = partition("aab");
  console.assert(result1.length === 2, "❌ Test 1 failed: should have 2 partitions");
  console.log("✅ Test 1 passed");

  const result2 = partition("a");
  console.assert(JSON.stringify(result2) === JSON.stringify([["a"]]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
