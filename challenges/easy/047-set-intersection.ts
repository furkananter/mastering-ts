/**
 * CHALLENGE: Set Intersection
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Set data structure
 * - Array filter
 * - Set has() method
 *
 * Problem:
 * Write a function that returns the intersection of two arrays
 * (elements present in both arrays).
 *
 * Requirements:
 * - Return only elements in both arrays
 * - Remove duplicates
 * - Return as array
 *
 * Example:
 * intersection([1, 2, 3], [2, 3, 4]);     // [2, 3]
 * intersection([1, 1, 2], [1, 3]);        // [1]
 * intersection([1, 2], [3, 4]);           // []
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function intersection<T>(arr1: T[], arr2: T[]): T[] {
  return [];
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = intersection([1, 2, 3], [2, 3, 4]);
  console.assert(JSON.stringify(result1.sort()) === JSON.stringify([2, 3]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = intersection([1, 1, 2], [1, 3]);
  console.assert(JSON.stringify(result2.sort()) === JSON.stringify([1]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = intersection([1, 2], [3, 4]);
  console.assert(JSON.stringify(result3) === JSON.stringify([]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
