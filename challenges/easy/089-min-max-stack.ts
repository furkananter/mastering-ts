/**
 * CHALLENGE: Min/Max Stack
 *
 * Difficulty: Easy
 * Estimated Time: 7 minutes
 *
 * Topics to know:
 * - Stack data structure
 * - Tracking min/max values
 * - O(1) retrieval
 *
 * Problem:
 * Implement a stack that can return the minimum and maximum values
 * in O(1) time. Support push, pop, min, and max operations.
 *
 * Requirements:
 * - push(val) - add value
 * - pop() - remove top value
 * - min() - get minimum value in stack
 * - max() - get maximum value in stack
 * - All operations should be O(1)
 *
 * Example:
 * const stack = createMinMaxStack();
 * stack.push(5);
 * stack.push(1);
 * stack.push(3);
 * stack.min();    // 1
 * stack.max();    // 5
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface MinMaxStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  min(): T | undefined;
  max(): T | undefined;
}

function createMinMaxStack<T = number>(): MinMaxStack<T> {
  return {
    push(item: T): void {},
    pop(): T | undefined { return undefined; },
    min(): T | undefined { return undefined; },
    max(): T | undefined { return undefined; }
  };
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const stack = createMinMaxStack();

  stack.push(5);
  stack.push(1);
  stack.push(3);

  console.assert(stack.min() === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(stack.max() === 5, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  stack.pop();
  console.assert(stack.max() === 5, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
