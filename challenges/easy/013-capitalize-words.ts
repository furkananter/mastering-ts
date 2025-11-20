/**
 * CHALLENGE: Capitalize Words (Title Case)
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - String methods (split, join)
 * - Array map
 * - String case conversion
 *
 * Problem:
 * Write a function that converts a string to title case.
 * Each word should start with an uppercase letter, followed by lowercase letters.
 *
 * Requirements:
 * - Capitalize first letter of each word
 * - Lowercase remaining letters in each word
 * - Preserve spaces between words
 *
 * Example:
 * titleCase("hello world");           // "Hello World"
 * titleCase("javaScript is AWESOME"); // "Javascript Is Awesome"
 * titleCase("i love coding");         // "I Love Coding"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(titleCase("hello world") === "Hello World", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(titleCase("javaScript is AWESOME") === "Javascript Is Awesome", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(titleCase("i love coding") === "I Love Coding", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(titleCase("a") === "A", "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
