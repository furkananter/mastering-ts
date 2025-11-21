/**
 * CHALLENGE: Frequency Counter
 *
 * Difficulty: Easy
 * Estimated Time: 5 minutes
 *
 * Topics to know:
 * - Object as hash map
 * - Array iteration
 * - Dynamic property access
 *
 * Problem:
 * Write a function that counts the frequency of each element in an array
 * and returns an object with elements as keys and their counts as values.
 *
 * Requirements:
 * - Return object with element: count pairs
 * - Handle any data type (convert to string for object keys)
 * - Empty array returns empty object
 *
 * Example:
 * frequencyCounter([1, 2, 2, 3, 3, 3]);    // {1: 1, 2: 2, 3: 3}
 * frequencyCounter(['a', 'b', 'a']);       // {a: 2, b: 1}
 * frequencyCounter([]);                    // {}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function frequencyCounter<T>(arr: T[]): Record<string, number> {
  return {};
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = frequencyCounter([1, 2, 2, 3, 3, 3]);
  console.assert(JSON.stringify(result1) === JSON.stringify({"1": 1, "2": 2, "3": 3}), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = frequencyCounter(['a', 'b', 'a']);
  console.assert(JSON.stringify(result2) === JSON.stringify({a: 2, b: 1}), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = frequencyCounter([]);
  console.assert(JSON.stringify(result3) === JSON.stringify({}), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
