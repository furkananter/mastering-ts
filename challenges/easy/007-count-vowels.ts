/**
 * CHALLENGE: Count Vowels
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - String iteration
 * - Conditional logic
 * - Case handling
 *
 * Problem:
 * Write a function that counts the number of vowels (a, e, i, o, u)
 * in a given string. Count both uppercase and lowercase vowels.
 *
 * Requirements:
 * - Count all vowels: a, e, i, o, u (case insensitive)
 * - Return 0 for strings with no vowels
 * - Ignore special characters and numbers
 *
 * Example:
 * countVowels("hello");          // 2
 * countVowels("TypeScript");     // 3
 * countVowels("aeiou");          // 5
 * countVowels("xyz");            // 0
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(countVowels("hello") === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(countVowels("TypeScript") === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(countVowels("aeiou") === 5, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(countVowels("xyz") === 0, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.assert(countVowels("HELLO WORLD") === 3, "❌ Test 5 failed");
  console.log("✅ Test 5 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
