/**
 * CHALLENGE: Dijkstra's Shortest Path Algorithm
 *
 * Difficulty: Hard
 * Estimated Time: 25 minutes
 *
 * Topics to know:
 * - Graph algorithms
 * - Priority Queue / Min Heap
 * - Greedy algorithm
 * - Adjacency list representation
 *
 * Problem:
 * Implement Dijkstra's algorithm to find shortest path from source to all nodes
 * in a weighted graph with non-negative edge weights.
 *
 * Requirements:
 * - Use priority queue (min heap)
 * - Graph: adjacency list [[node, weight], ...]
 * - Return distances object {node: distance}
 * - Handle unreachable nodes (Infinity)
 *
 * Example:
 * const graph = {
 *   0: [[1, 4], [2, 1]],
 *   1: [[3, 1]],
 *   2: [[1, 2], [3, 5]],
 *   3: []
 * };
 * dijkstra(graph, 0);  // {0: 0, 1: 3, 2: 1, 3: 4}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const graph1 = {
    0: [[1, 4], [2, 1]],
    1: [[3, 1]],
    2: [[1, 2], [3, 5]],
    3: []
  };

  const result1 = dijkstra(graph1, 0);
  console.assert(result1[0] === 0, "❌ Test 1a failed");
  console.assert(result1[1] === 3, "❌ Test 1b failed");
  console.assert(result1[2] === 1, "❌ Test 1c failed");
  console.assert(result1[3] === 4, "❌ Test 1d failed");
  console.log("✅ Test 1 passed");

  const graph2 = {
    0: [[1, 10]],
    1: [[2, 5]],
    2: []
  };
  const result2 = dijkstra(graph2, 0);
  console.assert(result2[0] === 0, "❌ Test 2a failed");
  console.assert(result2[1] === 10, "❌ Test 2b failed");
  console.assert(result2[2] === 15, "❌ Test 2c failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
