/**
 * CHALLENGE: Convert CamelCase to snake_case
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Regular expressions
 * - String replace
 * - Case conversion
 *
 * Problem:
 * Write a function that converts a camelCase string to snake_case.
 *
 * Requirements:
 * - Convert capital letters to lowercase with underscore
 * - Handle consecutive capitals
 * - Don't add underscore at beginning
 *
 * Example:
 * toSnakeCase("camelCase");          // "camel_case"
 * toSnakeCase("myVariableName");     // "my_variable_name"
 * toSnakeCase("hello");              // "hello"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function camelToSnake(str: string): string {
  return "";
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(toSnakeCase("camelCase") === "camel_case", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(toSnakeCase("myVariableName") === "my_variable_name", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(toSnakeCase("hello") === "hello", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
