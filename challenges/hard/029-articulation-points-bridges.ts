/**
 * CHALLENGE: Find Articulation Points and Bridges
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Graph algorithms
 * - DFS traversal
 * - Low-link values
 * - Critical connections
 *
 * Problem:
 * Find articulation points (vertices whose removal disconnects graph)
 * and bridges (edges whose removal disconnects graph).
 *
 * Requirements:
 * - Use DFS with low-link values
 * - Return {points: number[], bridges: [number, number][]}
 * - Single DFS pass
 * - Handle disconnected graphs
 *
 * Example:
 * const graph = {
 *   0: [1, 2], 1: [0, 2], 2: [0, 1, 3],
 *   3: [2, 4], 4: [3]
 * };
 * findCritical(graph);  // {points: [2, 3], bridges: [[2,3], [3,4]]}
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type NodeId = number;
type Edge = readonly [u: NodeId, v: NodeId];
type AdjacencyList = Record<NodeId, ReadonlyArray<NodeId>>;

interface CriticalElements {
  points: NodeId[];
  bridges: Edge[];
}

function findCritical(graph: AdjacencyList): CriticalElements {
  // Implementation here
  return { points: [], bridges: [] };
}

function dfs(
  u: NodeId,
  parent: NodeId,
  graph: AdjacencyList,
  disc: Map<NodeId, number>,
  low: Map<NodeId, number>,
  time: { value: number },
  points: Set<NodeId>,
  bridges: Edge[]
): void {
  // Helper DFS to find articulation points and bridges
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const graph = {
    0: [1, 2], 1: [0, 2], 2: [0, 1, 3],
    3: [2, 4], 4: [3]
  };

  const result = findCritical(graph);
  console.assert(result.points.includes(2) && result.points.includes(3), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(result.bridges.length === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
