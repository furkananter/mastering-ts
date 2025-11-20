/**
 * CHALLENGE: HyperLogLog - Cardinality Estimation
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - HyperLogLog algorithm
 * - Cardinality estimation
 * - Probabilistic counting
 * - Harmonic mean
 *
 * Problem:
 * Implement HyperLogLog for approximate distinct count estimation.
 * Use leading zeros in hash values. Very space-efficient.
 *
 * Requirements:
 * - Constructor(precision) creates HLL
 * - add(item) adds item
 * - count() returns approximate cardinality
 * - Error rate ~1.04/√(2^precision)
 *
 * Example:
 * const hll = new HyperLogLog(14);
 * for (let i = 0; i < 10000; i++) hll.add(i);
 * hll.count();  // ~10000 (approximate)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const hll = new HyperLogLog(14);
  for (let i = 0; i < 1000; i++) {
    hll.add(i);
  }

  const estimate = hll.count();
  console.assert(Math.abs(estimate - 1000) < 100, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  // Add duplicates
  for (let i = 0; i < 1000; i++) {
    hll.add(i);
  }
  const estimate2 = hll.count();
  console.assert(Math.abs(estimate2 - 1000) < 100, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
