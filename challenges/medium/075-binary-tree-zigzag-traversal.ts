/**
 * CHALLENGE: Binary Tree Zigzag Level Order Traversal
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Binary tree traversal
 * - BFS with direction toggle
 * - Level tracking
 * - Array reversal
 *
 * Problem:
 * Return zigzag level order traversal (level 0 left-to-right,
 * level 1 right-to-left, alternating).
 *
 * Requirements:
 * - Use BFS
 * - Alternate direction per level
 * - Return array of arrays
 * - Handle empty tree
 *
 * Example:
 * const tree = {
 *   value: 3,
 *   left: { value: 9 },
 *   right: { value: 20, left: {value: 15}, right: {value: 7} }
 * };
 * zigzagLevelOrder(tree);
 * // [[3], [20, 9], [15, 7]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
}

function zigzagLevelOrder<T>(root: BinaryTreeNode<T> | null): T[][] {
  // TODO: Implement zigzag level order traversal
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const tree = {
    value: 3,
    left: { value: 9, left: null, right: null },
    right: {
      value: 20,
      left: { value: 15, left: null, right: null },
      right: { value: 7, left: null, right: null }
    }
  };

  const result = zigzagLevelOrder(tree);
  console.assert(JSON.stringify(result) === JSON.stringify([[3], [20, 9], [15, 7]]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
