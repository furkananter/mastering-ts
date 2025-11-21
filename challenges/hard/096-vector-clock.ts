/**
 * CHALLENGE: Vector Clocks for Distributed Systems
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Vector clocks
 * - Causality tracking
 * - Distributed systems
 * - Partial ordering
 *
 * Problem:
 * Implement vector clocks to track causality in distributed systems.
 * Detect concurrent, happened-before, and happened-after relationships.
 *
 * Requirements:
 * - Vector clock per process
 * - increment() on local event
 * - merge(otherClock) on message receive
 * - compare(clock1, clock2) returns relation
 * - Relations: BEFORE, AFTER, CONCURRENT
 *
 * Example:
 * const c1 = new VectorClock(['A', 'B']);
 * c1.increment('A');  // A:1, B:0
 * const c2 = new VectorClock(['A', 'B']);
 * c2.increment('B');  // A:0, B:1
 * compare(c1, c2);    // CONCURRENT
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class VectorClock { constructor(nodeId: string) {} increment(): void {} merge(other: VectorClock): void {} compare(other: VectorClock): number { return 0; } }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const c1 = new VectorClock(['A', 'B']);
  c1.increment('A');

  const c2 = new VectorClock(['A', 'B']);
  c2.increment('B');

  console.assert(compare(c1, c2) === 'CONCURRENT', "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  c2.merge(c1);
  c2.increment('B');
  console.assert(compare(c1, c2) === 'BEFORE', "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
