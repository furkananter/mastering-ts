/**
 * CHALLENGE: Permutation in String
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Sliding window
 * - Hash map / frequency counting
 * - Anagram detection
 * - String matching
 *
 * Problem:
 * Check if s2 contains permutation of s1.
 * Use sliding window with frequency map.
 *
 * Requirements:
 * - Sliding window of s1.length in s2
 * - Compare character frequencies
 * - Return true if permutation found
 * - O(n) time
 *
 * Example:
 * checkInclusion("ab", "eidbaooo");   // true
 * checkInclusion("ab", "eidboaoo");   // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(checkInclusion("ab", "eidbaooo") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(checkInclusion("ab", "eidboaoo") === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
