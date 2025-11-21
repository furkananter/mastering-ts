/**
 * CHALLENGE: Container With Most Water
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Two pointers
 * - Greedy algorithm
 * - Area calculation
 * - Optimization
 *
 * Problem:
 * Given array of heights, find two lines that form container
 * with maximum water. Return the maximum area.
 * Area = min(height[left], height[right]) * (right - left)
 *
 * Requirements:
 * - Use two pointers (left, right)
 * - Move pointer with smaller height
 * - Calculate area at each step
 * - Return maximum area
 *
 * Example:
 * maxArea([1,8,6,2,5,4,8,3,7]);  // 49
 * maxArea([1,1]);                // 1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function maxArea(height: number[]): number {
  // TODO: Implement container with most water
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(maxArea([1,8,6,2,5,4,8,3,7]) === 49, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(maxArea([1,1]) === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(maxArea([4,3,2,1,4]) === 16, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
