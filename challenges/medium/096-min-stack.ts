/**
 * CHALLENGE: Min Stack (Stack with Min in O(1))
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Stack data structure
 * - Auxiliary stack for min tracking
 * - O(1) operations
 * - State management
 *
 * Problem:
 * Design stack supporting push, pop, top, and getMin in O(1) time.
 * Use auxiliary stack to track minimums.
 *
 * Requirements:
 * - push(val) - add to stack
 * - pop() - remove top
 * - top() - get top element
 * - getMin() - get minimum in O(1)
 *
 * Example:
 * const stack = new MinStack();
 * stack.push(-2);
 * stack.push(0);
 * stack.push(-3);
 * stack.getMin();  // -3
 * stack.pop();
 * stack.getMin();  // -2
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    // TODO: Implement push
    throw new Error("Not implemented");
  }

  pop(): void {
    // TODO: Implement pop
    throw new Error("Not implemented");
  }

  top(): number {
    // TODO: Implement top
    throw new Error("Not implemented");
  }

  getMin(): number {
    // TODO: Implement getMin
    throw new Error("Not implemented");
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const stack = new MinStack();
  stack.push(-2);
  stack.push(0);
  stack.push(-3);

  console.assert(stack.getMin() === -3, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  stack.pop();
  console.assert(stack.top() === 0, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(stack.getMin() === -2, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
