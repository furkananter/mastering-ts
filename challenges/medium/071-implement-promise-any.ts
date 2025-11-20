/**
 * CHALLENGE: Promise.any Implementation
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Promises
 * - Promise.any behavior
 * - AggregateError
 * - First fulfillment wins
 *
 * Problem:
 * Implement Promise.any which resolves with first fulfilled promise
 * or rejects with AggregateError if all reject.
 *
 * Requirements:
 * - Resolve with first fulfillment
 * - Only reject if ALL promises reject
 * - Throw AggregateError with all errors
 * - Ignore promises after first fulfillment
 *
 * Example:
 * const p1 = Promise.reject('error1');
 * const p2 = Promise.resolve('success');
 * promiseAny([p1, p2]);  // resolves with 'success'
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

async function runTests(): Promise<void> {
  console.log("Running tests...\n");

  const p1 = Promise.reject('error1');
  const p2 = Promise.resolve('success');

  const result1 = await promiseAny([p1, p2]);
  console.assert(result1 === 'success', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  try {
    await promiseAny([Promise.reject('e1'), Promise.reject('e2')]);
    console.log("❌ Test 2 failed: should reject");
  } catch (e) {
    console.assert(e.name === 'AggregateError', "❌ Test 2 failed");
    console.log("✅ Test 2 passed");
  }

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
