/**
 * CHALLENGE: Set Union
 *
 * Difficulty: Easy
 * Estimated Time: 3 minutes
 *
 * Topics to know:
 * - Set data structure
 * - Spread operator
 * - Set operations
 *
 * Problem:
 * Write a function that returns the union of two arrays (all unique elements).
 *
 * Requirements:
 * - Combine both arrays
 * - Remove duplicates
 * - Return as array
 *
 * Example:
 * union([1, 2, 3], [2, 3, 4]);     // [1, 2, 3, 4]
 * union([1, 1], [2, 2]);           // [1, 2]
 * union([], [1, 2]);               // [1, 2]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = union([1, 2, 3], [2, 3, 4]);
  console.assert(JSON.stringify(result1.sort()) === JSON.stringify([1, 2, 3, 4]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = union([1, 1], [2, 2]);
  console.assert(JSON.stringify(result2.sort()) === JSON.stringify([1, 2]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  const result3 = union([], [1, 2]);
  console.assert(JSON.stringify(result3.sort()) === JSON.stringify([1, 2]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
