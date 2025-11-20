/**
 * CHALLENGE: LCSk++ Algorithm (Longest Common Subsequence with k mismatches)
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Dynamic Programming
 * - LCS variations
 * - Approximate string matching
 * - 3D DP table
 *
 * Problem:
 * Find longest common subsequence allowing up to k mismatches.
 * Use 3D DP: dp[i][j][m] = LCS of s1[0..i], s2[0..j] with m mismatches.
 *
 * Requirements:
 * - lcsWithMismatches(s1, s2, k)
 * - Return length of LCS with ≤k mismatches
 * - O(n*m*k) time complexity
 * - Handle edge cases
 *
 * Example:
 * lcsWithMismatches("abcdef", "azbdxf", 2);  // 6 (allow 2 mismatches)
 * lcsWithMismatches("abc", "xyz", 0);        // 0
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(lcsWithMismatches("abcdef", "azbdxf", 2) === 6, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(lcsWithMismatches("abc", "xyz", 0) === 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(lcsWithMismatches("abc", "abc", 1) === 3, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
