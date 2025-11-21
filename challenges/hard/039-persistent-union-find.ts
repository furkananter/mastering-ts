/**
 * CHALLENGE: Persistent Union-Find (Disjoint Set)
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Persistent data structures
 * - Union-Find
 * - Path copying
 * - Version control
 *
 * Problem:
 * Implement persistent union-find that maintains all historical versions.
 * Query any past version's connectivity.
 *
 * Requirements:
 * - union(version, a, b) returns new version
 * - find(version, x) returns root in that version
 * - connected(version, a, b) checks connectivity
 * - O(log n) space per operation
 *
 * Example:
 * const puf = new PersistentUnionFind(5);
 * const v1 = puf.union(0, 0, 1);
 * puf.connected(0, 0, 1);   // false (original)
 * puf.connected(v1, 0, 1);  // true (v1)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const puf = new PersistentUnionFind(5);
  const v1 = puf.union(0, 0, 1);

  console.assert(puf.connected(0, 0, 1) === false, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(puf.connected(v1, 0, 1) === true, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
