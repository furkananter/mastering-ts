/**
 * CHALLENGE: Kth Smallest Element in BST
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Binary Search Tree
 * - In-order traversal
 * - BST property
 * - Counting elements
 *
 * Problem:
 * Find kth smallest element in BST (k is 1-indexed).
 * Use in-order traversal property of BST.
 *
 * Requirements:
 * - In-order traversal gives sorted order
 * - Stop at kth element
 * - Return value
 * - Can use iterative or recursive
 *
 * Example:
 * const bst = {
 *   value: 3,
 *   left: { value: 1, right: {value: 2} },
 *   right: { value: 4 }
 * };
 * kthSmallest(bst, 1);  // 1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const bst = {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: { value: 2, left: null, right: null }
    },
    right: { value: 4, left: null, right: null }
  };

  console.assert(kthSmallest(bst, 1) === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(kthSmallest(bst, 3) === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
