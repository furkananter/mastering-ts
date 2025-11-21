/**
 * CHALLENGE: Check if All Values are True
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Array every method
 * - Boolean logic
 * - Callback functions
 *
 * Problem:
 * Write a function that checks if all values in an array are truthy.
 *
 * Requirements:
 * - Return true only if all elements are truthy
 * - Return true for empty array
 * - Use every() or loop
 *
 * Example:
 * allTrue([true, true, true]);       // true
 * allTrue([true, false, true]);      // false
 * allTrue([1, 2, 3]);                // true
 * allTrue([1, 0, 3]);                // false
 * allTrue([]);                       // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function allTrue(arr: any[]): boolean {
  return false;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(allTrue([true, true, true]) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(allTrue([true, false, true]) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(allTrue([1, 2, 3]) === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(allTrue([1, 0, 3]) === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.assert(allTrue([]) === true, "❌ Test 5 failed");
  console.log("✅ Test 5 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
