/**
 * CHALLENGE: Check if Weekend
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Date object
 * - getDay() method
 * - Day numbering (0 = Sunday, 6 = Saturday)
 *
 * Problem:
 * Write a function that checks if a given date falls on a weekend
 * (Saturday or Sunday).
 *
 * Requirements:
 * - Return true for Saturday or Sunday
 * - Use Date.getDay() (0 = Sunday, 6 = Saturday)
 * - Accept Date object as parameter
 *
 * Example:
 * isWeekend(new Date('2024-01-06'));  // true (Saturday)
 * isWeekend(new Date('2024-01-07'));  // true (Sunday)
 * isWeekend(new Date('2024-01-08'));  // false (Monday)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function isWeekend(date: Date): boolean {
  return false;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isWeekend(new Date('2024-01-06')) === true, "❌ Test 1 failed: Saturday");
  console.log("✅ Test 1 passed");

  console.assert(isWeekend(new Date('2024-01-07')) === true, "❌ Test 2 failed: Sunday");
  console.log("✅ Test 2 passed");

  console.assert(isWeekend(new Date('2024-01-08')) === false, "❌ Test 3 failed: Monday");
  console.log("✅ Test 3 passed");

  console.assert(isWeekend(new Date('2024-01-10')) === false, "❌ Test 4 failed: Wednesday");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
