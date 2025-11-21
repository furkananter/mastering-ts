/**
 * CHALLENGE: Detect Cycle in Linked List
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Linked lists
 * - Floyd's cycle detection (tortoise and hare)
 * - Two pointers
 * - Cycle detection
 *
 * Problem:
 * Detect if a linked list has a cycle using Floyd's algorithm
 * (slow and fast pointers). Return true if cycle exists.
 *
 * Requirements:
 * - Use two pointers (slow moves 1, fast moves 2)
 * - O(n) time, O(1) space
 * - Return boolean
 * - Don't modify list
 *
 * Example:
 * // 1 -> 2 -> 3 -> 4
 * //           ^    |
 * //           |____|
 * hasCycle(head);  // true
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const node4 = { value: 4, next: null };
  const node3 = { value: 3, next: node4 };
  const node2 = { value: 2, next: node3 };
  const node1 = { value: 1, next: node2 };
  node4.next = node2; // create cycle

  console.assert(hasCycle(node1) === true, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const straightNode3 = { value: 3, next: null };
  const straightNode2 = { value: 2, next: straightNode3 };
  const straightNode1 = { value: 1, next: straightNode2 };

  console.assert(hasCycle(straightNode1) === false, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
