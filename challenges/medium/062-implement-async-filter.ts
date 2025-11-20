/**
 * CHALLENGE: Async Array Filter
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Async/await
 * - Promise.all
 * - Filter logic
 * - Boolean predicates
 *
 * Problem:
 * Implement async version of Array.filter with async predicate function.
 *
 * Requirements:
 * - Accept array and async predicate
 * - Run all predicates in parallel
 * - Filter based on results
 * - Preserve order
 *
 * Example:
 * await asyncFilter([1, 2, 3, 4], async (n) => n % 2 === 0);
 * // [2, 4]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

async function runTests(): Promise<void> {
  console.log("Running tests...\n");

  const result1 = await asyncFilter([1, 2, 3, 4], async (n) => n % 2 === 0);
  console.assert(JSON.stringify(result1) === JSON.stringify([2, 4]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = await asyncFilter([1, 3, 5], async (n) => n % 2 === 0);
  console.assert(JSON.stringify(result2) === JSON.stringify([]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
