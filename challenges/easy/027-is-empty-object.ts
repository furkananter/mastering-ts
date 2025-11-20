/**
 * CHALLENGE: Check Empty Object
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Object.keys()
 * - Boolean logic
 * - Empty object check
 *
 * Problem:
 * Write a function that checks if an object is empty (has no properties).
 *
 * Requirements:
 * - Return true if object has no own properties
 * - Return false if it has any properties
 * - Use Object.keys() length check
 *
 * Example:
 * isEmpty({});              // true
 * isEmpty({a: 1});          // false
 * isEmpty({name: ""});      // false (property exists, even if empty)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isEmpty({}) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isEmpty({a: 1}) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isEmpty({name: ""}) === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
