/**
 * CHALLENGE: CRDT (Conflict-free Replicated Data Type)
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - CRDTs
 * - Eventual consistency
 * - Commutative operations
 * - Distributed systems
 *
 * Problem:
 * Implement G-Counter CRDT (Grow-only Counter). Multiple replicas can
 * increment independently and merge to converge on same value.
 *
 * Requirements:
 * - Each replica has unique ID
 * - increment(amount) increases local counter
 * - merge(otherCRDT) merges states
 * - value() returns total count
 * - Commutative, associative, idempotent merge
 *
 * Example:
 * const c1 = new GCounter('replica1');
 * const c2 = new GCounter('replica2');
 * c1.increment(5); c2.increment(3);
 * c1.merge(c2);
 * c1.value();  // 8
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const c1 = new GCounter('replica1');
  const c2 = new GCounter('replica2');

  c1.increment(5);
  c2.increment(3);

  c1.merge(c2);
  console.assert(c1.value() === 8, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  c2.merge(c1);
  console.assert(c2.value() === 8, "❌ Test 2 failed (convergence)");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
