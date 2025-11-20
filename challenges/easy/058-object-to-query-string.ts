/**
 * CHALLENGE: Object to Query String
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Object.entries()
 * - Array map and join
 * - URL encoding (optional for basic version)
 *
 * Problem:
 * Write a function that converts an object to a URL query string.
 *
 * Requirements:
 * - Format: key1=value1&key2=value2
 * - Join with &
 * - Simple values only (no nested objects)
 *
 * Example:
 * toQueryString({name: 'John', age: 30});    // "name=John&age=30"
 * toQueryString({a: 1, b: 2, c: 3});         // "a=1&b=2&c=3"
 * toQueryString({});                         // ""
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(toQueryString({name: 'John', age: 30}) === "name=John&age=30", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = toQueryString({a: 1, b: 2, c: 3});
  console.assert(result2.includes("a=1") && result2.includes("b=2") && result2.includes("c=3"), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(toQueryString({}) === "", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
