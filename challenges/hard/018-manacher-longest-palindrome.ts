/**
 * CHALLENGE: Manacher's Algorithm - Longest Palindromic Substring
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Manacher's algorithm
 * - String algorithms
 * - Palindrome detection
 * - Linear time complexity
 *
 * Problem:
 * Find longest palindromic substring using Manacher's algorithm.
 * Achieve O(n) time complexity by avoiding redundant comparisons.
 *
 * Requirements:
 * - Use Manacher's algorithm
 * - O(n) time complexity
 * - Handle even and odd length palindromes
 * - Return the longest palindrome substring
 *
 * Example:
 * manacher("babad");    // "bab" or "aba"
 * manacher("cbbd");     // "bb"
 * manacher("racecar");  // "racecar"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = manacher("babad");
  console.assert(result1 === "bab" || result1 === "aba", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = manacher("cbbd");
  console.assert(result2 === "bb", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = manacher("racecar");
  console.assert(result3 === "racecar", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
