/**
 * CHALLENGE: Construct Binary Tree from Preorder and Inorder
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Binary tree construction
 * - Preorder traversal (root, left, right)
 * - Inorder traversal (left, root, right)
 * - Recursion
 *
 * Problem:
 * Given preorder and inorder traversal arrays, construct the binary tree.
 * Assume no duplicates.
 *
 * Requirements:
 * - Use preorder to find roots
 * - Use inorder to split left/right subtrees
 * - Recursive construction
 * - Return root node
 *
 * Example:
 * buildTree([3,9,20,15,7], [9,3,15,20,7]);
 * // Returns tree:
 * //     3
 * //    / \
 * //   9  20
 * //     /  \
 * //    15   7
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const tree = buildTree([3,9,20,15,7], [9,3,15,20,7]);

  console.assert(tree.value === 3, "❌ Test 1 failed");
  console.assert(tree.left.value === 9, "❌ Test 1 failed");
  console.assert(tree.right.value === 20, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
