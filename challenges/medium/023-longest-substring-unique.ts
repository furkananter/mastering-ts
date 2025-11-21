/**
 * CHALLENGE: Longest Substring Without Repeating Characters
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Sliding window
 * - Set or Map for tracking
 * - String algorithms
 * - Two pointers
 *
 * Problem:
 * Find the length of the longest substring without repeating characters.
 *
 * Requirements:
 * - Use sliding window + Set/Map
 * - No duplicate characters in substring
 * - Return length (not the substring itself)
 * - O(n) time complexity
 *
 * Example:
 * longestUnique("abcabcbb");     // 3 ("abc")
 * longestUnique("bbbbb");        // 1 ("b")
 * longestUnique("pwwkew");       // 3 ("wke")
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function longestUnique(s: string): number {
  // TODO: Implement longest unique substring
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(longestUnique("abcabcbb") === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(longestUnique("bbbbb") === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(longestUnique("pwwkew") === 3, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(longestUnique("") === 0, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
