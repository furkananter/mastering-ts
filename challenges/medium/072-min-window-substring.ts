/**
 * CHALLENGE: Minimum Window Substring
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Sliding window
 * - Two pointers
 * - Hash map
 * - String algorithms
 *
 * Problem:
 * Find minimum window in S that contains all characters from T.
 * Return empty string if no such window exists.
 *
 * Requirements:
 * - Use sliding window with two pointers
 * - Track character frequencies
 * - Find minimum length window
 * - O(n) time complexity
 *
 * Example:
 * minWindow("ADOBECODEBANC", "ABC");  // "BANC"
 * minWindow("a", "a");                // "a"
 * minWindow("a", "aa");               // ""
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function minWindow(s: string, t: string): string {
  // TODO: Implement minimum window substring
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(minWindow("ADOBECODEBANC", "ABC") === "BANC", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(minWindow("a", "a") === "a", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(minWindow("a", "aa") === "", "❌ Test 3 failed");
  console.log("✅ Test 3 failed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
