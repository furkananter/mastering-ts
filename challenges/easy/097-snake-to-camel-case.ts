/**
 * CHALLENGE: Convert snake_case to camelCase
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - String replace with regex
 * - Callback functions in replace
 * - Case conversion
 *
 * Problem:
 * Write a function that converts a snake_case string to camelCase.
 *
 * Requirements:
 * - Remove underscores
 * - Capitalize letter after underscore
 * - First letter stays lowercase
 *
 * Example:
 * toCamelCase("snake_case");           // "snakeCase"
 * toCamelCase("my_variable_name");     // "myVariableName"
 * toCamelCase("hello");                // "hello"
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function snakeToCamel(str: string): string {
  return "";
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(toCamelCase("snake_case") === "snakeCase", "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(toCamelCase("my_variable_name") === "myVariableName", "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(toCamelCase("hello") === "hello", "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
