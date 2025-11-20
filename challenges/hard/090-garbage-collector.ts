/**
 * CHALLENGE: Mark-and-Sweep Garbage Collector Simulation
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Garbage collection
 * - Mark-and-sweep algorithm
 * - Graph traversal
 * - Memory management
 *
 * Problem:
 * Simulate mark-and-sweep garbage collector. Objects have references
 * to other objects. Find and collect unreachable objects from roots.
 *
 * Requirements:
 * - Objects with reference fields
 * - Root set (stack, globals)
 * - Mark phase: DFS/BFS from roots
 * - Sweep phase: collect unmarked objects
 * - Return collected object IDs
 *
 * Example:
 * const heap = {
 *   1: {refs: [2]},
 *   2: {refs: [3]},
 *   3: {refs: []},
 *   4: {refs: []}  // unreachable
 * };
 * markAndSweep(heap, [1]);  // Returns [4]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const heap = {
    1: {refs: [2]},
    2: {refs: [3]},
    3: {refs: []},
    4: {refs: []}
  };

  const collected = markAndSweep(heap, [1]);
  console.assert(collected.includes(4), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const heap2 = {
    1: {refs: [2, 3]},
    2: {refs: []},
    3: {refs: []}
  };
  const collected2 = markAndSweep(heap2, [1]);
  console.assert(collected2.length === 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
