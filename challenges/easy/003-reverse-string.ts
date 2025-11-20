/**
 * CHALLENGE: Reverse String
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - String methods
 * - Array conversion
 * - Type safety
 *
 * Problem:
 * Write a function that reverses a given string.
 * Do not use the built-in reverse() method directly on the string.
 *
 * Requirements:
 * - Reverse the characters in the string
 * - Handle empty strings
 * - Preserve spaces and special characters
 *
 * Example:
 * reverseString("hello");        // "olleh"
 * reverseString("TypeScript");   // "tpircSepyT"
 * reverseString("");             // ""
 * reverseString("a b c");        // "c b a"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  // Test 1: Simple word
  console.assert(reverseString("hello") === "olleh", "❌ Test 1 failed");
  console.log("✅ Test 1 passed: Simple word");

  // Test 2: Mixed case
  console.assert(reverseString("TypeScript") === "tpircSepyT", "❌ Test 2 failed");
  console.log("✅ Test 2 passed: Mixed case");

  // Test 3: With spaces
  console.assert(reverseString("a b c") === "c b a", "❌ Test 3 failed");
  console.log("✅ Test 3 passed: With spaces");

  // Test 4: Empty string
  console.assert(reverseString("") === "", "❌ Test 4 failed");
  console.log("✅ Test 4 passed: Empty string");

  // Test 5: Special characters
  console.assert(reverseString("a!b@c#") === "#c@b!a", "❌ Test 5 failed");
  console.log("✅ Test 5 passed: Special characters");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
