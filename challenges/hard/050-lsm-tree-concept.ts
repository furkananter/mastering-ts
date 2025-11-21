/**
 * CHALLENGE: LSM Tree (Log-Structured Merge Tree) Basics
 *
 * Difficulty: Hard
 * Estimated Time: 40 minutes
 *
 * Topics to know:
 * - LSM tree structure
 * - Write-optimized data structures
 * - Memory + disk levels
 * - Compaction strategy
 *
 * Problem:
 * Implement simplified LSM tree with in-memory buffer (memtable)
 * and sorted disk levels. Flush and compact when needed.
 *
 * Requirements:
 * - put(key, value) writes to memtable
 * - get(key) searches memtable then levels
 * - Flush memtable when size exceeded
 * - Simple compaction (merge levels)
 *
 * Example:
 * const lsm = new LSMTree(3);  // memtable size
 * lsm.put("a", 1); lsm.put("b", 2);
 * lsm.get("a");  // 1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

type Key = string;
type Value = any;
type MemTable = Map<Key, Value>;
type SSTable = Map<Key, Value>; // Sorted String Table (simplified)

class LSMTree {
  private memtable: MemTable;
  private levels: SSTable[];
  private memtableSize: number;
  private threshold: number;

  constructor(threshold: number = 10) {
    this.memtable = new Map();
    this.levels = [];
    this.memtableSize = 0;
    this.threshold = threshold;
  }

  put(key: Key, value: Value): void {
    // Implementation here
  }

  get(key: Key): Value | undefined {
    // Implementation here
    return undefined;
  }

  private flush(): void {
    // Flush memtable to disk level
  }

  private compact(): void {
    // Merge levels
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const lsm = new LSMTree(3);
  lsm.put("a", 1);
  lsm.put("b", 2);

  console.assert(lsm.get("a") === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  lsm.put("c", 3);
  lsm.put("d", 4);  // Should trigger flush

  console.assert(lsm.get("b") === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
