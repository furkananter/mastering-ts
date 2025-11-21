/**
 * CHALLENGE: Lowest Common Ancestor in Binary Tree
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Binary tree traversal
 * - Recursion
 * - Post-order thinking
 * - Ancestor tracking
 *
 * Problem:
 * Find lowest common ancestor (LCA) of two nodes in binary tree.
 * LCA is lowest node that has both p and q as descendants.
 *
 * Requirements:
 * - Use recursive approach
 * - Return LCA node
 * - Both p and q guaranteed to exist
 * - A node can be descendant of itself
 *
 * Example:
 * //     3
 * //    / \
 * //   5   1
 * //  / \
 * // 6   2
 * lowestCommonAncestor(root, node5, node1);  // node3
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
}

function lowestCommonAncestor<T>(
  root: BinaryTreeNode<T>,
  p: BinaryTreeNode<T>,
  q: BinaryTreeNode<T>
): BinaryTreeNode<T> | null {
  // TODO: Implement lowest common ancestor
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const node6 = { value: 6, left: null, right: null };
  const node2 = { value: 2, left: null, right: null };
  const node5 = { value: 5, left: node6, right: node2 };
  const node1 = { value: 1, left: null, right: null };
  const root = { value: 3, left: node5, right: node1 };

  const lca = lowestCommonAncestor(root, node5, node1);
  console.assert(lca.value === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const lca2 = lowestCommonAncestor(root, node5, node2);
  console.assert(lca2.value === 5, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
