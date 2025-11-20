/**
 * CHALLENGE: XOR Operation
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - XOR logical operation
 * - Boolean logic
 * - Truth tables
 *
 * Problem:
 * Write a function that performs an XOR (exclusive or) operation
 * on two boolean values. XOR returns true if exactly one input is true.
 *
 * Requirements:
 * - Return true if exactly one is true
 * - Return false if both true or both false
 * - Implement without using ^ operator
 *
 * Example:
 * xor(true, false);     // true
 * xor(false, true);     // true
 * xor(true, true);      // false
 * xor(false, false);    // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(xor(true, false) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(xor(false, true) === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(xor(true, true) === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(xor(false, false) === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
