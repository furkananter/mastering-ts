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

interface PersistentNode {
  value: number;
  left: PersistentNode | null;
  right: PersistentNode | null;
}

type VersionId = number;

class PersistentSegmentTree {
  private roots: Map<VersionId, PersistentNode>;
  private n: number;
  private nextVersion: VersionId;

  constructor(arr: ReadonlyArray<number>) {
    this.n = arr.length;
    this.roots = new Map();
    this.nextVersion = 1;
    // Build initial version 0
  }

  update(version: VersionId, index: number, value: number): VersionId {
    // Create new version with update
    return this.nextVersion++;
  }

  query(version: VersionId, left: number, right: number): number {
    // Query range sum in specific version
    return 0;
  }

  private copyNode(node: PersistentNode | null): PersistentNode | null {
    // Helper to copy node for path copying
    return node;
  }
}

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
