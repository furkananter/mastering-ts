/**
 * CHALLENGE: Find Longest Word
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - String split method
 * - Array iteration
 * - String length property
 *
 * Problem:
 * Write a function that finds the longest word in a sentence.
 * If multiple words have the same length, return the first one.
 *
 * Requirements:
 * - Return the longest word as a string
 * - If tie, return first occurrence
 * - Handle empty strings (return empty string)
 *
 * Example:
 * longestWord("The quick brown fox");    // "quick"
 * longestWord("Hello world");            // "Hello"
 * longestWord("a");                      // "a"
 * longestWord("");                       // ""
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(longestWord("The quick brown fox") === "quick", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(longestWord("Hello world") === "Hello", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(longestWord("a") === "a", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(longestWord("") === "", "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
