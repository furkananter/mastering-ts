/**
 * CHALLENGE: TypeScript Type Guards
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Type guards
 * - Type predicates (is keyword)
 * - Union types
 * - Type narrowing
 *
 * Problem:
 * Create type guard functions to check if a value is of a specific type.
 * Implement isString, isNumber, and isArray type guards.
 *
 * Requirements:
 * - Use TypeScript type predicate syntax (param is Type)
 * - Return boolean
 * - Enable type narrowing in TypeScript
 * - Handle edge cases
 *
 * Example:
 * function process(val: string | number) {
 *   if (isString(val)) {
 *     val.toUpperCase(); // TypeScript knows val is string
 *   }
 * }
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(isString("hello") === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(isString(123) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(isNumber(42) === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(isArray([1, 2, 3]) === true, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.assert(isArray("not array") === false, "❌ Test 5 failed");
  console.log("✅ Test 5 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
