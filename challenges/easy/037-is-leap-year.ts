/**
 * CHALLENGE: Check Leap Year
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Modulo operator
 * - Logical operators (&&, ||)
 * - Leap year rules
 *
 * Problem:
 * Write a function that determines if a given year is a leap year.
 * Leap year rules:
 * - Divisible by 4 AND
 * - If divisible by 100, must also be divisible by 400
 *
 * Requirements:
 * - Return true if leap year
 * - Follow leap year rules correctly
 * - Handle century years (1900, 2000, etc.)
 *
 * Example:
 * isLeapYear(2020);    // true (divisible by 4)
 * isLeapYear(1900);    // false (divisible by 100 but not 400)
 * isLeapYear(2000);    // true (divisible by 400)
 * isLeapYear(2019);    // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isLeapYear(2020) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isLeapYear(1900) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isLeapYear(2000) === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(isLeapYear(2019) === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
