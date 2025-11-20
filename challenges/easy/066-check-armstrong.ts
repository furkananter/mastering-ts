/**
 * CHALLENGE: Check Armstrong Number
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Number to string conversion
 * - Power calculation
 * - Sum accumulation
 *
 * Problem:
 * An Armstrong number (also known as narcissistic number) is a number
 * that is equal to the sum of its own digits each raised to the power
 * of the number of digits.
 * For example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
 *
 * Requirements:
 * - Check if number is Armstrong number
 * - Works for any number of digits
 * - Return boolean
 *
 * Example:
 * isArmstrong(153);    // true (1³ + 5³ + 3³ = 153)
 * isArmstrong(9474);   // true (9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474)
 * isArmstrong(123);    // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isArmstrong(153) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isArmstrong(9474) === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isArmstrong(123) === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(isArmstrong(9) === true, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
