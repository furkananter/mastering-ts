/**
 * CHALLENGE: Letter Combinations of Phone Number
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Backtracking
 * - Recursion
 * - Cartesian product
 * - String combinations
 *
 * Problem:
 * Given digit string, return all letter combinations from phone keypad.
 * 2=abc, 3=def, 4=ghi, 5=jkl, 6=mno, 7=pqrs, 8=tuv, 9=wxyz
 *
 * Requirements:
 * - Use backtracking
 * - Generate all combinations
 * - Return array of strings
 * - Handle empty input
 *
 * Example:
 * letterCombinations("23");
 * // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = letterCombinations("23");
  console.assert(result1.length === 9, "❌ Test 1 failed: should have 9 combinations");
  console.log("✅ Test 1 passed");

  const result2 = letterCombinations("");
  console.assert(result2.length === 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = letterCombinations("2");
  console.assert(JSON.stringify(result3) === JSON.stringify(["a", "b", "c"]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
