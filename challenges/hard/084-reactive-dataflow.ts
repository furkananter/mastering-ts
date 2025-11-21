/**
 * CHALLENGE: Reactive Dataflow System (FRP Basics)
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Functional Reactive Programming (FRP)
 * - Observable pattern
 * - Dependency tracking
 * - Automatic propagation
 *
 * Problem:
 * Implement reactive dataflow system where computed values automatically
 * update when dependencies change. Similar to spreadsheet cells.
 *
 * Requirements:
 * - cell(value) creates reactive cell
 * - computed(fn, deps) creates computed cell
 * - set(cell, value) updates and propagates
 * - get(cell) reads current value
 * - Topological sort for update order
 *
 * Example:
 * const a = cell(1);
 * const b = cell(2);
 * const c = computed(() => get(a) + get(b), [a, b]);
 * get(c);  // 3
 * set(a, 5);
 * get(c);  // 7 (automatically updated)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const a = cell(1);
  const b = cell(2);
  const c = computed(() => get(a) + get(b), [a, b]);

  console.assert(get(c) === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  set(a, 5);
  console.assert(get(c) === 7, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
