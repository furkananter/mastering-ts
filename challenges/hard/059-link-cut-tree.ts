/**
 * CHALLENGE: Link-Cut Tree (Dynamic Trees)
 *
 * Difficulty: Hard
 * Estimated Time: 50 minutes
 *
 * Topics to know:
 * - Link-cut tree
 * - Dynamic tree connectivity
 * - Splay tree operations
 * - Path aggregation
 *
 * Problem:
 * Implement link-cut tree for dynamic tree operations.
 * Support link, cut, and path queries on changing tree structure.
 *
 * Requirements:
 * - link(u, v) adds edge
 * - cut(u, v) removes edge
 * - findRoot(u) finds tree root
 * - pathQuery(u, v) aggregates path
 * - O(log n) amortized per operation
 *
 * Example:
 * const lct = new LinkCutTree(5);
 * lct.link(0, 1); lct.link(1, 2);
 * lct.findRoot(2);  // 0
 * lct.cut(0, 1);
 * lct.findRoot(2);  // 1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class LinkCutTree { constructor(n: number) {} link(u: number, v: number): void {} cut(u: number, v: number): void {} connected(u: number, v: number): boolean { return false; } }


// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const lct = new LinkCutTree(5);
  lct.link(0, 1);
  lct.link(1, 2);

  console.assert(lct.findRoot(2) === 0, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  lct.cut(0, 1);
  console.assert(lct.findRoot(2) === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
