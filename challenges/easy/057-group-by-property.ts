/**
 * CHALLENGE: Group Objects by Property
 *
 * Difficulty: Easy
 * Estimated Time: 6 minutes
 *
 * Topics to know:
 * - Array reduce
 * - Object accumulation
 * - Dynamic property access
 *
 * Problem:
 * Write a function that groups an array of objects by a specified property.
 * Return an object where keys are property values and values are arrays of objects.
 *
 * Requirements:
 * - Group by specified property
 * - Return object with arrays as values
 * - Handle missing properties
 *
 * Example:
 * groupBy([{age: 20}, {age: 30}, {age: 20}], 'age')
 * // {20: [{age: 20}, {age: 20}], 30: [{age: 30}]}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const input1 = [{age: 20}, {age: 30}, {age: 20}];
  const result1 = groupBy(input1, 'age');
  console.assert(result1['20'].length === 2, "❌ Test 1 failed");
  console.assert(result1['30'].length === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const input2 = [{type: 'A', val: 1}, {type: 'B', val: 2}, {type: 'A', val: 3}];
  const result2 = groupBy(input2, 'type');
  console.assert(result2['A'].length === 2, "❌ Test 2 failed");
  console.assert(result2['B'].length === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
