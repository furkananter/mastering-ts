/**
 * CHALLENGE: 2D Rolling Hash for Matrix Pattern Matching
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Rolling hash
 * - 2D pattern matching
 * - Hash functions for matrices
 * - Collision handling
 *
 * Problem:
 * Implement 2D rolling hash to find all occurrences of pattern matrix
 * in larger text matrix. Use polynomial hashing in both dimensions.
 *
 * Requirements:
 * - Compute 2D rolling hash
 * - Search pattern in text matrix
 * - Return list of top-left coordinates
 * - Handle hash collisions
 *
 * Example:
 * const text = [[1,2,3],[4,5,6],[7,8,9]];
 * const pattern = [[5,6],[8,9]];
 * findPattern2D(text, pattern);  // [[1,1]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const text = [[1,2,3],[4,5,6],[7,8,9]];
  const pattern = [[5,6],[8,9]];

  const result = findPattern2D(text, pattern);
  console.assert(JSON.stringify(result) === JSON.stringify([[1,1]]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = findPattern2D([[1,1,1],[1,1,1]], [[1,1],[1,1]]);
  console.assert(result2.length === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
