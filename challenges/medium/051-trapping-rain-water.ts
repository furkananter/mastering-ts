/**
 * CHALLENGE: Trapping Rain Water
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Two pointers
 * - Dynamic programming (alternative)
 * - Max left/right heights
 * - Water calculation
 *
 * Problem:
 * Given elevation map, calculate how much water can be trapped after raining.
 *
 * Requirements:
 * - Calculate trapped water units
 * - Use two pointers or DP
 * - Track max heights from both sides
 * - Return total water trapped
 *
 * Example:
 * trap([0,1,0,2,1,0,1,3,2,1,2,1]);  // 6
 * trap([4,2,0,3,2,5]);              // 9
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(trap([0,1,0,2,1,0,1,3,2,1,2,1]) === 6, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(trap([4,2,0,3,2,5]) === 9, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(trap([1,2,3,4,5]) === 0, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
