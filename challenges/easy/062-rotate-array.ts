/**
 * CHALLENGE: Rotate Array
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Array slice
 * - Array concatenation
 * - Modulo for handling large rotations
 *
 * Problem:
 * Write a function that rotates an array to the right by k positions.
 * For example, rotating [1,2,3,4,5] by 2 gives [4,5,1,2,3].
 *
 * Requirements:
 * - Rotate right by k positions
 * - Handle k > array.length using modulo
 * - Return new array (don't modify original)
 *
 * Example:
 * rotateArray([1, 2, 3, 4, 5], 2);    // [4, 5, 1, 2, 3]
 * rotateArray([1, 2, 3], 1);          // [3, 1, 2]
 * rotateArray([1, 2], 0);             // [1, 2]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function rotateArray<T>(arr: T[], k: number): T[] {
  return [];
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = rotateArray([1, 2, 3, 4, 5], 2);
  console.assert(JSON.stringify(result1) === JSON.stringify([4, 5, 1, 2, 3]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = rotateArray([1, 2, 3], 1);
  console.assert(JSON.stringify(result2) === JSON.stringify([3, 1, 2]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = rotateArray([1, 2], 0);
  console.assert(JSON.stringify(result3) === JSON.stringify([1, 2]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
