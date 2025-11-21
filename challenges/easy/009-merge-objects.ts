/**
 * CHALLENGE: Merge Two Objects
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Object spread operator
 * - Object.assign()
 * - Property overwriting
 *
 * Problem:
 * Write a function that merges two objects into one.
 * If both objects have the same key, the second object's value should take precedence.
 *
 * Requirements:
 * - Combine all properties from both objects
 * - Second object's values override first object's values for duplicate keys
 * - Return a new object (don't modify originals)
 *
 * Example:
 * mergeObjects({a: 1, b: 2}, {b: 3, c: 4});  // {a: 1, b: 3, c: 4}
 * mergeObjects({x: 1}, {y: 2});              // {x: 1, y: 2}
 * mergeObjects({}, {a: 1});                  // {a: 1}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// TypeScript Implementation Template:
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  // Your implementation here
  return {} as T & U;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = mergeObjects({a: 1, b: 2}, {b: 3, c: 4});
  console.assert(JSON.stringify(result1) === JSON.stringify({a: 1, b: 3, c: 4}), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = mergeObjects({x: 1}, {y: 2});
  console.assert(JSON.stringify(result2) === JSON.stringify({x: 1, y: 2}), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = mergeObjects({}, {a: 1});
  console.assert(JSON.stringify(result3) === JSON.stringify({a: 1}), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  const result4 = mergeObjects({name: "Alice"}, {name: "Bob", age: 30});
  console.assert(JSON.stringify(result4) === JSON.stringify({name: "Bob", age: 30}), "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
