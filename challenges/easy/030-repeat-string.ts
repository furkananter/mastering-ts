/**
 * CHALLENGE: Repeat String
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - String repeat method or loop
 * - String concatenation
 * - Edge cases (times = 0)
 *
 * Problem:
 * Write a function that repeats a string a specified number of times.
 *
 * Requirements:
 * - Repeat string n times
 * - Return empty string if times is 0 or negative
 * - Use repeat() method or loop
 *
 * Example:
 * repeatString("abc", 3);    // "abcabcabc"
 * repeatString("hi", 2);     // "hihi"
 * repeatString("x", 0);      // ""
 * repeatString("ok", 1);     // "ok"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(repeatString("abc", 3) === "abcabcabc", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(repeatString("hi", 2) === "hihi", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(repeatString("x", 0) === "", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(repeatString("ok", 1) === "ok", "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
