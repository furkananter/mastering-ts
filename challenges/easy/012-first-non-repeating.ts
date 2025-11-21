/**
 * CHALLENGE: First Non-Repeating Character
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Hash map / Object for counting
 * - String iteration
 * - Two-pass algorithm
 *
 * Problem:
 * Write a function that finds the first non-repeating character in a string.
 * Return null if all characters repeat.
 *
 * Requirements:
 * - Find the first character that appears only once
 * - Case sensitive ("A" and "a" are different)
 * - Return null if no non-repeating character exists
 *
 * Example:
 * firstNonRepeating("swiss");        // "w"
 * firstNonRepeating("aabbcc");       // null
 * firstNonRepeating("hello");        // "h"
 * firstNonRepeating("aabccdeeff");   // "b"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// TypeScript Implementation Template:
function firstNonRepeating(str: string): string | null {
  // Your implementation here
  return null;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(firstNonRepeating("swiss") === "w", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(firstNonRepeating("aabbcc") === null, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(firstNonRepeating("hello") === "h", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(firstNonRepeating("aabccdeeff") === "b", "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.assert(firstNonRepeating("") === null, "❌ Test 5 failed");
  console.log("✅ Test 5 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
