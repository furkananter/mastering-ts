/**
 * CHALLENGE: Promise.all Implementation
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Promises
 * - Async/await patterns
 * - Promise.all behavior
 * - Error handling
 *
 * Problem:
 * Implement your own version of Promise.all.
 * It should resolve when all promises resolve, or reject when any promise rejects.
 *
 * Requirements:
 * - Accept array of promises
 * - Return promise that resolves with array of results
 * - Reject immediately if any promise rejects
 * - Maintain order of results
 *
 * Example:
 * const p1 = Promise.resolve(1);
 * const p2 = Promise.resolve(2);
 * promiseAll([p1, p2]).then(results => console.log(results)); // [1, 2]
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
  const p2 = Promise.resolve(2);
  const p3 = Promise.resolve(3);

  const result1 = await promiseAll([p1, p2, p3]);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 2, 3]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const delayed = new Promise(resolve => setTimeout(() => resolve('done'), 50));
  const result2 = await promiseAll([Promise.resolve('fast'), delayed]);
  console.assert(result2[0] === 'fast' && result2[1] === 'done', "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  try {
    await promiseAll([Promise.resolve(1), Promise.reject('error')]);
    console.log("❌ Test 3 failed: should have rejected");
  } catch (e) {
    console.assert(e === 'error', "❌ Test 3 failed");
    console.log("✅ Test 3 passed");
  }

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
