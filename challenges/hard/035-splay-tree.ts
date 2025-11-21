/**
 * CHALLENGE: Splay Tree Implementation
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Splay tree (self-adjusting BST)
 * - Splaying operation
 * - Zig, Zig-Zig, Zig-Zag rotations
 * - Amortized O(log n)
 *
 * Problem:
 * Implement splay tree where accessed nodes are moved to root via splaying.
 * Provides good amortized performance for non-uniform access patterns.
 *
 * Requirements:
 * - insert(key) with splaying
 * - search(key) with splaying
 * - delete(key) with splaying
 * - Implement zig, zig-zig, zig-zag
 *
 * Example:
 * const splay = new SplayTree();
 * splay.insert(10); splay.insert(20); splay.insert(30);
 * splay.search(20);  // true (20 is now root)
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface SplayNode<T> {
  key: T;
  left: SplayNode<T> | null;
  right: SplayNode<T> | null;
  parent: SplayNode<T> | null;
}

class SplayTree<T = number> {
  private root: SplayNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(key: T): void {
    // Implementation here
  }

  search(key: T): boolean {
    // Implementation here
    return false;
  }

  delete(key: T): void {
    // Implementation here
  }

  private splay(node: SplayNode<T>): void {
    // Splay operation to move node to root
  }

  private rotateRight(node: SplayNode<T>): void {
    // Implementation here
  }

  private rotateLeft(node: SplayNode<T>): void {
    // Implementation here
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const splay = new SplayTree();
  splay.insert(10);
  splay.insert(20);
  splay.insert(30);

  console.assert(splay.search(20) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  splay.delete(20);
  console.assert(splay.search(20) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
