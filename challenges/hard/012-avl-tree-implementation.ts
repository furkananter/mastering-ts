/**
 * CHALLENGE: AVL Tree (Self-Balancing BST)
 *
 * Difficulty: Hard
 * Estimated Time: 35 minutes
 *
 * Topics to know:
 * - Binary Search Tree
 * - Self-balancing trees
 * - Tree rotations (LL, RR, LR, RL)
 * - Height balancing
 *
 * Problem:
 * Implement AVL tree with insert, delete, and search operations.
 * Maintain balance factor and perform rotations to keep tree balanced.
 *
 * Requirements:
 * - insert(val) - add node and rebalance
 * - delete(val) - remove node and rebalance
 * - search(val) - find node
 * - Implement all 4 rotation types
 * - Maintain O(log n) height
 *
 * Example:
 * const avl = new AVLTree();
 * avl.insert(10); avl.insert(20); avl.insert(30);
 * avl.search(20);  // true
 * avl.delete(20);
 * avl.search(20);  // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface AVLNode<T> {
  value: T;
  left: AVLNode<T> | null;
  right: AVLNode<T> | null;
  height: number;
}

class AVLTree<T = number> {
  private root: AVLNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    // Implementation here
  }

  delete(value: T): void {
    // Implementation here
  }

  search(value: T): boolean {
    // Implementation here
    return false;
  }

  private getHeight(node: AVLNode<T> | null): number {
    return node?.height ?? 0;
  }

  private getBalance(node: AVLNode<T> | null): number {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  private rotateRight(y: AVLNode<T>): AVLNode<T> {
    // Implementation here
    return y;
  }

  private rotateLeft(x: AVLNode<T>): AVLNode<T> {
    // Implementation here
    return x;
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const avl = new AVLTree();
  avl.insert(10);
  avl.insert(20);
  avl.insert(30);

  console.assert(avl.search(20) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  avl.delete(20);
  console.assert(avl.search(20) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  avl.insert(40);
  avl.insert(50);
  console.assert(avl.search(40) === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
