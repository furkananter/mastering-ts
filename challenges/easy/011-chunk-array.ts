/**
 * CHALLENGE: Chunk Array
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Array manipulation
 * - Slice method
 * - Loop patterns
 *
 * Problem:
 * Write a function that splits an array into chunks of a specified size.
 * The last chunk may contain fewer elements if the array doesn't divide evenly.
 *
 * Requirements:
 * - Split array into sub-arrays of given size
 * - Last chunk may be smaller
 * - Return empty array for empty input
 *
 * Example:
 * chunk([1, 2, 3, 4, 5], 2);     // [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4], 2);        // [[1, 2], [3, 4]]
 * chunk([1, 2, 3], 5);           // [[1, 2, 3]]
 * chunk([], 2);                  // []
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// TypeScript Implementation Template:
function chunk<T>(arr: T[], size: number): T[][] {
  // Your implementation here
  return [];
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = chunk([1, 2, 3, 4, 5], 2);
  console.assert(JSON.stringify(result1) === JSON.stringify([[1, 2], [3, 4], [5]]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = chunk([1, 2, 3, 4], 2);
  console.assert(JSON.stringify(result2) === JSON.stringify([[1, 2], [3, 4]]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = chunk([1, 2, 3], 5);
  console.assert(JSON.stringify(result3) === JSON.stringify([[1, 2, 3]]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  const result4 = chunk([], 2);
  console.assert(JSON.stringify(result4) === JSON.stringify([]), "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
