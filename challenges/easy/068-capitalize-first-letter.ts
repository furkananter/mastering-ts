/**
 * CHALLENGE: Capitalize First Letter
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - String slice
 * - toUpperCase method
 * - String concatenation
 *
 * Problem:
 * Write a function that capitalizes only the first letter of a string
 * and makes the rest lowercase.
 *
 * Requirements:
 * - First letter uppercase
 * - Rest lowercase
 * - Handle empty strings
 *
 * Example:
 * capitalize("hello");        // "Hello"
 * capitalize("WORLD");        // "World"
 * capitalize("javaScript");   // "Javascript"
 * capitalize("");             // ""
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function capitalize(str: string): string {
  return "";
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(capitalize("hello") === "Hello", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(capitalize("WORLD") === "World", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(capitalize("javaScript") === "Javascript", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(capitalize("") === "", "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
