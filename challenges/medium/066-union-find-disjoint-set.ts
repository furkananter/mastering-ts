/**
 * CHALLENGE: Union-Find (Disjoint Set Union)
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Union-Find data structure
 * - Path compression
 * - Union by rank
 * - Disjoint sets
 *
 * Problem:
 * Implement Union-Find with find, union, and connected operations.
 * Use path compression and union by rank for optimization.
 *
 * Requirements:
 * - find(x) - find root of x (with path compression)
 * - union(x, y) - merge sets containing x and y
 * - connected(x, y) - check if x and y in same set
 * - Optimize with path compression and rank
 *
 * Example:
 * const uf = new UnionFind(5);
 * uf.union(0, 1);
 * uf.union(1, 2);
 * uf.connected(0, 2);  // true
 * uf.connected(0, 3);  // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class UnionFind {
  private parent: number[];
  private rank: number[];

  constructor(size: number) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = Array(size).fill(0);
  }

  find(x: number): number {
    // TODO: Implement find with path compression
    throw new Error("Not implemented");
  }

  union(x: number, y: number): void {
    // TODO: Implement union by rank
    throw new Error("Not implemented");
  }

  isConnected(x: number, y: number): boolean {
    // TODO: Implement isConnected
    throw new Error("Not implemented");
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const uf = new UnionFind(5);
  uf.union(0, 1);
  uf.union(1, 2);

  console.assert(uf.connected(0, 2) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(uf.connected(0, 3) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  uf.union(3, 4);
  uf.union(2, 4);
  console.assert(uf.connected(0, 4) === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
