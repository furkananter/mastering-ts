/**
 * CHALLENGE: Jump Game (Can Reach End)
 *
 * Difficulty: Medium
 * Estimated Time: 8 minutes
 *
 * Topics to know:
 * - Greedy algorithm
 * - Array traversal
 * - Max reach tracking
 * - Optimization
 *
 * Problem:
 * Given array where each element represents max jump length from that position,
 * determine if you can reach the last index starting from index 0.
 *
 * Requirements:
 * - Start at index 0
 * - Can jump 1 to nums[i] steps
 * - Return true if can reach last index
 * - Use greedy approach
 *
 * Example:
 * canJump([2,3,1,1,4]);   // true
 * canJump([3,2,1,0,4]);   // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function canJump(nums: number[]): boolean {
  // TODO: Implement jump game
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(canJump([2,3,1,1,4]) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(canJump([3,2,1,0,4]) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(canJump([0]) === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
