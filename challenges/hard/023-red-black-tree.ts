/**
 * CHALLENGE: Red-Black Tree Implementation
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - Self-balancing BST
 * - Red-Black tree properties
 * - Tree rotations
 * - Color flipping
 *
 * Problem:
 * Implement Red-Black tree with insert operation.
 * Maintain: 1) Root is black, 2) No red-red parent-child,
 * 3) Black height equal on all paths.
 *
 * Requirements:
 * - insert(val) with rebalancing
 * - search(val)
 * - Maintain RB tree properties
 * - Color nodes RED or BLACK
 *
 * Example:
 * const rbt = new RedBlackTree();
 * rbt.insert(10); rbt.insert(20); rbt.insert(30);
 * rbt.search(20);  // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const rbt = new RedBlackTree();
  rbt.insert(10);
  rbt.insert(20);
  rbt.insert(30);

  console.assert(rbt.search(20) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  rbt.insert(15);
  console.assert(rbt.search(15) === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(rbt.search(100) === false, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
