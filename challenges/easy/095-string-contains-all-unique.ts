/**
 * CHALLENGE: Check if String Has All Unique Characters
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Set for uniqueness
 * - String length comparison
 * - Character tracking
 *
 * Problem:
 * Write a function that checks if a string has all unique characters.
 * Return true if no character repeats.
 *
 * Requirements:
 * - Check for duplicate characters
 * - Case sensitive
 * - Use Set for O(n) solution
 *
 * Example:
 * hasAllUnique("abcdef");     // true
 * hasAllUnique("hello");      // false (l repeats)
 * hasAllUnique("");           // true
 * hasAllUnique("aA");         // true (case sensitive)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function hasAllUniqueChars(str: string): boolean {
  return false;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(hasAllUnique("abcdef") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(hasAllUnique("hello") === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(hasAllUnique("") === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(hasAllUnique("aA") === true, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
