/**
 * CHALLENGE: Matrix Chain Multiplication (MCM)
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Dynamic Programming
 * - Optimal substructure
 * - Matrix multiplication cost
 * - Interval DP
 *
 * Problem:
 * Find minimum number of scalar multiplications needed to multiply
 * a chain of matrices. Given array of dimensions [p0, p1, ..., pn]
 * where matrix i has dimensions p[i-1] x p[i].
 *
 * Requirements:
 * - Use DP to find optimal parenthesization
 * - Return minimum multiplication cost
 * - O(n³) time complexity
 * - Handle chain of any length
 *
 * Example:
 * matrixChainOrder([10, 20, 30, 40, 30]);  // 30000
 * // Matrices: 10x20, 20x30, 30x40, 40x30
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(matrixChainOrder([10, 20, 30, 40, 30]) === 30000, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(matrixChainOrder([40, 20, 30, 10, 30]) === 26000, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(matrixChainOrder([10, 20, 30]) === 6000, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
