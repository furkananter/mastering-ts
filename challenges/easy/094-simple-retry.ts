/**
 * CHALLENGE: Simple Retry Function
 *
 * Difficulty: Easy
 * Estimated Time: 6 minutes
 *
 * Topics to know:
 * - Function execution
 * - Try-catch blocks
 * - Loop for retries
 *
 * Problem:
 * Create a retry function that attempts to execute a function
 * up to n times until it succeeds or runs out of attempts.
 * If all attempts fail, throw the last error.
 *
 * Requirements:
 * - Try function up to maxAttempts times
 * - Return result on success
 * - Throw error after all attempts fail
 *
 * Example:
 * let attempt = 0;
 * const fn = () => { attempt++; if (attempt < 3) throw Error(); return 'ok'; };
 * retry(fn, 3);    // 'ok' (succeeds on 3rd attempt)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

function retry<T>(fn: () => T, maxAttempts: number): T | undefined {
  return undefined;
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  let attempt1 = 0;
  const fn1 = () => {
    attempt1++;
    if (attempt1 < 3) throw new Error('fail');
    return 'ok';
  };

  console.assert(retry(fn1, 3) === 'ok', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const fn2 = () => 'immediate';
  console.assert(retry(fn2, 3) === 'immediate', "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
