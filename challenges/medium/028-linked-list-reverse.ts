/**
 * CHALLENGE: Reverse Linked List
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Linked lists
 * - Pointer manipulation
 * - In-place reversal
 * - Iteration or recursion
 *
 * Problem:
 * Reverse a singly linked list in place.
 * Return the new head node.
 *
 * Requirements:
 * - Reverse list in place (O(1) space)
 * - Node: { value, next }
 * - Can use iteration or recursion
 * - Return new head
 *
 * Example:
 * // Input: 1 -> 2 -> 3 -> null
 * // Output: 3 -> 2 -> 1 -> null
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const node3 = { value: 3, next: null };
  const node2 = { value: 2, next: node3 };
  const node1 = { value: 1, next: node2 };

  const reversed = reverseLinkedList(node1);

  console.assert(reversed.value === 3, "❌ Test 1 failed: head should be 3");
  console.assert(reversed.next.value === 2, "❌ Test 1 failed");
  console.assert(reversed.next.next.value === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const single = { value: 42, next: null };
  const reversedSingle = reverseLinkedList(single);
  console.assert(reversedSingle.value === 42, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
