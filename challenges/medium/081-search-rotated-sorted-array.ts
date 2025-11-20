/**
 * CHALLENGE: Search in Rotated Sorted Array
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Modified binary search
 * - Array rotation
 * - Pivot finding
 * - Logarithmic time
 *
 * Problem:
 * Search for target in rotated sorted array.
 * Array was sorted then rotated at unknown pivot.
 * Use O(log n) modified binary search.
 *
 * Requirements:
 * - O(log n) time
 * - Find target index or -1
 * - Determine which half is sorted
 * - Check if target in sorted half
 *
 * Example:
 * search([4,5,6,7,0,1,2], 0);  // 4
 * search([4,5,6,7,0,1,2], 3);  // -1
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(search([4,5,6,7,0,1,2], 0) === 4, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(search([4,5,6,7,0,1,2], 3) === -1, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.assert(search([1], 0) === -1, "❌ Test 3 failed");
  console.log("✅ Test 3 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
