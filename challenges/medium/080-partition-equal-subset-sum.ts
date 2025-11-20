/**
 * CHALLENGE: Partition Equal Subset Sum
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Dynamic programming
 * - Subset sum problem
 * - Boolean DP
 * - Knapsack variant
 *
 * Problem:
 * Determine if array can be partitioned into two subsets with equal sum.
 * Use DP similar to 0/1 knapsack.
 *
 * Requirements:
 * - Check if can partition into equal sums
 * - Use DP approach
 * - Target sum = total / 2
 * - Return boolean
 *
 * Example:
 * canPartition([1,5,11,5]);    // true (1+5+5=11)
 * canPartition([1,2,3,5]);     // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(canPartition([1,5,11,5]) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(canPartition([1,2,3,5]) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(canPartition([1,2,5]) === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
