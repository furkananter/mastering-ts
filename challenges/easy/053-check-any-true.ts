/**
 * CHALLENGE: Check if Any Value is True
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Array some method
 * - Boolean logic
 * - Truthy/falsy values
 *
 * Problem:
 * Write a function that checks if at least one value in an array is truthy.
 *
 * Requirements:
 * - Return true if any element is truthy
 * - Return false for empty array
 * - Use some() or loop
 *
 * Example:
 * anyTrue([false, false, true]);     // true
 * anyTrue([false, false, false]);    // false
 * anyTrue([0, 1, 0]);                // true
 * anyTrue([]);                       // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(anyTrue([false, false, true]) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(anyTrue([false, false, false]) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(anyTrue([0, 1, 0]) === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(anyTrue([]) === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
