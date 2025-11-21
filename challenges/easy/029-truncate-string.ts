/**
 * CHALLENGE: Truncate String
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - String slice or substring
 * - String concatenation
 * - Conditional logic
 *
 * Problem:
 * Write a function that truncates a string to a specified length
 * and adds "..." at the end if it was truncated.
 * If the string is shorter than the max length, return it unchanged.
 *
 * Requirements:
 * - Truncate to maxLength characters
 * - Add "..." if truncated
 * - Don't add "..." if string fits
 *
 * Example:
 * truncate("Hello World", 5);        // "Hello..."
 * truncate("Hi", 10);                // "Hi"
 * truncate("JavaScript", 4);         // "Java..."
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function truncate(str: string, maxLength: number): string {
  return "";
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(truncate("Hello World", 5) === "Hello...", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(truncate("Hi", 10) === "Hi", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(truncate("JavaScript", 4) === "Java...", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
