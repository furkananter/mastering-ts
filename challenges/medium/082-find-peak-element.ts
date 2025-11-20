/**
 * CHALLENGE: Find Peak Element
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Binary search
 * - Peak finding
 * - Local maximum
 * - Logarithmic time
 *
 * Problem:
 * Find a peak element in array (element greater than its neighbors).
 * Multiple peaks may exist, return any. Use O(log n).
 *
 * Requirements:
 * - O(log n) time using binary search
 * - nums[-1] and nums[n] considered -infinity
 * - Return any peak index
 * - Check slope to decide direction
 *
 * Example:
 * findPeakElement([1,2,3,1]);      // 2
 * findPeakElement([1,2,1,3,5,6,4]); // 1 or 5
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const result1 = findPeakElement([1,2,3,1]);
  console.assert(result1 === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const result2 = findPeakElement([1,2,1,3,5,6,4]);
  console.assert(result2 === 1 || result2 === 5, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
