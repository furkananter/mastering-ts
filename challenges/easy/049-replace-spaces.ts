/**
 * CHALLENGE: Replace Spaces with Character
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - String replace with regex
 * - Global flag
 * - String methods
 *
 * Problem:
 * Write a function that replaces all spaces in a string
 * with a specified character.
 *
 * Requirements:
 * - Replace all spaces (not just first)
 * - Use provided replacement character
 * - Handle multiple consecutive spaces
 *
 * Example:
 * replaceSpaces("Hello World", "-");       // "Hello-World"
 * replaceSpaces("a b c", "_");             // "a_b_c"
 * replaceSpaces("no spaces", "");          // "nospaces"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(replaceSpaces("Hello World", "-") === "Hello-World", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(replaceSpaces("a b c", "_") === "a_b_c", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(replaceSpaces("no spaces", "") === "nospaces", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
