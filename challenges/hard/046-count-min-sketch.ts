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

class CountMinSketch {
  private table: number[][];
  private width: number;
  private depth: number;

  constructor(width: number, depth: number) {
    this.width = width;
    this.depth = depth;
    this.table = Array.from({ length: depth }, () => new Array(width).fill(0));
  }

  increment(item: string): void {
    // Implementation here
  }

  estimate(item: string): number {
    // Implementation here
    return 0;
  }

  private hash(item: string, seed: number): number {
    let hash = seed;
    for (let i = 0; i < item.length; i++) {
      hash = ((hash << 5) - hash + item.charCodeAt(i)) | 0;
    }
    return Math.abs(hash) % this.width;
  }
}

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
