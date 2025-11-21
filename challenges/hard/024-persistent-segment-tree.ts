/**
 * CHALLENGE: Persistent Segment Tree
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Persistent data structures
 * - Segment tree
 * - Path copying
 * - Version control
 *
 * Problem:
 * Implement persistent segment tree that maintains all versions after updates.
 * Support query on any historical version.
 *
 * Requirements:
 * - update(version, index, value) returns new version
 * - query(version, left, right) queries that version
 * - O(log n) space per update
 * - Keep all historical versions
 *
 * Example:
 * const pst = new PersistentSegmentTree([1, 2, 3, 4]);
 * const v1 = pst.update(0, 2, 10);  // version 1
 * pst.query(0, 0, 3);  // 10 (original)
 * pst.query(v1, 0, 3); // 17 (after update)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const pst = new PersistentSegmentTree([1, 2, 3, 4]);
  const v1 = pst.update(0, 2, 10);

  console.assert(pst.query(0, 0, 3) === 10, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(pst.query(v1, 0, 3) === 17, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
