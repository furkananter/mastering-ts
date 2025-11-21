/**
 * CHALLENGE: Edit Distance (Levenshtein Distance)
 *
 * Difficulty: Hard
 * Estimated Time: 20 minutes
 *
 * Topics to know:
 * - Dynamic Programming (2D DP)
 * - String algorithms
 * - Bottom-up approach
 * - Space optimization
 *
 * Problem:
 * Given two strings word1 and word2, return the minimum number of operations
 * required to convert word1 to word2. Operations: insert, delete, replace a character.
 *
 * Requirements:
 * - Use dynamic programming
 * - Handle empty strings
 * - O(m*n) time complexity
 * - Consider space optimization (O(n))
 *
 * Example:
 * editDistance("horse", "ros");     // 3 (replace h->r, remove o, remove e)
 * editDistance("intention", "execution");  // 5
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function editDistance(word1: string, word2: string): number {
  // Implementation here
  return 0;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(editDistance("horse", "ros") === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(editDistance("intention", "execution") === 5, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(editDistance("", "abc") === 3, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(editDistance("abc", "") === 3, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
