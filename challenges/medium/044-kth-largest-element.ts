/**
 * CHALLENGE: Kth Largest Element in Array
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - QuickSelect algorithm
 * - Partitioning
 * - Heap (alternative approach)
 * - Selection algorithms
 *
 * Problem:
 * Find the kth largest element in an unsorted array.
 * Use QuickSelect for O(n) average time.
 *
 * Requirements:
 * - Find kth largest (1st largest is max)
 * - Use QuickSelect or Heap
 * - Don't sort entire array
 * - O(n) average time
 *
 * Example:
 * kthLargest([3,2,1,5,6,4], 2);  // 5
 * kthLargest([3,2,3,1,2,4,5,5,6], 4);  // 4
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(kthLargest([3,2,1,5,6,4], 2) === 5, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(kthLargest([3,2,3,1,2,4,5,5,6], 4) === 4, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(kthLargest([1], 1) === 1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
