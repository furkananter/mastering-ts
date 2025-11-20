/**
 * CHALLENGE: Word Break (Dynamic Programming)
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Dynamic programming
 * - String algorithms
 * - Dictionary lookup
 * - Boolean DP table
 *
 * Problem:
 * Determine if a string can be segmented into words from a dictionary.
 * Use dynamic programming.
 *
 * Requirements:
 * - Use DP approach
 * - Check if s can be split into dictionary words
 * - Words can be reused
 * - Return boolean
 *
 * Example:
 * wordBreak("leetcode", ["leet", "code"]);        // true
 * wordBreak("applepenapple", ["apple", "pen"]);   // true
 * wordBreak("catsandog", ["cats", "dog", "and"]); // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(wordBreak("leetcode", ["leet", "code"]) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(wordBreak("applepenapple", ["apple", "pen"]) === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]) === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
