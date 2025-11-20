/**
 * CHALLENGE: Set Difference
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Set operations
 * - Filter with Set.has()
 * - Set difference concept
 *
 * Problem:
 * Write a function that returns the difference between two arrays.
 * Return elements in first array that are NOT in the second array.
 * (This is similar to #045 but emphasizes Set operations)
 *
 * Requirements:
 * - Use Set for O(n) performance
 * - Return unique values
 * - Maintain order from first array
 *
 * Example:
 * setDifference([1, 2, 3, 4], [2, 4]);    // [1, 3]
 * setDifference([1, 2, 2, 3], [2]);       // [1, 3]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = setDifference([1, 2, 3, 4], [2, 4]);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 3]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = setDifference([1, 2, 2, 3], [2]);
  console.assert(JSON.stringify(result2) === JSON.stringify([1, 3]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
