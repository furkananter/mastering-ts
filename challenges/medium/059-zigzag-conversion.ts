/**
 * CHALLENGE: ZigZag String Conversion
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - String manipulation
 * - Row simulation
 * - Direction tracking
 * - Pattern recognition
 *
 * Problem:
 * Convert string written in zigzag pattern on given number of rows.
 * Read line by line to get converted string.
 *
 * Requirements:
 * - Simulate zigzag writing
 * - Track current row and direction
 * - Concatenate rows to get result
 * - Handle edge cases (numRows = 1)
 *
 * Example:
 * convert("PAYPALISHIRING", 3);
 * // "PAHNAPLSIIGYIR"
 * // P   A   H   N
 * // A P L S I I G
 * // Y   I   R
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(convert("A", 1) === "A", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
