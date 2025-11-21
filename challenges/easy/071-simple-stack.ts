/**
 * CHALLENGE: Stack Implementation
 *
 * Difficulty: Easy
 * Estimated Time: 6 minutes
 *
 * Topics to know:
 * - Stack data structure (LIFO)
 * - Array methods (push, pop)
 * - Class or closure pattern
 *
 * Problem:
 * Implement a simple stack with push, pop, peek, and isEmpty methods.
 *
 * Requirements:
 * - push(item) - add to top
 * - pop() - remove and return top (undefined if empty)
 * - peek() - view top without removing (undefined if empty)
 * - isEmpty() - check if stack is empty
 *
 * Example:
 * const stack = createStack();
 * stack.push(1);
 * stack.push(2);
 * stack.peek();      // 2
 * stack.pop();       // 2
 * stack.isEmpty();   // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface Stack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
}

function createStack<T = any>(): Stack<T> {
  return {
    push(item: T): void {},
    pop(): T | undefined { return undefined; },
    peek(): T | undefined { return undefined; },
    isEmpty(): boolean { return false; }
  };
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const stack = createStack();

  console.assert(stack.isEmpty() === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  stack.push(1);
  stack.push(2);
  console.assert(stack.peek() === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(stack.pop() === 2, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(stack.isEmpty() === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
