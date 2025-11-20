/**
 * CHALLENGE: Async Retry with Exponential Backoff
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Async/await
 * - Promises
 * - Exponential backoff
 * - Error handling
 *
 * Problem:
 * Create a retry function that attempts an async operation with
 * exponential backoff (delay doubles after each retry).
 *
 * Requirements:
 * - Retry up to maxAttempts times
 * - Wait delay * 2^attempt between retries
 * - Return result on success
 * - Throw last error on failure
 *
 * Example:
 * let attempts = 0;
 * const fn = async () => {
 *   attempts++;
 *   if (attempts < 3) throw new Error('fail');
 *   return 'success';
 * };
 * await retryWithBackoff(fn, 3, 10); // 'success' after ~30ms
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

async function runTests(): Promise<void> {
  console.log("Running tests...\n");

  let attempts1 = 0;
  const fn1 = async () => {
    attempts1++;
    if (attempts1 < 2) throw new Error('fail');
    return 'success';
  };

  const result1 = await retryWithBackoff(fn1, 3, 10);
  console.assert(result1 === 'success', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const fn2 = async () => 'immediate';
  const result2 = await retryWithBackoff(fn2, 3, 10);
  console.assert(result2 === 'immediate', "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
