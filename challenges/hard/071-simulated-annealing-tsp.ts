/**
 * CHALLENGE: Simulated Annealing for TSP
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Simulated annealing
 * - Metaheuristic optimization
 * - Acceptance probability
 * - Cooling schedule
 *
 * Problem:
 * Implement simulated annealing to find good TSP solution.
 * Use temperature-based acceptance of worse solutions to escape local minima.
 *
 * Requirements:
 * - Initial random tour
 * - 2-opt or other neighborhood moves
 * - Acceptance probability: e^(-Δcost/T)
 * - Cooling schedule (e.g., T *= 0.95)
 *
 * Example:
 * const dist = [[0,10,15,20],[10,0,35,25],[15,35,0,30],[20,25,30,0]];
 * simulatedAnnealing(dist, 1000, 100, 0.95);
 * // Returns good tour (may not be optimal)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type DistanceMatrix = ReadonlyArray<ReadonlyArray<number>>;
function simulatedAnnealingTSP(dist: DistanceMatrix, maxIter?: number): number { return 0; }

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

  const result = simulatedAnnealing(dist, 1000, 100, 0.95);
  console.assert(result <= 100, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = simulatedAnnealing(dist, 100, 50, 0.9);
  console.assert(result2 > 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
