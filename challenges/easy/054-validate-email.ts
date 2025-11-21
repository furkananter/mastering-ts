/**
 * CHALLENGE: Simple Email Validation
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Regular expressions
 * - String methods
 * - Pattern matching
 *
 * Problem:
 * Write a function that performs basic email validation.
 * Check for pattern: text@text.text
 * This is a simplified validation (not RFC compliant).
 *
 * Requirements:
 * - Must have exactly one @
 * - Must have at least one . after @
 * - Must have characters before @, between @ and ., and after .
 *
 * Example:
 * isValidEmail("test@example.com");      // true
 * isValidEmail("user@domain.co.uk");     // true
 * isValidEmail("invalid");               // false
 * isValidEmail("@example.com");          // false
 * isValidEmail("test@.com");             // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function isValidEmail(email: string): boolean {
  return false;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isValidEmail("test@example.com") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isValidEmail("user@domain.co.uk") === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isValidEmail("invalid") === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(isValidEmail("@example.com") === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.assert(isValidEmail("test@.com") === false, "❌ Test 5 failed");
  console.log("✅ Test 5 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
