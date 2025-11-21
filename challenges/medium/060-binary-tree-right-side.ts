/**
 * CHALLENGE: Binary Tree Right Side View
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Binary tree traversal
 * - Level-order (BFS)
 * - Rightmost node per level
 * - Queue usage
 *
 * Problem:
 * Return values of nodes you can see from right side of binary tree
 * (rightmost node at each level).
 *
 * Requirements:
 * - Use level-order traversal
 * - Get rightmost node per level
 * - Top to bottom order
 * - Return array of values
 *
 * Example:
 * const tree = {
 *   value: 1,
 *   left: { value: 2, right: {value: 5} },
 *   right: { value: 3, right: {value: 4} }
 * };
 * rightSideView(tree);  // [1, 3, 4]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
}

function rightSideView<T>(root: BinaryTreeNode<T> | null): T[] {
  // TODO: Implement right side view
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const tree1 = {
    value: 1,
    left: {
      value: 2,
      left: null,
      right: { value: 5, left: null, right: null }
    },
    right: {
      value: 3,
      left: null,
      right: { value: 4, left: null, right: null }
    }
  };

  const result1 = rightSideView(tree1);
  console.assert(JSON.stringify(result1) === JSON.stringify([1, 3, 4]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const tree2 = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: null
  };

  const result2 = rightSideView(tree2);
  console.assert(JSON.stringify(result2) === JSON.stringify([1, 2]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
