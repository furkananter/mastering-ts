/**
 * CHALLENGE: Add Two Numbers (Linked Lists)
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Linked lists
 * - Digit addition with carry
 * - List traversal
 * - Number representation
 *
 * Problem:
 * Add two numbers represented as linked lists (digits in reverse order).
 * Return sum as linked list.
 *
 * Requirements:
 * - Each node contains single digit
 * - Digits stored in reverse order
 * - Handle carry
 * - Return new linked list
 *
 * Example:
 * // 342 + 465 = 807
 * // Input: 2->4->3, 5->6->4
 * // Output: 7->0->8
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const l1 = { value: 2, next: { value: 4, next: { value: 3, next: null }}};
  const l2 = { value: 5, next: { value: 6, next: { value: 4, next: null }}};

  const result = addTwoNumbers(l1, l2);

  console.assert(result.value === 7, "❌ Test 1 failed");
  console.assert(result.next.value === 0, "❌ Test 1 failed");
  console.assert(result.next.next.value === 8, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
