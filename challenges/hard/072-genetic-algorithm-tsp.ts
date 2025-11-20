/**
 * CHALLENGE: Genetic Algorithm for TSP
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Genetic algorithms
 * - Evolution simulation
 * - Crossover and mutation
 * - Fitness function
 *
 * Problem:
 * Implement genetic algorithm for TSP. Use population of tours,
 * crossover (e.g., order crossover), mutation, and selection.
 *
 * Requirements:
 * - Initialize random population
 * - Fitness = 1/tour_length
 * - Order crossover (OX) or PMX
 * - Mutation (swap two cities)
 * - Tournament selection
 *
 * Example:
 * const dist = [[0,10,15,20],[10,0,35,25],[15,35,0,30],[20,25,30,0]];
 * geneticAlgorithm(dist, 100, 50, 0.8, 0.2);
 * // popSize=100, generations=50, crossoverRate=0.8, mutationRate=0.2
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
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

  const result = geneticAlgorithm(dist, 50, 30, 0.8, 0.2);
  console.assert(result <= 120, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = geneticAlgorithm(dist, 20, 10, 0.7, 0.1);
  console.assert(result2 > 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
