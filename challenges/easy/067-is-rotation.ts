/**
 * CHALLENGE: Check String Rotation
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - String concatenation
 * - String includes method
 * - String rotation concept
 *
 * Problem:
 * Write a function that checks if one string is a rotation of another.
 * For example, "waterbottle" is a rotation of "erbottlewat".
 *
 * Requirements:
 * - Return true if s2 is rotation of s1
 * - Must be same length
 * - Use trick: s2 is substring of s1+s1
 *
 * Example:
 * isRotation("waterbottle", "erbottlewat");  // true
 * isRotation("hello", "llohe");              // true
 * isRotation("hello", "world");              // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isRotation("waterbottle", "erbottlewat") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isRotation("hello", "llohe") === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isRotation("hello", "world") === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
