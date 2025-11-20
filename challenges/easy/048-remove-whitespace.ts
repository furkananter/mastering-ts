/**
 * CHALLENGE: Remove All Whitespace
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - String replace method
 * - Regular expressions
 * - Global flag (/g)
 *
 * Problem:
 * Write a function that removes all whitespace characters
 * (spaces, tabs, newlines) from a string.
 *
 * Requirements:
 * - Remove all whitespace
 * - Keep all other characters
 * - Use regex or string methods
 *
 * Example:
 * removeWhitespace("Hello World");        // "HelloWorld"
 * removeWhitespace("  a b c  ");          // "abc"
 * removeWhitespace("no spaces here");     // "nospaceshere"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(removeWhitespace("Hello World") === "HelloWorld", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(removeWhitespace("  a b c  ") === "abc", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(removeWhitespace("no-spaces-here") === "no-spaces-here", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
