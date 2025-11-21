/**
 * CHALLENGE: Rotate Matrix 90 Degrees
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Matrix manipulation
 * - In-place rotation
 * - Transpose + reverse
 * - 2D array indexing
 *
 * Problem:
 * Rotate an n×n matrix 90 degrees clockwise in place.
 *
 * Requirements:
 * - Rotate in place (modify original)
 * - 90 degrees clockwise
 * - O(n²) time, O(1) space
 * - Can use transpose + reverse approach
 *
 * Example:
 * rotateMatrix([
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ]);
 * // Result:
 * // [7, 4, 1],
 * // [8, 5, 2],
 * // [9, 6, 3]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function rotateMatrix<T>(matrix: T[][]): void {
  // TODO: Implement matrix rotation in place
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

  rotateMatrix(matrix1);
  const expected1 = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ];

  console.assert(JSON.stringify(matrix1) === JSON.stringify(expected1), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const matrix2 = [[1, 2], [3, 4]];
  rotateMatrix(matrix2);
  const expected2 = [[3, 1], [4, 2]];

  console.assert(JSON.stringify(matrix2) === JSON.stringify(expected2), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
