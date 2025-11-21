/**
 * CHALLENGE: Generic Stack with TypeScript
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - TypeScript generics
 * - Type parameters
 * - Class implementation
 * - Type safety
 *
 * Problem:
 * Implement a generic Stack class in TypeScript that works with any type.
 * Include push, pop, peek, isEmpty, and size methods.
 *
 * Requirements:
 * - Use TypeScript generic <T>
 * - Maintain type safety
 * - Implement all methods
 * - Private storage
 *
 * Example:
 * const stack = new Stack<number>();
 * stack.push(1);
 * stack.push(2);
 * stack.peek();    // 2 (type: number)
 * stack.size();    // 2
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    // TODO: Implement push
    throw new Error("Not implemented");
  }

  pop(): T | undefined {
    // TODO: Implement pop
    throw new Error("Not implemented");
  }

  peek(): T | undefined {
    // TODO: Implement peek
    throw new Error("Not implemented");
  }

  isEmpty(): boolean {
    // TODO: Implement isEmpty
    throw new Error("Not implemented");
  }

  size(): number {
    // TODO: Implement size
    throw new Error("Not implemented");
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const numStack = new Stack<number>();
  numStack.push(1);
  numStack.push(2);

  console.assert(numStack.peek() === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(numStack.size() === 2, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(numStack.pop() === 2, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  const strStack = new Stack<string>();
  strStack.push("hello");
  console.assert(strStack.peek() === "hello", "❌ Test 4 failed");
  console.log("✅ Test 4 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
