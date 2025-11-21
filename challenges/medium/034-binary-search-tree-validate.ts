/**
 * CHALLENGE: Validate Binary Search Tree
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Binary Search Trees
 * - BST properties
 * - Recursion
 * - Min/max bounds
 *
 * Problem:
 * Determine if a binary tree is a valid Binary Search Tree.
 * BST property: left subtree < node < right subtree (for all nodes).
 *
 * Requirements:
 * - Check BST property recursively
 * - Track min/max bounds
 * - All nodes must satisfy property
 * - Return boolean
 *
 * Example:
 * const validBST = {
 *   value: 2,
 *   left: { value: 1, left: null, right: null },
 *   right: { value: 3, left: null, right: null }
 * };
 * isValidBST(validBST);  // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
}

function isValidBST(root: BinaryTreeNode<number> | null, min: number = -Infinity, max: number = Infinity): boolean {
  // TODO: Implement BST validation
  throw new Error("Not implemented");
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const validBST = {
    value: 2,
    left: { value: 1, left: null, right: null },
    right: { value: 3, left: null, right: null }
  };

  console.assert(isValidBST(validBST) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const invalidBST = {
    value: 5,
    left: { value: 1, left: null, right: null },
    right: {
      value: 4,
      left: { value: 3, left: null, right: null },
      right: { value: 6, left: null, right: null }
    }
  };

  console.assert(isValidBST(invalidBST) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
