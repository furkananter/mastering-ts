/**
 * CHALLENGE: Simple Phone Validation
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Regular expressions
 * - Phone number formats
 * - Pattern matching
 *
 * Problem:
 * Write a function that validates a simple phone number format.
 * Accept format: (XXX) XXX-XXXX or XXX-XXX-XXXX where X is a digit.
 *
 * Requirements:
 * - Match (123) 456-7890 format
 * - Match 123-456-7890 format
 * - Return true if valid, false otherwise
 *
 * Example:
 * isValidPhone("(123) 456-7890");    // true
 * isValidPhone("123-456-7890");      // true
 * isValidPhone("1234567890");        // false
 * isValidPhone("abc-def-ghij");      // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function isValidPhone(phone: string): boolean {
  return false;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isValidPhone("(123) 456-7890") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isValidPhone("123-456-7890") === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isValidPhone("1234567890") === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(isValidPhone("abc-def-ghij") === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
