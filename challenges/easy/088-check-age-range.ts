/**
 * CHALLENGE: Check Age Range
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Comparison operators
 * - Logical AND
 * - Range checking
 *
 * Problem:
 * Write a function that checks if a person's age falls within
 * a valid range for a specific category (e.g., "teen", "adult", "senior").
 *
 * Requirements:
 * - teen: 13-19
 * - adult: 20-64
 * - senior: 65+
 * - Return boolean
 *
 * Example:
 * isAgeInCategory(15, 'teen');      // true
 * isAgeInCategory(25, 'adult');     // true
 * isAgeInCategory(70, 'senior');    // true
 * isAgeInCategory(25, 'teen');      // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function isAdult(age: number): boolean {
  return false;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isAgeInCategory(15, 'teen') === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isAgeInCategory(25, 'adult') === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isAgeInCategory(70, 'senior') === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(isAgeInCategory(25, 'teen') === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
