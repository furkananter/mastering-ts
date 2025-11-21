/**
 * CHALLENGE: Queue Implementation
 *
 * Difficulty: Easy
 * Estimated Time: 6 minutes
 *
 * Topics to know:
 * - Queue data structure (FIFO)
 * - Array methods (push, shift)
 * - Class or closure pattern
 *
 * Problem:
 * Implement a simple queue with enqueue, dequeue, peek, and isEmpty methods.
 *
 * Requirements:
 * - enqueue(item) - add to back
 * - dequeue() - remove and return front (undefined if empty)
 * - peek() - view front without removing (undefined if empty)
 * - isEmpty() - check if queue is empty
 *
 * Example:
 * const queue = createQueue();
 * queue.enqueue(1);
 * queue.enqueue(2);
 * queue.peek();       // 1
 * queue.dequeue();    // 1
 * queue.isEmpty();    // false
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface Queue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
}

function createQueue<T = any>(): Queue<T> {
  return {
    enqueue(item: T): void {},
    dequeue(): T | undefined { return undefined; },
    peek(): T | undefined { return undefined; },
    isEmpty(): boolean { return false; }
  };
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const queue = createQueue();

  console.assert(queue.isEmpty() === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  queue.enqueue(1);
  queue.enqueue(2);
  console.assert(queue.peek() === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(queue.dequeue() === 1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.assert(queue.isEmpty() === false, "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
