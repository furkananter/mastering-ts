/**
 * CHALLENGE: Array Difference
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Array filter
 * - Array includes or Set
 * - Set operations
 *
 * Problem:
 * Write a function that returns elements from the first array
 * that are not in the second array.
 *
 * Requirements:
 * - Return elements in arr1 but not in arr2
 * - Maintain order from arr1
 * - Remove duplicates in result
 *
 * Example:
 * difference([1, 2, 3, 4], [2, 4]);      // [1, 3]
 * difference([1, 2, 2, 3], [2]);         // [1, 3]
 * difference([1, 2], [3, 4]);            // [1, 2]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function difference<T>(arr1: T[], arr2: T[]): T[] {
  return [];
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = difference([1, 2, 3, 4], [2, 4]);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 3]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = difference([1, 2, 2, 3], [2]);
  console.assert(JSON.stringify(result2) === JSON.stringify([1, 3]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = difference([1, 2], [3, 4]);
  console.assert(JSON.stringify(result3) === JSON.stringify([1, 2]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
