/**
 * CHALLENGE: Treap (Randomized Binary Search Tree)
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Treap data structure
 * - BST + Heap properties
 * - Tree rotations
 * - Random priorities
 *
 * Problem:
 * Implement Treap combining BST and heap. Each node has key (BST order)
 * and random priority (heap order). Use rotations to maintain both properties.
 *
 * Requirements:
 * - insert(key) with random priority
 * - delete(key)
 * - search(key)
 * - Expected O(log n) operations
 *
 * Example:
 * const treap = new Treap();
 * treap.insert(10); treap.insert(20); treap.insert(5);
 * treap.search(20);  // true
 * treap.delete(10);
 * treap.search(10);  // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface TreapNode<T> {
  key: T;
  priority: number;
  left: TreapNode<T> | null;
  right: TreapNode<T> | null;
}

class Treap<T = number> {
  private root: TreapNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(key: T): void {
    // Implementation here
  }

  delete(key: T): void {
    // Implementation here
  }

  search(key: T): boolean {
    // Implementation here
    return false;
  }

  private rotateRight(node: TreapNode<T>): TreapNode<T> {
    // Implementation here
    return node;
  }

  private rotateLeft(node: TreapNode<T>): TreapNode<T> {
    // Implementation here
    return node;
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const treap = new Treap();
  treap.insert(10);
  treap.insert(20);
  treap.insert(5);

  console.assert(treap.search(20) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  treap.delete(10);
  console.assert(treap.search(10) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
