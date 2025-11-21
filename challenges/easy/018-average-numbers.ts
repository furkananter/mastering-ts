/**
 * CHALLENGE: Calculate Average
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Array reduce or loop
 * - Division operation
 * - Edge case handling
 *
 * Problem:
 * Write a function that calculates the average of numbers in an array.
 * Return 0 for empty arrays.
 *
 * Requirements:
 * - Calculate sum / length
 * - Return 0 for empty array
 * - Handle negative numbers
 *
 * Example:
 * average([1, 2, 3, 4, 5]);    // 3
 * average([10, 20]);           // 15
 * average([]);                 // 0
 * average([-5, 5]);            // 0
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function average(numbers: number[]): number {
  return 0;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(average([1, 2, 3, 4, 5]) === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(average([10, 20]) === 15, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(average([]) === 0, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(average([-5, 5]) === 0, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
