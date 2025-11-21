/**
 * CHALLENGE: Valid Parentheses
 *
 * Difficulty: Easy
 * Estimated Time: 6 minutes
 *
 * Topics to know:
 * - Stack data structure
 * - String iteration
 * - Matching pairs
 *
 * Problem:
 * Write a function that determines if a string containing only
 * parentheses (), brackets [], and braces {} is valid.
 * Valid means every opening bracket has a corresponding closing bracket
 * in the correct order.
 *
 * Requirements:
 * - Must close in correct order
 * - Every opener needs a closer
 * - Return true if valid, false otherwise
 *
 * Example:
 * isValidParentheses("()");          // true
 * isValidParentheses("()[]{}");      // true
 * isValidParentheses("(]");          // false
 * isValidParentheses("([)]");        // false
 * isValidParentheses("{[]}");        // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function isValidParentheses(s: string): boolean {
  return false;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isValidParentheses("()") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isValidParentheses("()[]{}") === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isValidParentheses("(]") === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(isValidParentheses("([)]") === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.assert(isValidParentheses("{[]}") === true, "❌ Test 5 failed");
  console.log("✅ Test 5 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
