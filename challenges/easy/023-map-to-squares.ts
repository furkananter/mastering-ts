/**
 * CHALLENGE: Map to Squares
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Array map method
 * - Arrow functions
 * - Exponentiation
 *
 * Problem:
 * Write a function that takes an array of numbers and returns
 * a new array with each number squared.
 *
 * Requirements:
 * - Return new array (don't modify original)
 * - Square each element (n * n or n ** 2)
 * - Handle negative numbers
 *
 * Example:
 * mapToSquares([1, 2, 3, 4]);     // [1, 4, 9, 16]
 * mapToSquares([-2, -1, 0, 1]);   // [4, 1, 0, 1]
 * mapToSquares([]);               // []
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function mapToSquares(numbers: number[]): number[] {
  return [];
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = mapToSquares([1, 2, 3, 4]);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 4, 9, 16]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = mapToSquares([-2, -1, 0, 1]);
  console.assert(JSON.stringify(result2) === JSON.stringify([4, 1, 0, 1]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = mapToSquares([]);
  console.assert(JSON.stringify(result3) === JSON.stringify([]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
