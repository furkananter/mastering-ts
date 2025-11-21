/**
 * CHALLENGE: Deque (Double-Ended Queue) Basics
 *
 * Difficulty: Easy
 * Estimated Time: 7 minutes
 *
 * Topics to know:
 * - Deque data structure
 * - Array methods (push, pop, unshift, shift)
 * - Both ends access
 *
 * Problem:
 * Implement a deque (double-ended queue) that allows adding/removing
 * from both front and back.
 *
 * Requirements:
 * - addFront(item) - add to front
 * - addBack(item) - add to back
 * - removeFront() - remove from front
 * - removeBack() - remove from back
 * - isEmpty() - check if empty
 *
 * Example:
 * const deque = createDeque();
 * deque.addFront(1);
 * deque.addBack(2);
 * deque.removeFront();   // 1
 * deque.removeBack();    // 2
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface Deque<T> {
  pushFront(item: T): void;
  pushBack(item: T): void;
  popFront(): T | undefined;
  popBack(): T | undefined;
}

function createDeque<T = any>(): Deque<T> {
  return {
    pushFront(item: T): void {},
    pushBack(item: T): void {},
    popFront(): T | undefined { return undefined; },
    popBack(): T | undefined { return undefined; }
  };
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const deque = createDeque();

  deque.addFront(1);
  deque.addBack(2);

  console.assert(deque.removeFront() === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(deque.removeBack() === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(deque.isEmpty() === true, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
