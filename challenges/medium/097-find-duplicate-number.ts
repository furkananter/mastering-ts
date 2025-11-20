/**
 * CHALLENGE: Find Duplicate Number
 *
 * Difficulty: Medium
 * Estimated Time: 12 minutes
 *
 * Topics to know:
 * - Floyd's cycle detection
 * - Array as linked list
 * - Fast/slow pointers
 * - Constant space
 *
 * Problem:
 * Array of n+1 integers where each is between 1 and n.
 * Exactly one duplicate exists (may appear more than twice).
 * Find it without modifying array and using O(1) space.
 *
 * Requirements:
 * - Don't modify array
 * - O(1) space
 * - Use Floyd's cycle detection
 * - Treat array as linked list (index->value)
 *
 * Example:
 * findDuplicate([1,3,4,2,2]);      // 2
 * findDuplicate([3,1,3,4,2]);      // 3
 */

// ============================================
// YOUR SOLUTION HERE
// ============================================

// ============================================
// TEST CASES - Don't modify
// ============================================

function runTests(): void {
  console.log("Running tests...\n");

  console.assert(findDuplicate([1,3,4,2,2]) === 2, "❌ Test 1 failed");
  console.log("✅ Test 1 passed");

  console.assert(findDuplicate([3,1,3,4,2]) === 3, "❌ Test 2 failed");
  console.log("✅ Test 2 passed");

  console.log("\n🎉 All tests passed!");
}

// Uncomment to run tests:
// runTests();
