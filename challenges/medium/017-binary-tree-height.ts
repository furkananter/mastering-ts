/**
 * CHALLENGE: Binary Tree Max Height
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Binary trees
 * - Recursion
 * - Tree traversal
 * - Max depth calculation
 *
 * Problem:
 * Calculate the maximum height (depth) of a binary tree.
 * Height is the number of edges from root to deepest leaf.
 *
 * Requirements:
 * - Tree node: { value, left, right }
 * - Use recursion
 * - Empty tree has height -1
 * - Single node has height 0
 *
 * Example:
 * const tree = {
 *   value: 1,
 *   left: { value: 2, left: null, right: null },
 *   right: { value: 3, left: null, right: null }
 * };
 * maxHeight(tree);  // 1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
}

function maxHeight<T>(node: BinaryTreeNode<T> | null): number {
  // TODO: Implement max height calculation
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

  console.assert(maxHeight(tree1) === 1, "❌ Test 1 failed");
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

  console.assert(maxHeight(tree2) === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(maxHeight(null) === -1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
