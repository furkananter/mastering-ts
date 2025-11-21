/**
 * CHALLENGE: Min Heap Implementation
 *
 * Difficulty: Medium
 * Estimated Time: 15 minutes
 *
 * Topics to know:
 * - Heap data structure
 * - Binary heap operations
 * - Heapify up/down
 * - Array-based tree
 *
 * Problem:
 * Implement a Min Heap with insert, extractMin, and peek operations.
 * Use an array to store heap.
 *
 * Requirements:
 * - insert(value) - add to heap, maintain heap property
 * - extractMin() - remove and return minimum
 * - peek() - view minimum without removing
 * - Parent at index i has children at 2i+1 and 2i+2
 *
 * Example:
 * const heap = new MinHeap();
 * heap.insert(5);
 * heap.insert(3);
 * heap.insert(7);
 * heap.peek();        // 3
 * heap.extractMin();  // 3
 * heap.peek();        // 5
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const heap = new MinHeap();
  heap.insert(5);
  heap.insert(3);
  heap.insert(7);
  heap.insert(1);

  console.assert(heap.peek() === 1, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(heap.extractMin() === 1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(heap.peek() === 3, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
