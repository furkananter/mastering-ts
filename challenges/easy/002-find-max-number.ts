/**
 * CHALLENGE: Find Maximum Number
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Array iteration
 * - Comparison operators
 * - Edge case handling
 *
 * Problem:
 * Write a function that finds and returns the maximum number in an array.
 * Handle edge cases like empty arrays and arrays with negative numbers.
 *
 * Requirements:
 * - Return the largest number in the array
 * - Return -Infinity for empty arrays
 * - Work with both positive and negative numbers
 *
 * Example:
 * findMax([1, 5, 3, 9, 2]);     // 9
 * findMax([-1, -5, -3]);        // -1
 * findMax([]);                  // -Infinity
 * findMax([42]);                // 42
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// TypeScript Implementation Template:
function findMax(arr: number[]): number {
  // Your implementation here
  return -Infinity;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  // Test 1: Positive numbers
  console.assert(findMax([1, 5, 3, 9, 2]) === 9, "❌ Test 1 failed");
  console.log("✅ Test 1 passed: Positive numbers");

  // Test 2: Negative numbers
  console.assert(findMax([-1, -5, -3]) === -1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed: Negative numbers");

  // Test 3: Mixed numbers
  console.assert(findMax([-10, 5, 0, 15, -3]) === 15, "❌ Test 3 failed");
  console.log("✅ Test 3 passed: Mixed numbers");

  // Test 4: Empty array
  console.assert(findMax([]) === -Infinity, "❌ Test 4 failed");
  console.log("✅ Test 4 passed: Empty array");

  // Test 5: Single element
  console.assert(findMax([42]) === 42, "❌ Test 5 failed");
  console.log("✅ Test 5 passed: Single element");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
