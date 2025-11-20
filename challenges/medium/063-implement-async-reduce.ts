/**
 * CHALLENGE: Async Array Reduce
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Async/await
 * - Sequential promises
 * - Accumulator pattern
 * - Reduce logic
 *
 * Problem:
 * Implement async version of Array.reduce with async reducer function.
 * Must execute sequentially (not parallel like map).
 *
 * Requirements:
 * - Accept array, async reducer, initial value
 * - Execute sequentially (await each)
 * - Pass accumulator and current value
 * - Return final accumulator
 *
 * Example:
 * await asyncReduce([1, 2, 3], async (acc, n) => acc + n, 0);
 * // 6
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

async function runTests(): Promise<void> {
  console.log("Running tests...\n");

  const result1 = await asyncReduce([1, 2, 3], async (acc, n) => acc + n, 0);
  console.assert(result1 === 6, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = await asyncReduce(
    [1, 2, 3],
    async (acc, n) => {
      await new Promise(r => setTimeout(r, 10));
      return acc * n;
    },
    1
  );
  console.assert(result2 === 6, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
