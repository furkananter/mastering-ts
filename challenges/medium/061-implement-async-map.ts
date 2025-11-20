/**
 * CHALLENGE: Async Array Map
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Async/await
 * - Promise.all
 * - Higher-order functions
 * - Array transformation
 *
 * Problem:
 * Implement an async version of Array.map that waits for all
 * async operations to complete. Return results in order.
 *
 * Requirements:
 * - Accept array and async callback
 * - Run all callbacks in parallel
 * - Wait for all to complete
 * - Preserve order in results
 *
 * Example:
 * await asyncMap([1, 2, 3], async (n) => n * 2);
 * // [2, 4, 6]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

async function runTests(): Promise<void> {
  console.log("Running tests...\n");

  const delay = (ms: number, val: number) =>
    new Promise(r => setTimeout(() => r(val), ms));

  const result1 = await asyncMap([1, 2, 3], async (n) => {
    await delay(10, n);
    return n * 2;
  });

  console.assert(JSON.stringify(result1) === JSON.stringify([2, 4, 6]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = await asyncMap([], async (n: number) => n);
  console.assert(JSON.stringify(result2) === JSON.stringify([]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
