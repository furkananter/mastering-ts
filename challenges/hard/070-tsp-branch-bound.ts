/**
 * CHALLENGE: TSP with Branch and Bound
 *
 * Difficulty: Hard
 * Estimated Time: 45 minutes
 *
 * Topics to know:
 * - Branch and bound
 * - TSP optimization
 * - Lower bound computation
 * - Pruning strategies
 *
 * Problem:
 * Solve TSP using branch and bound. Use MST lower bound for pruning.
 * Better than DP for sparse graphs but still exponential worst-case.
 *
 * Requirements:
 * - Use MST for lower bound computation
 * - Branch on edges (include/exclude)
 * - Prune suboptimal branches
 * - Return exact minimum tour cost
 *
 * Example:
 * const dist = [
 *   [0, 10, 15, 20],
 *   [10, 0, 35, 25],
 *   [15, 35, 0, 30],
 *   [20, 25, 30, 0]
 * ];
 * tspBranchBound(dist);  // 80
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type DistanceMatrix = ReadonlyArray<ReadonlyArray<number>>;
function tspBranchBound(dist: DistanceMatrix): number { return 0; }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const dist = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
  ];

  console.assert(tspBranchBound(dist) === 80, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const dist2 = [
    [0, 20, 42],
    [20, 0, 30],
    [42, 30, 0]
  ];
  console.assert(tspBranchBound(dist2) === 92, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
