/**
 * CHALLENGE: Clone Graph (Deep Copy)
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Graph traversal (DFS or BFS)
 * - Deep copy
 * - Hash map for tracking
 * - Node references
 *
 * Problem:
 * Clone an undirected graph. Each node has a value and list of neighbors.
 * Return deep copy of the graph.
 *
 * Requirements:
 * - Deep copy all nodes
 * - Preserve neighbor relationships
 * - Use Map to track cloned nodes
 * - DFS or BFS traversal
 *
 * Example:
 * // Node: { val: number, neighbors: Node[] }
 * const original = { val: 1, neighbors: [node2, node3] };
 * const cloned = cloneGraph(original);
 * // cloned is deep copy with same structure
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const node1 = { val: 1, neighbors: [] };
  const node2 = { val: 2, neighbors: [] };
  node1.neighbors = [node2];
  node2.neighbors = [node1];

  const cloned = cloneGraph(node1);

  console.assert(cloned !== node1, "❌ Test 1 failed: should be different object");
  console.assert(cloned.val === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(cloned.neighbors[0].val === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
