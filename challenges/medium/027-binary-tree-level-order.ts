/**
 * CHALLENGE: Binary Tree Level Order Traversal
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Binary trees
 * - BFS (Breadth-First Search)
 * - Queue usage
 * - Level-by-level traversal
 *
 * Problem:
 * Return level-order traversal of a binary tree (values grouped by level).
 * Use BFS with a queue.
 *
 * Requirements:
 * - Return array of arrays (each inner array is one level)
 * - Left to right order
 * - Use queue for BFS
 * - Handle empty tree
 *
 * Example:
 * const tree = {
 *   value: 1,
 *   left: { value: 2, left: null, right: null },
 *   right: { value: 3, left: null, right: null }
 * };
 * levelOrder(tree);  // [[1], [2, 3]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
}

function levelOrder<T>(root: BinaryTreeNode<T> | null): T[][] {
  // TODO: Implement level order traversal
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const tree1 = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
  };

  const result1 = levelOrder(tree1);
  console.assert(JSON.stringify(result1) === JSON.stringify([[1], [2, 3]]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const tree2 = {
    value: 1,
    left: {
      value: 2,
      left: { value: 4, left: null, right: null },
      right: null
    },
    right: { value: 3, left: null, right: null }
  };

  const result2 = levelOrder(tree2);
  console.assert(JSON.stringify(result2) === JSON.stringify([[1], [2, 3], [4]]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
