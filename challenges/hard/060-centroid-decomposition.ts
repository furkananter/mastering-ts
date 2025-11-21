/**
 * CHALLENGE: Centroid Decomposition of Trees
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Centroid decomposition
 * - Tree decomposition
 * - Divide and conquer on trees
 * - Centroid properties
 *
 * Problem:
 * Implement centroid decomposition to solve tree problems efficiently.
 * Recursively find centroids and decompose tree into O(log n) levels.
 *
 * Requirements:
 * - findCentroid(tree, root) finds centroid
 * - decompose(tree) builds centroid tree
 * - Each path goes through O(log n) centroids
 * - Support distance queries
 *
 * Example:
 * const tree = {0: [1, 2], 1: [0, 3, 4], 2: [0], 3: [1], 4: [1]};
 * const cd = new CentroidDecomp(tree);
 * cd.decompose();
 * // Centroid tree structure created
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type AdjacencyList = Record<number, readonly number[]>;
function centroidDecomposition(tree: AdjacencyList, root?: number): number { return 0; }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const tree = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0],
    3: [1],
    4: [1]
  };

  const cd = new CentroidDecomp(tree);
  cd.decompose();

  console.assert(cd.getCentroidRoot() !== null, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(cd.getHeight() <= Math.ceil(Math.log2(5)), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
