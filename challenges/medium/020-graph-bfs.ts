/**
 * CHALLENGE: Graph Breadth-First Search (BFS)
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Graph data structures
 * - BFS algorithm
 * - Queue usage
 * - Graph traversal
 *
 * Problem:
 * Implement BFS to find the shortest path (number of edges)
 * from start node to target node in an unweighted graph.
 *
 * Requirements:
 * - Graph as adjacency list: { node: [neighbors] }
 * - Use queue for BFS
 * - Return path length or -1 if not found
 * - Visit each node once
 *
 * Example:
 * const graph = {
 *   'A': ['B', 'C'],
 *   'B': ['D'],
 *   'C': ['D'],
 *   'D': []
 * };
 * bfs(graph, 'A', 'D');  // 2
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': []
  };

  console.assert(bfs(graph, 'A', 'D') === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(bfs(graph, 'A', 'B') === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(bfs(graph, 'A', 'Z') === -1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
