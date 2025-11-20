/**
 * CHALLENGE: Promise.race Implementation
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Promises
 * - Promise.race behavior
 * - Async patterns
 * - First settled promise
 *
 * Problem:
 * Implement your own version of Promise.race.
 * It should resolve/reject as soon as any promise settles.
 *
 * Requirements:
 * - Accept array of promises
 * - Resolve with first resolved value
 * - Reject with first rejection
 * - Ignore remaining promises after first settles
 *
 * Example:
 * const slow = new Promise(r => setTimeout(() => r('slow'), 100));
 * const fast = new Promise(r => setTimeout(() => r('fast'), 10));
 * promiseRace([slow, fast]).then(val => console.log(val)); // 'fast'
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

async function runTests(): Promise<void> {
  console.log("Running tests...\n");

  const slow = new Promise(r => setTimeout(() => r('slow'), 100));
  const fast = new Promise(r => setTimeout(() => r('fast'), 10));

  const result1 = await promiseRace([slow, fast]);
  console.assert(result1 === 'fast', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const fastReject = Promise.reject('error');
  const slowResolve = new Promise(r => setTimeout(() => r('ok'), 100));

  try {
    await promiseRace([slowResolve, fastReject]);
    console.log("❌ Test 2 failed: should reject");
  } catch (e) {
    console.assert(e === 'error', "❌ Test 2 failed");
    console.log("✅ Test 2 passed");
  }

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
