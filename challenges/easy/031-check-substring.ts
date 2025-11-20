/**
 * CHALLENGE: Check if Substring Exists
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - String includes method or indexOf
 * - Boolean return values
 * - Case sensitivity
 *
 * Problem:
 * Write a function that checks if a substring exists within a string.
 * The check should be case-sensitive.
 *
 * Requirements:
 * - Return true if substring is found
 * - Case sensitive
 * - Empty substring returns true
 *
 * Example:
 * hasSubstring("Hello World", "World");    // true
 * hasSubstring("JavaScript", "Python");    // false
 * hasSubstring("test", "");                // true
 * hasSubstring("Hi", "hi");                // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(hasSubstring("Hello World", "World") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(hasSubstring("JavaScript", "Python") === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(hasSubstring("test", "") === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(hasSubstring("Hi", "hi") === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
