/**
 * CHALLENGE: B-Tree Implementation
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - B-tree data structure
 * - Multi-way search tree
 * - Node splitting
 * - Balanced tree properties
 *
 * Problem:
 * Implement B-tree of order t (minimum degree). Each node has [t-1, 2t-1] keys.
 * Support insert and search operations.
 *
 * Requirements:
 * - insert(key) with node splitting
 * - search(key) returns boolean
 * - Maintain B-tree properties
 * - All leaves at same level
 *
 * Example:
 * const btree = new BTree(3);  // order 3
 * btree.insert(10); btree.insert(20); btree.insert(5);
 * btree.search(20);  // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const btree = new BTree(3);
  btree.insert(10);
  btree.insert(20);
  btree.insert(5);
  btree.insert(6);
  btree.insert(12);
  btree.insert(30);

  console.assert(btree.search(20) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(btree.search(15) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
