/**
 * CHALLENGE: Generate Parentheses
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Backtracking
 * - Recursion
 * - Valid parentheses rules
 * - String generation
 *
 * Problem:
 * Generate all combinations of n pairs of well-formed parentheses.
 *
 * Requirements:
 * - Use backtracking
 * - Track open and close counts
 * - Only add ')' if more '(' exist
 * - Return all valid combinations
 *
 * Example:
 * generateParenthesis(3);
 * // ["((()))", "(()())", "(())()", "()(())", "()()()"]
 * generateParenthesis(1);
 * // ["()"]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = generateParenthesis(3);
  console.assert(result1.length === 5, "❌ Test 1 failed: should have 5 combinations");
  console.log("✅ Test 1 passed");

  const result2 = generateParenthesis(1);
  console.assert(JSON.stringify(result2) === JSON.stringify(["()"]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
