/**
 * CHALLENGE: Promise.allSettled Implementation
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Promises
 * - Promise.allSettled behavior
 * - Async patterns
 * - Result objects
 *
 * Problem:
 * Implement Promise.allSettled which waits for all promises
 * to settle (resolve or reject) and returns an array of result objects.
 *
 * Requirements:
 * - Wait for all promises (don't short-circuit)
 * - Return array of {status, value/reason} objects
 * - status: "fulfilled" or "rejected"
 * - Maintain order
 *
 * Example:
 * const p1 = Promise.resolve(1);
 * const p2 = Promise.reject('error');
 * promiseAllSettled([p1, p2]);
 * // [{status: 'fulfilled', value: 1}, {status: 'rejected', reason: 'error'}]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

async function runTests(): Promise<void> {
  console.log("Running tests...\n");

  const p1 = Promise.resolve(1);
  const p2 = Promise.reject('error');
  const p3 = Promise.resolve(3);

  const results = await promiseAllSettled([p1, p2, p3]);

  console.assert(results[0].status === 'fulfilled' && results[0].value === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(results[1].status === 'rejected' && results[1].reason === 'error', "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(results[2].status === 'fulfilled' && results[2].value === 3, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
