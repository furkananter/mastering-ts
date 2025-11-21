/**
 * CHALLENGE: Incremental Computation Framework
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Incremental computation
 * - Memoization with invalidation
 * - Dependency graph
 * - Change propagation
 *
 * Problem:
 * Build incremental computation system that efficiently recomputes
 * only affected values when inputs change. Use dependency tracking.
 *
 * Requirements:
 * - input(value) creates input node
 * - derive(fn, deps) creates derived node
 * - Memoize computed values
 * - Invalidate and recompute on change
 * - Minimize recomputation
 *
 * Example:
 * const x = input(10);
 * const y = derive(() => x.get() * 2);
 * const z = derive(() => y.get() + 1);
 * z.get();  // 21
 * x.set(20);
 * z.get();  // 41 (efficiently recomputed)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class IncrementalComputation<T> { constructor(compute: () => T) {} recompute(): T { return null as any; } invalidate(): void {} }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const x = input(10);
  const y = derive(() => x.get() * 2);
  const z = derive(() => y.get() + 1);

  console.assert(z.get() === 21, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  x.set(20);
  console.assert(z.get() === 41, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
