/**
 * CHALLENGE: Check Anagram
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - String manipulation
 * - Sorting or frequency counting
 * - Case handling
 *
 * Problem:
 * Write a function that checks if two strings are anagrams.
 * Anagrams are words that have the same characters in different orders.
 * Ignore case and spaces.
 *
 * Requirements:
 * - Return true if strings are anagrams
 * - Case insensitive
 * - Ignore spaces
 *
 * Example:
 * isAnagram("listen", "silent");     // true
 * isAnagram("hello", "world");       // false
 * isAnagram("Angel", "Glean");       // true
 * isAnagram("a b c", "cba");         // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isAnagram("listen", "silent") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isAnagram("hello", "world") === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isAnagram("Angel", "Glean") === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(isAnagram("a b c", "cba") === true, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.assert(isAnagram("", "") === true, "❌ Test 5 failed");
  console.log("✅ Test 5 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
