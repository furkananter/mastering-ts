/**
 * CHALLENGE: Sum Array Elements
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Array methods (reduce, forEach, or loops)
 * - Accumulator pattern
 * - Type annotations
 *
 * Problem:
 * Write a function that calculates the sum of all numbers in an array.
 *
 * Requirements:
 * - Return the total sum of all elements
 * - Return 0 for empty arrays
 * - Handle negative numbers
 *
 * Example:
 * sumArray([1, 2, 3, 4]);       // 10
 * sumArray([-1, -2, 3]);        // 0
 * sumArray([]);                 // 0
 * sumArray([100]);              // 100
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  // Test 1: Positive numbers
  console.assert(sumArray([1, 2, 3, 4]) === 10, "❌ Test 1 failed");
  console.log("✅ Test 1 passed: Positive numbers");

  // Test 2: Mixed numbers
  console.assert(sumArray([-1, -2, 3]) === 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed: Mixed numbers");

  // Test 3: Empty array
  console.assert(sumArray([]) === 0, "❌ Test 3 failed");
  console.log("✅ Test 3 passed: Empty array");

  // Test 4: Single element
  console.assert(sumArray([100]) === 100, "❌ Test 4 failed");
  console.log("✅ Test 4 passed: Single element");

  // Test 5: All negative
  console.assert(sumArray([-5, -10, -15]) === -30, "❌ Test 5 failed");
  console.log("✅ Test 5 passed: All negative");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
