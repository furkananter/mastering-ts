/**
 * CHALLENGE: KMP Pattern Matching Algorithm
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - String algorithms
 * - KMP (Knuth-Morris-Pratt)
 * - LPS (Longest Prefix Suffix) array
 * - Pattern matching optimization
 *
 * Problem:
 * Implement KMP algorithm to find all occurrences of pattern in text.
 * Use LPS array to avoid redundant comparisons.
 *
 * Requirements:
 * - Build LPS (Longest Prefix Suffix) array
 * - O(n + m) time complexity
 * - Return array of starting indices
 * - Handle multiple occurrences
 *
 * Example:
 * kmpSearch("ababcababa", "aba");    // [0, 5, 7]
 * kmpSearch("aaaaaa", "aa");         // [0, 1, 2, 3, 4]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = kmpSearch("ababcababa", "aba");
  console.assert(JSON.stringify(result1) === JSON.stringify([0, 5, 7]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = kmpSearch("aaaaaa", "aa");
  console.assert(JSON.stringify(result2) === JSON.stringify([0, 1, 2, 3, 4]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = kmpSearch("hello world", "xyz");
  console.assert(JSON.stringify(result3) === JSON.stringify([]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
