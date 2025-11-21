/**
 * CHALLENGE: Remove Duplicate Characters
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Set for uniqueness
 * - String to array conversion
 * - Join method
 *
 * Problem:
 * Write a function that removes duplicate characters from a string,
 * keeping only the first occurrence of each character.
 *
 * Requirements:
 * - Keep first occurrence only
 * - Maintain original order
 * - Case sensitive
 *
 * Example:
 * removeDuplicateChars("hello");       // "helo"
 * removeDuplicateChars("aabbcc");      // "abc"
 * removeDuplicateChars("abcABC");      // "abcABC"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function removeDuplicateChars(str: string): string {
  return "";
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(removeDuplicateChars("hello") === "helo", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(removeDuplicateChars("aabbcc") === "abc", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(removeDuplicateChars("abcABC") === "abcABC", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
