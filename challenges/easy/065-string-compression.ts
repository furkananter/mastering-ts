/**
 * CHALLENGE: String Compression
 *
 * Difficulty: Easy
 * Estimated Time: 6 minutes
 *
 * Topics to know:
 * - String iteration
 * - Character counting
 * - String building
 *
 * Problem:
 * Write a function that performs basic string compression using the counts
 * of repeated characters. For example, "aabcccccaaa" becomes "a2b1c5a3".
 * If compressed string is not smaller, return original.
 *
 * Requirements:
 * - Count consecutive characters
 * - Format: char + count
 * - Return original if not shorter
 *
 * Example:
 * compress("aabcccccaaa");    // "a2b1c5a3"
 * compress("abc");            // "abc" (compressed would be "a1b1c1")
 * compress("aaa");            // "a3"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(compress("aabcccccaaa") === "a2b1c5a3", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(compress("abc") === "abc", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(compress("aaa") === "a3", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
