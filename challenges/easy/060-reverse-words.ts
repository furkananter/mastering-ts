/**
 * CHALLENGE: Reverse Words in Sentence
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - String split
 * - Array reverse
 * - Join method
 *
 * Problem:
 * Write a function that reverses the order of words in a sentence.
 * Keep words themselves intact, just reverse their order.
 *
 * Requirements:
 * - Reverse word order (not letters within words)
 * - Preserve single spaces between words
 * - Trim extra spaces
 *
 * Example:
 * reverseWords("Hello World");            // "World Hello"
 * reverseWords("The quick brown fox");    // "fox brown quick The"
 * reverseWords("a");                      // "a"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function reverseWords(str: string): string {
  return "";
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(reverseWords("Hello World") === "World Hello", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(reverseWords("The quick brown fox") === "fox brown quick The", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(reverseWords("a") === "a", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
