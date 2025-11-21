/**
 * CHALLENGE: Spiral Matrix Traversal
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Matrix traversal
 * - Direction management
 * - Boundary tracking
 * - 2D arrays
 *
 * Problem:
 * Traverse a matrix in spiral order (clockwise from outside to center).
 * Return elements as a flat array.
 *
 * Requirements:
 * - Start from top-left
 * - Go right, down, left, up (repeat)
 * - Track visited or use boundaries
 * - Return flat array
 *
 * Example:
 * spiralOrder([
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ]);  // [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function spiralOrder<T>(matrix: T[][]): T[] {
  // TODO: Implement spiral order traversal
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const result1 = spiralOrder(matrix1);
  console.assert(JSON.stringify(result1) === JSON.stringify([1,2,3,6,9,8,7,4,5]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const matrix2 = [
    [1, 2],
    [3, 4]
  ];
  const result2 = spiralOrder(matrix2);
  console.assert(JSON.stringify(result2) === JSON.stringify([1,2,4,3]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
