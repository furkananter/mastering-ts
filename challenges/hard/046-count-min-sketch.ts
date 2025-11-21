/**
 * CHALLENGE: Count-Min Sketch - Frequency Estimation
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - Count-Min Sketch
 * - Probabilistic data structures
 * - Frequency estimation
 * - Multiple hash tables
 *
 * Problem:
 * Implement Count-Min Sketch for approximate frequency counting.
 * Use multiple hash functions to minimize collisions.
 *
 * Requirements:
 * - Constructor(width, depth) creates sketch
 * - increment(item) increments count
 * - estimate(item) returns approximate count
 * - Never underestimate (only overestimate)
 *
 * Example:
 * const cms = new CountMinSketch(100, 5);
 * cms.increment("a"); cms.increment("a"); cms.increment("b");
 * cms.estimate("a");  // ~2
 * cms.estimate("b");  // ~1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const cms = new CountMinSketch(100, 5);
  cms.increment("a");
  cms.increment("a");
  cms.increment("b");

  console.assert(cms.estimate("a") >= 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(cms.estimate("b") >= 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
