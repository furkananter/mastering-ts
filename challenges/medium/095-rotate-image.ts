/**
 * CHALLENGE: Rotate Image (Matrix) 90 Degrees
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Matrix manipulation
 * - Layer-by-layer rotation
 * - 4-way swap
 * - In-place algorithm
 *
 * Problem:
 * Rotate n×n matrix 90 degrees clockwise in place.
 * Use layer-by-layer approach or transpose+reverse.
 *
 * Requirements:
 * - Rotate in place
 * - 90 degrees clockwise
 * - O(n²) time, O(1) space
 * - Can use 4-way swap or transpose method
 *
 * Example:
 * rotate([[1,2,3],[4,5,6],[7,8,9]]);
 * // [[7,4,1],[8,5,2],[9,6,3]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const matrix = [[1,2,3],[4,5,6],[7,8,9]];
  rotate(matrix);

  const expected = [[7,4,1],[8,5,2],[9,6,3]];
  console.assert(JSON.stringify(matrix) === JSON.stringify(expected), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
