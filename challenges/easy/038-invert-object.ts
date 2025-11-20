/**
 * CHALLENGE: Invert Object (Swap Keys and Values)
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Object.entries()
 * - Array reduce
 * - Dynamic property assignment
 *
 * Problem:
 * Write a function that inverts an object by swapping its keys and values.
 *
 * Requirements:
 * - Keys become values, values become keys
 * - Assume values are unique
 * - Return new object
 *
 * Example:
 * invertObject({a: '1', b: '2'});    // {'1': 'a', '2': 'b'}
 * invertObject({name: 'Alice'});     // {Alice: 'name'}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = invertObject({a: '1', b: '2'});
  console.assert(JSON.stringify(result1) === JSON.stringify({'1': 'a', '2': 'b'}), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = invertObject({name: 'Alice'});
  console.assert(JSON.stringify(result2) === JSON.stringify({Alice: 'name'}), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
