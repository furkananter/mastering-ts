/**
 * CHALLENGE: Query String to Object
 *
 * Difficulty: Easy
 * Estimated Time: 6 minutes
 *
 * Topics to know:
 * - String split
 * - Array reduce
 * - URLSearchParams (alternative)
 *
 * Problem:
 * Write a function that converts a URL query string to an object.
 * Parse key=value pairs separated by &.
 *
 * Requirements:
 * - Parse "key1=val1&key2=val2" format
 * - Return object with key-value pairs
 * - Handle empty string (return empty object)
 *
 * Example:
 * parseQuery("name=John&age=30");      // {name: 'John', age: '30'}
 * parseQuery("a=1&b=2&c=3");           // {a: '1', b: '2', c: '3'}
 * parseQuery("");                      // {}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function queryStringToObject(queryString: string): Record<string, string> {
  return {};
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = parseQuery("name=John&age=30");
  console.assert(JSON.stringify(result1) === JSON.stringify({name: 'John', age: '30'}), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = parseQuery("a=1&b=2&c=3");
  console.assert(result2.a === '1' && result2.b === '2' && result2.c === '3', "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = parseQuery("");
  console.assert(JSON.stringify(result3) === JSON.stringify({}), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
