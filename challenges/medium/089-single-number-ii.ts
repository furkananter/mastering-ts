/**
 * CHALLENGE: Single Number II
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Bit manipulation
 * - Counting bits
 * - Modulo 3 logic
 * - XOR properties
 *
 * Problem:
 * Every element appears three times except one which appears once.
 * Find the single element. Use O(1) space and bit manipulation.
 *
 * Requirements:
 * - Linear time O(n)
 * - Constant space O(1)
 * - Use bit manipulation
 * - Count bits at each position mod 3
 *
 * Example:
 * singleNumber([2,2,3,2]);          // 3
 * singleNumber([0,1,0,1,0,1,99]);   // 99
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function singleNumber(nums: number[]): number {
  // TODO: Implement single number II using bit manipulation
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(singleNumber([2,2,3,2]) === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(singleNumber([0,1,0,1,0,1,99]) === 99, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
