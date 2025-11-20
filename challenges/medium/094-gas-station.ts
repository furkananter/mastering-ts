/**
 * CHALLENGE: Gas Station
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Greedy algorithm
 * - Circular array
 * - Running total
 * - Single pass solution
 *
 * Problem:
 * Circular route with gas stations. gas[i] is gas at station i,
 * cost[i] is gas needed to go to next station.
 * Find starting station index or return -1.
 *
 * Requirements:
 * - Find starting station
 * - If solution exists, it's unique
 * - Use greedy one-pass approach
 * - Return index or -1
 *
 * Example:
 * canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]);  // 3
 * canCompleteCircuit([2,3,4], [3,4,3]);          // -1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]) === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(canCompleteCircuit([2,3,4], [3,4,3]) === -1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
