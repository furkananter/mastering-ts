/**
 * CHALLENGE: Get Unique Values with Set
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Set constructor
 * - Array.from() or spread operator
 * - Set uniqueness property
 *
 * Problem:
 * Write a function that returns an array of unique values from an input array.
 * This is similar to challenge #006 but emphasizes using Set.
 *
 * Requirements:
 * - Use Set for uniqueness
 * - Return as array
 * - Maintain insertion order
 *
 * Example:
 * uniqueValues([1, 2, 2, 3, 3, 3]);    // [1, 2, 3]
 * uniqueValues(['a', 'b', 'a']);       // ['a', 'b']
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = uniqueValues([1, 2, 2, 3, 3, 3]);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 2, 3]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = uniqueValues(['a', 'b', 'a']);
  console.assert(JSON.stringify(result2) === JSON.stringify(['a', 'b']), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
