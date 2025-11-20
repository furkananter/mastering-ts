/**
 * CHALLENGE: Tree Depth-First Search (DFS)
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Tree data structures
 * - Depth-first search
 * - Recursion
 * - Tree traversal
 *
 * Problem:
 * Implement depth-first search on a tree to find if a value exists.
 * Use recursion to traverse the tree.
 *
 * Requirements:
 * - Tree node: { value: any, children: TreeNode[] }
 * - Return true if value found
 * - Use DFS (go deep before wide)
 * - Handle empty trees
 *
 * Example:
 * const tree = {
 *   value: 1,
 *   children: [
 *     { value: 2, children: [] },
 *     { value: 3, children: [{ value: 4, children: [] }] }
 *   ]
 * };
 * dfs(tree, 4);  // true
 * dfs(tree, 5);  // false
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
    value: 1,
    children: [
      { value: 2, children: [] },
      { value: 3, children: [{ value: 4, children: [] }] }
    ]
  };

  console.assert(dfs(tree, 4) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(dfs(tree, 5) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(dfs(tree, 1) === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
