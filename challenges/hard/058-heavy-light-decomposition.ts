/**
 * CHALLENGE: Heavy-Light Decomposition on Trees
 *
 * Difficulty: Hard
 * Estimated Time: 45 minutes
 *
 * Topics to know:
 * - Heavy-light decomposition
 * - Tree path queries
 * - Chain decomposition
 * - Segment tree on chains
 *
 * Problem:
 * Implement heavy-light decomposition for efficient path queries on trees.
 * Decompose tree into heavy and light edges, then use segment trees.
 *
 * Requirements:
 * - Decompose tree into chains
 * - pathQuery(u, v) queries path between nodes
 * - update(node, value) updates node value
 * - O(log²n) per query
 *
 * Example:
 * const tree = {0: [1, 2], 1: [3, 4], 2: [], 3: [], 4: []};
 * const hld = new HeavyLightDecomp(tree, [1,2,3,4,5]);
 * hld.pathQuery(3, 4);  // sum on path 3->0->1->4
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type AdjacencyList = Record<number, readonly number[]>;
class HeavyLightDecomposition { constructor(tree: AdjacencyList, root: number) {} query(u: number, v: number): number { return 0; } }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const tree = {0: [1, 2], 1: [3, 4], 2: [], 3: [], 4: []};
  const values = [1, 2, 3, 4, 5];
  const hld = new HeavyLightDecomp(tree, values);

  const result = hld.pathQuery(3, 4);
  console.assert(result > 0, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  hld.update(1, 10);
  const result2 = hld.pathQuery(3, 4);
  console.assert(result2 !== result, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
