/**
 * CHALLENGE: Count Words
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - String split method
 * - Array filtering
 * - Handling multiple spaces
 *
 * Problem:
 * Write a function that counts the number of words in a string.
 * Words are separated by spaces. Handle multiple consecutive spaces.
 *
 * Requirements:
 * - Count words separated by spaces
 * - Ignore extra spaces (consecutive spaces)
 * - Return 0 for empty or whitespace-only strings
 *
 * Example:
 * countWords("Hello World");         // 2
 * countWords("  Hi  there  ");       // 2
 * countWords("JavaScript");          // 1
 * countWords("   ");                 // 0
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(countWords("Hello World") === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(countWords("  Hi  there  ") === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(countWords("JavaScript") === 1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(countWords("   ") === 0, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
