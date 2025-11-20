/**
 * CHALLENGE: House Robber
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Dynamic programming
 * - State machine
 * - Max value tracking
 * - Array DP
 *
 * Problem:
 * Rob houses along street (array of money values).
 * Can't rob two adjacent houses. Maximize money robbed.
 *
 * Requirements:
 * - Use DP approach
 * - Can't rob adjacent houses
 * - Return maximum amount
 * - O(n) time, O(1) space possible
 *
 * Example:
 * rob([1,2,3,1]);      // 4 (rob house 1 and 3)
 * rob([2,7,9,3,1]);    // 12 (rob house 1, 3, 5)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(rob([1,2,3,1]) === 4, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(rob([2,7,9,3,1]) === 12, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(rob([5,3,4,11,2]) === 16, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
