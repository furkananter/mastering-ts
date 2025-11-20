/**
 * CHALLENGE: Count Object Keys
 *
 * Difficulty: Easy
 * Estimated Time: 2 minutes
 *
 * Topics to know:
 * - Object.keys()
 * - Array length property
 * - Object properties
 *
 * Problem:
 * Write a function that returns the number of keys in an object.
 *
 * Requirements:
 * - Count only own properties (not inherited)
 * - Return 0 for empty objects
 * - Use Object.keys() or similar
 *
 * Example:
 * countKeys({a: 1, b: 2, c: 3});    // 3
 * countKeys({});                    // 0
 * countKeys({name: "Alice"});       // 1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(countKeys({a: 1, b: 2, c: 3}) === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(countKeys({}) === 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(countKeys({name: "Alice"}) === 1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
