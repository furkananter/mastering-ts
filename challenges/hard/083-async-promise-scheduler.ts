/**
 * CHALLENGE: Advanced Async Promise Scheduler with Priorities
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Async/Promise patterns
 * - Priority queue
 * - Concurrency control
 * - Task scheduling
 *
 * Problem:
 * Implement async task scheduler with priorities and concurrency limit.
 * Higher priority tasks run first. Support cancellation and timeout.
 *
 * Requirements:
 * - Constructor(maxConcurrent)
 * - add(task, priority, timeout?) returns promise
 * - cancel(taskId)
 * - Priority queue for pending tasks
 * - Respect concurrency limit
 *
 * Example:
 * const scheduler = new PriorityScheduler(2);
 * scheduler.add(task1, 5);  // priority 5
 * scheduler.add(task2, 10); // priority 10 (runs first if queued)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class PromiseScheduler { constructor(maxConcurrent: number) {} add<T>(promiseFn: () => Promise<T>): Promise<T> { return Promise.resolve(null as any); } }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const scheduler = new PriorityScheduler(2);

  let executed = [];
  const task1 = async () => { executed.push(1); return 1; };
  const task2 = async () => { executed.push(2); return 2; };
  const task3 = async () => { executed.push(3); return 3; };

  Promise.all([
    scheduler.add(task1, 1),
    scheduler.add(task2, 10),
    scheduler.add(task3, 5)
  ]).then(() => {
    console.assert(executed.includes(1) && executed.includes(2) && executed.includes(3), "❌ Test 1 failed");
    console.log("✅ Test 1 passed");
  });

  console.log("✅ Tests initiated (async)");
}

// Uncomment to run tests:
// runTests();
