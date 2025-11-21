/**
 * CHALLENGE: Get Nested Property
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Nested object access
 * - Optional chaining or manual checks
 * - String split for path parsing
 *
 * Problem:
 * Write a function that safely gets a nested property from an object
 * using a string path like "a.b.c".
 * Return undefined if any part of the path doesn't exist.
 *
 * Requirements:
 * - Accept object and path string
 * - Navigate nested properties
 * - Return undefined for missing paths
 *
 * Example:
 * const obj = {a: {b: {c: 42}}};
 * getNested(obj, 'a.b.c');     // 42
 * getNested(obj, 'a.b');       // {c: 42}
 * getNested(obj, 'a.x.y');     // undefined
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function getNested(obj: any, path: string): any {
  return undefined;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const obj = {a: {b: {c: 42}}, x: 10};

  console.assert(getNested(obj, 'a.b.c') === 42, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(JSON.stringify(getNested(obj, 'a.b')) === JSON.stringify({c: 42}), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(getNested(obj, 'a.x.y') === undefined, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(getNested(obj, 'x') === 10, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
