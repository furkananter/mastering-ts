/**
 * CHALLENGE: Longest Common Subsequence (LCS)
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Dynamic programming
 * - 2D DP table
 * - String algorithms
 * - Subsequence vs substring
 *
 * Problem:
 * Find the length of the longest common subsequence between two strings.
 * A subsequence is a sequence that appears in the same relative order
 * but not necessarily contiguous.
 *
 * Requirements:
 * - Use dynamic programming
 * - 2D DP table[m][n]
 * - Return length only
 * - Subsequence (not substring)
 *
 * Example:
 * lcs("abcde", "ace");      // 3 ("ace")
 * lcs("abc", "abc");        // 3
 * lcs("abc", "def");        // 0
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(lcs("abcde", "ace") === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(lcs("abc", "abc") === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(lcs("abc", "def") === 0, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
