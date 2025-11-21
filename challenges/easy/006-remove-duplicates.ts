/**
 * CHALLENGE: Remove Duplicates from Array
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Set data structure
 * - Array methods
 * - Spread operator or Array.from()
 *
 * Problem:
 * Write a function that removes duplicate values from an array
 * and returns a new array with only unique values.
 * Preserve the original order of first occurrence.
 *
 * Requirements:
 * - Return array with unique values only
 * - Maintain order of first occurrence
 * - Handle empty arrays
 *
 * Example:
 * removeDuplicates([1, 2, 2, 3, 4, 4, 5]);  // [1, 2, 3, 4, 5]
 * removeDuplicates([1, 1, 1]);              // [1]
 * removeDuplicates([]);                     // []
 * removeDuplicates([5, 4, 3, 2, 1]);        // [5, 4, 3, 2, 1]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// TypeScript Implementation Template:
function removeDuplicates<T>(arr: T[]): T[] {
  // Your implementation here
  return [];
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  // Test 1: Multiple duplicates
  const result1 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 2, 3, 4, 5]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed: Multiple duplicates");

  // Test 2: All same
  const result2 = removeDuplicates([1, 1, 1]);
  console.assert(JSON.stringify(result2) === JSON.stringify([1]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed: All same");

  // Test 3: No duplicates
  const result3 = removeDuplicates([5, 4, 3, 2, 1]);
  console.assert(JSON.stringify(result3) === JSON.stringify([5, 4, 3, 2, 1]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed: No duplicates");

  // Test 4: Empty array
  const result4 = removeDuplicates([]);
  console.assert(JSON.stringify(result4) === JSON.stringify([]), "❌ Test 4 failed");
  console.log("✅ Test 4 passed: Empty array");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
