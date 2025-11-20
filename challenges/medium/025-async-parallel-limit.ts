/**
 * CHALLENGE: Async Parallel with Concurrency Limit
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Async/await
 * - Promise management
 * - Concurrency control
 * - Queue management
 *
 * Problem:
 * Execute async functions in parallel but limit the number
 * of concurrent executions. Return results in order.
 *
 * Requirements:
 * - Run max 'limit' functions concurrently
 * - Return results in original order
 * - Start new task when one completes
 * - Handle all promises
 *
 * Example:
 * const tasks = [
 *   async () => delay(100).then(() => 1),
 *   async () => delay(50).then(() => 2),
 *   async () => delay(150).then(() => 3)
 * ];
 * parallelLimit(tasks, 2);  // [1, 2, 3] with max 2 concurrent
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

async function runTests(): Promise<void> {
  console.log("Running tests...\n");

  const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

  const tasks = [
    async () => { await delay(50); return 1; },
    async () => { await delay(30); return 2; },
    async () => { await delay(40); return 3; }
  ];

  const result = await parallelLimit(tasks, 2);
  console.assert(JSON.stringify(result) === JSON.stringify([1, 2, 3]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
