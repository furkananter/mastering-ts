/**
 * CHALLENGE: Linked List Implementation
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Linked list data structure
 * - Node pointers
 * - List traversal
 * - Insert/delete operations
 *
 * Problem:
 * Implement a singly linked list with append, prepend, find, and delete methods.
 *
 * Requirements:
 * - Node structure: { value, next }
 * - append(value) - add to end
 * - prepend(value) - add to beginning
 * - find(value) - return node or null
 * - delete(value) - remove first occurrence
 * - toArray() - convert to array for testing
 *
 * Example:
 * const list = new LinkedList();
 * list.append(1);
 * list.append(2);
 * list.prepend(0);
 * list.toArray();  // [0, 1, 2]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

interface ListNode<T> {
  value: T;
  next: ListNode<T> | null;
}

class LinkedList<T = any> {
  private head: ListNode<T> | null = null;

  append(value: T): void {
    // TODO: Implement append
    throw new Error("Not implemented");
  }

  prepend(value: T): void {
    // TODO: Implement prepend
    throw new Error("Not implemented");
  }

  find(value: T): ListNode<T> | null {
    // TODO: Implement find
    throw new Error("Not implemented");
  }

  delete(value: T): void {
    // TODO: Implement delete
    throw new Error("Not implemented");
  }

  toArray(): T[] {
    // TODO: Implement toArray
    throw new Error("Not implemented");
  }
}

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.prepend(0);

  const arr1 = list.toArray();
  console.assert(JSON.stringify(arr1) === JSON.stringify([0, 1, 2]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const found = list.find(1);
  console.assert(found !== null && found.value === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  list.delete(1);
  const arr2 = list.toArray();
  console.assert(JSON.stringify(arr2) === JSON.stringify([0, 2]), "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
