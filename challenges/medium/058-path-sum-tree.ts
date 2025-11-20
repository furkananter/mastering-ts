/**
 * CHALLENGE: Binary Tree Path Sum
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Binary tree traversal
 * - Recursion
 * - Path tracking
 * - Backtracking
 *
 * Problem:
 * Find all root-to-leaf paths in binary tree where path sum equals target.
 * Return array of paths (each path is array of values).
 *
 * Requirements:
 * - Find all paths from root to leaf
 * - Path sum must equal target
 * - Use DFS/backtracking
 * - Return array of paths
 *
 * Example:
 * const tree = {
 *   value: 5,
 *   left: { value: 4, left: { value: 11, left: {value: 7}, right: {value: 2}}},
 *   right: { value: 8, left: {value: 13}, right: {value: 4, right: {value: 1}}}
 * };
 * pathSum(tree, 22);  // [[5,4,11,2], [5,8,4,1]]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const tree = {
    value: 5,
    left: {
      value: 4,
      left: {
        value: 11,
        left: { value: 7, left: null, right: null },
        right: { value: 2, left: null, right: null }
      },
      right: null
    },
    right: {
      value: 8,
      left: { value: 13, left: null, right: null },
      right: {
        value: 4,
        left: null,
        right: { value: 1, left: null, right: null }
      }
    }
  };

  const paths = pathSum(tree, 22);
  console.assert(paths.length === 2, "❌ Test 1 failed: should find 2 paths");
  console.log("✅ Test 1 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
