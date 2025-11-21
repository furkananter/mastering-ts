/**
 * CHALLENGE: Decode Ways
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Dynamic programming
 * - String processing
 * - Counting paths
 * - Edge case handling
 *
 * Problem:
 * A message encoded as digits can be decoded where 1='A', 2='B'...26='Z'.
 * Count the number of ways to decode a given digit string.
 *
 * Requirements:
 * - Use DP approach
 * - Handle single digit (1-9)
 * - Handle two digits (10-26)
 * - "0" alone is invalid
 *
 * Example:
 * numDecodings("12");    // 2 ("AB" or "L")
 * numDecodings("226");   // 3 ("BZ", "VF", "BBF")
 * numDecodings("06");    // 0 (invalid)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(numDecodings("12") === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(numDecodings("226") === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(numDecodings("06") === 0, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(numDecodings("10") === 1, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
