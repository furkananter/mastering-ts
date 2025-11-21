/**
 * CHALLENGE: Tarjan's Algorithm - Strongly Connected Components
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Graph algorithms
 * - DFS traversal
 * - Tarjan's algorithm
 * - Stack-based tracking
 *
 * Problem:
 * Find all strongly connected components (SCCs) in directed graph
 * using Tarjan's algorithm. Use single DFS pass with low-link values.
 *
 * Requirements:
 * - Use Tarjan's algorithm (single DFS)
 * - Track discovery time and low-link values
 * - Use stack for SCC identification
 * - Return array of SCCs (each SCC is array of nodes)
 *
 * Example:
 * const graph = {
 *   0: [1], 1: [2], 2: [0],
 *   3: [4], 4: [5], 5: [3, 6],
 *   6: []
 * };
 * tarjanSCC(graph);  // [[0,1,2], [3,4,5], [6]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type NodeId = number;
type AdjacencyList = Record<NodeId, ReadonlyArray<NodeId>>;
type SCC = NodeId[];

interface TarjanState {
  disc: Map<NodeId, number>;
  low: Map<NodeId, number>;
  stackMember: Set<NodeId>;
  stack: NodeId[];
  time: number;
  result: SCC[];
}

function tarjanSCC(graph: AdjacencyList): SCC[] {
  // Implementation here
  return [];
}

function tarjanDFS(
  node: NodeId,
  graph: AdjacencyList,
  state: TarjanState
): void {
  // Helper DFS function
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const graph = {
    0: [1], 1: [2], 2: [0],
    3: [4], 4: [5], 5: [3, 6],
    6: []
  };

  const result = tarjanSCC(graph);
  console.assert(result.length === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  // Check if [0,1,2] is one SCC
  const hasCycle012 = result.some(scc =>
    scc.includes(0) && scc.includes(1) && scc.includes(2)
  );
  console.assert(hasCycle012, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
