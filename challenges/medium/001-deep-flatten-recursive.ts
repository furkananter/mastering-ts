/**
 * CHALLENGE: Deep Flatten Array (Recursive)
 *
 * Difficulty: Medium
 * Estimated Time: 8 minutes
 *
 * Topics to know:
 * - Recursion
 * - Array.isArray()
 * - Nested data structures
 * - Base cases
 *
 * Problem:
 * Write a function that flattens a deeply nested array of any depth.
 * Use recursion to handle arbitrary nesting levels.
 *
 * Requirements:
 * - Flatten all levels (not just one)
 * - Use recursion
 * - Handle empty arrays
 * - Preserve order
 *
 * Example:
 * deepFlatten([1, [2, [3, [4]], 5]]);           // [1, 2, 3, 4, 5]
 * deepFlatten([[1, 2], [3, [4, [5, 6]]]]);      // [1, 2, 3, 4, 5, 6]
 * deepFlatten([1, [], [2, [[], 3]]]);           // [1, 2, 3]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type NestedArray<T> = T | NestedArray<T>[];

function deepFlatten<T>(arr: NestedArray<T>[]): T[] {
  // TODO: Implement deep flatten using recursion
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = deepFlatten([1, [2, [3, [4]], 5]]);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 2, 3, 4, 5]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = deepFlatten([[1, 2], [3, [4, [5, 6]]]]);
  console.assert(JSON.stringify(result2) === JSON.stringify([1, 2, 3, 4, 5, 6]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = deepFlatten([1, [], [2, [[], 3]]]);
  console.assert(JSON.stringify(result3) === JSON.stringify([1, 2, 3]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
