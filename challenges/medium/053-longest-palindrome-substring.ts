/**
 * CHALLENGE: Longest Palindromic Substring
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Expand around center
 * - Palindrome detection
 * - String algorithms
 * - Two-pointer technique
 *
 * Problem:
 * Find the longest palindromic substring in a given string.
 * Use expand-around-center approach.
 *
 * Requirements:
 * - Return the longest palindrome substring
 * - Handle odd-length (single center)
 * - Handle even-length (two center chars)
 * - If multiple, return any one
 *
 * Example:
 * longestPalindrome("babad");  // "bab" or "aba"
 * longestPalindrome("cbbd");   // "bb"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function longestPalindrome(s: string): string {
  // TODO: Implement longest palindrome substring
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = longestPalindrome("babad");
  console.assert(result1 === "bab" || result1 === "aba", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(longestPalindrome("cbbd") === "bb", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(longestPalindrome("a") === "a", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
