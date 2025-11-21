/**
 * CHALLENGE: Skip List Implementation
 *
 * Difficulty: Hard
 * Estimated Time: 30 minutes
 *
 * Topics to know:
 * - Skip list data structure
 * - Probabilistic data structures
 * - Multiple levels
 * - Random level generation
 *
 * Problem:
 * Implement skip list with multiple levels for fast search.
 * Use randomization to determine node levels (coin flip).
 *
 * Requirements:
 * - insert(key) with random level
 * - search(key) returns boolean
 * - delete(key)
 * - Expected O(log n) operations
 *
 * Example:
 * const skip = new SkipList();
 * skip.insert(1); skip.insert(2); skip.insert(3);
 * skip.search(2);  // true
 * skip.delete(2);
 * skip.search(2);  // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface SkipListNode<T> {
  key: T;
  forward: Array<SkipListNode<T> | null>;
}

class SkipList<T = number> {
  private head: SkipListNode<T>;
  private readonly maxLevel: number;
  private level: number;
  private readonly probability: number;

  constructor(maxLevel: number = 16, probability: number = 0.5) {
    this.maxLevel = maxLevel;
    this.probability = probability;
    this.level = 0;
    this.head = {
      key: null as any,
      forward: new Array(maxLevel).fill(null)
    };
  }

  insert(key: T): void {
    // Implementation here
  }

  search(key: T): boolean {
    // Implementation here
    return false;
  }

  delete(key: T): boolean {
    // Implementation here
    return false;
  }

  private randomLevel(): number {
    let lvl = 0;
    while (Math.random() < this.probability && lvl < this.maxLevel - 1) {
      lvl++;
    }
    return lvl;
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const skip = new SkipList();
  skip.insert(1);
  skip.insert(2);
  skip.insert(3);

  console.assert(skip.search(2) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  skip.delete(2);
  console.assert(skip.search(2) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
