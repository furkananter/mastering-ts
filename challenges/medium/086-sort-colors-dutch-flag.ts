/**
 * CHALLENGE: Sort Colors (Dutch National Flag)
 *
 * Difficulty: Medium
 * Estimated Time: 10 minutes
 *
 * Topics to know:
 * - Three-way partitioning
 * - Dutch National Flag algorithm
 * - In-place sorting
 * - Three pointers
 *
 * Problem:
 * Sort array with only 0s, 1s, and 2s in place.
 * Use one-pass algorithm (Dutch National Flag).
 *
 * Requirements:
 * - Sort in place
 * - One pass (O(n))
 * - Use three pointers (low, mid, high)
 * - No counting sort
 *
 * Example:
 * sortColors([2,0,2,1,1,0]);  // [0,0,1,1,2,2]
 * sortColors([2,0,1]);        // [0,1,2]
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  const arr1 = [2,0,2,1,1,0];
  sortColors(arr1);
  console.assert(JSON.stringify(arr1) === JSON.stringify([0,0,1,1,2,2]), "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  const arr2 = [2,0,1];
  sortColors(arr2);
  console.assert(JSON.stringify(arr2) === JSON.stringify([0,1,2]), "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
