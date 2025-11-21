/**
 * CHALLENGE: Task Scheduler
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Greedy algorithm
 * - Frequency counting
 * - Cooling period
 * - Scheduling
 *
 * Problem:
 * Given tasks ['A','A','A','B','B','B'] and cooldown n,
 * find minimum intervals needed to complete all tasks.
 * Same task must wait n intervals before repeating.
 *
 * Requirements:
 * - Schedule tasks with cooldown
 * - Use idle time when needed
 * - Return minimum intervals
 * - Greedy: schedule most frequent first
 *
 * Example:
 * leastInterval(['A','A','A','B','B','B'], 2);
 * // 8 (A->B->idle->A->B->idle->A->B)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(leastInterval(['A','A','A','B','B','B'], 2) === 8, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(leastInterval(['A','A','A','B','B','B'], 0) === 6, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
