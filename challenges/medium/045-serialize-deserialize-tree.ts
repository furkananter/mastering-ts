/**
 * CHALLENGE: Serialize and Deserialize Binary Tree
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Tree serialization
 * - DFS traversal
 * - String encoding/decoding
 * - Tree reconstruction
 *
 * Problem:
 * Implement functions to serialize a binary tree to a string
 * and deserialize it back to the tree structure.
 *
 * Requirements:
 * - serialize(root) - convert tree to string
 * - deserialize(data) - reconstruct tree from string
 * - Handle null nodes
 * - Preserve tree structure
 *
 * Example:
 * const tree = { value: 1, left: { value: 2, ...}, right: { value: 3, ...}};
 * const str = serialize(tree);  // "1,2,null,null,3,null,null"
 * const newTree = deserialize(str);  // reconstructed tree
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
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
  };

  const serialized = serialize(tree);
  const deserialized = deserialize(serialized);

  console.assert(deserialized.value === 1, "❌ Test 1 failed");
  console.assert(deserialized.left.value === 2, "❌ Test 1 failed");
  console.assert(deserialized.right.value === 3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const nullTree = serialize(null);
  console.assert(deserialize(nullTree) === null, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
