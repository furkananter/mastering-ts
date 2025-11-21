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

enum Color {
  RED = 'RED',
  BLACK = 'BLACK'
}

interface RBNode<T> {
  value: T;
  color: Color;
  left: RBNode<T> | null;
  right: RBNode<T> | null;
  parent: RBNode<T> | null;
}

class RedBlackTree<T = number> {
  private root: RBNode<T> | null;
  private readonly NIL: RBNode<T>;

  constructor() {
    this.NIL = {
      value: null as any,
      color: Color.BLACK,
      left: null,
      right: null,
      parent: null
    };
    this.root = this.NIL;
  }

  insert(value: T): void {
    // Implementation here
  }

  search(value: T): boolean {
    // Implementation here
    return false;
  }

  private rotateLeft(node: RBNode<T>): void {
    // Implementation here
  }

  private rotateRight(node: RBNode<T>): void {
    // Implementation here
  }

  private fixInsert(node: RBNode<T>): void {
    // Fix RB tree properties after insert
  }
}

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
