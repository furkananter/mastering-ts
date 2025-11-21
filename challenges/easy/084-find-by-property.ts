/**
 * CHALLENGE: Find Object by Property
 *
 * Difficulty: Easy
 * Estimated Time: 4 minutes
 *
 * Topics to know:
 * - Array find method
 * - Object property access
 * - Predicate functions
 *
 * Problem:
 * Write a function that finds the first object in an array
 * where a specific property matches a given value.
 *
 * Requirements:
 * - Search array of objects
 * - Match by property and value
 * - Return first match or undefined
 *
 * Example:
 * const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
 * findByProperty(users, 'id', 2);      // {id: 2, name: 'Bob'}
 * findByProperty(users, 'name', 'Eve'); // undefined
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function findByProperty<T extends Record<string, any>>(arr: T[], key: keyof T, value: any): T | undefined {
  return undefined;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
  ];

  const result1 = findByProperty(users, 'id', 2);
  console.assert(JSON.stringify(result1) === JSON.stringify({id: 2, name: 'Bob'}), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = findByProperty(users, 'name', 'Alice');
  console.assert(JSON.stringify(result2) === JSON.stringify({id: 1, name: 'Alice'}), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(findByProperty(users, 'name', 'Eve') === undefined, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
